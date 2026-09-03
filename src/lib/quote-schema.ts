// Shared validation rules for the Request a Quote form, used by both the
// client component (inline validation) and the /api/quote route handler
// (authoritative server-side validation). Keeping one source of truth means
// the two never drift apart.

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
];
export const ACCEPTED_FILE_EXTENSIONS = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp";

export interface QuoteFormValues {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  requirement: string;
  quantity: string;
  destinationCountry: string;
  additionalInfo: string;
  consent: boolean;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.companyName.trim()) errors.companyName = "Enter your company name.";

  if (!values.businessEmail.trim()) {
    errors.businessEmail = "Enter your business email address.";
  } else if (!EMAIL_PATTERN.test(values.businessEmail.trim())) {
    errors.businessEmail = "Enter a valid email address.";
  }

  if (!values.requirement.trim()) {
    errors.requirement = "Tell us what you are looking for.";
  }

  if (!values.quantity.trim()) errors.quantity = "Enter the quantity required.";
  if (!values.destinationCountry.trim()) {
    errors.destinationCountry = "Enter the destination country.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm you agree before sending your enquiry.";
  }

  return errors;
}

export function validateFile(file: File | null): string | undefined {
  if (!file) return undefined;
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "File is too large. Maximum size is 10MB.";
  }
  if (file.type && !ACCEPTED_FILE_TYPES.includes(file.type)) {
    return "Unsupported file type. Please upload a PDF, Word document or image.";
  }
  return undefined;
}
