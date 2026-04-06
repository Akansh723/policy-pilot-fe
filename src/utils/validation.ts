export interface ValidationResult {
  valid: boolean;
  error: string;
}

const ok: ValidationResult = { valid: true, error: '' };
const fail = (error: string): ValidationResult => ({ valid: false, error });

// Strips HTML tags and trims whitespace
export const sanitize = (input: string): string =>
  input.replace(/<[^>]*>/g, '').trim();

// 10-digit Indian mobile number
export const validateMobile = (value: string): ValidationResult => {
  if (!value) return fail('Mobile number is required');
  if (!/^\d{10}$/.test(value)) return fail('Enter a valid 10-digit mobile number');
  if (/^0/.test(value)) return fail('Mobile number cannot start with 0');
  return ok;
};

// 6-digit numeric OTP
export const validateOtp = (value: string): ValidationResult => {
  if (!value) return fail('OTP is required');
  if (!/^\d{6}$/.test(value)) return fail('Enter a valid 6-digit OTP');
  return ok;
};

// Person name: letters, spaces, hyphens, apostrophes, dots only
export const validateName = (value: string): ValidationResult => {
  const cleaned = sanitize(value);
  if (!cleaned) return fail('Name is required');
  if (cleaned.length < 2) return fail('Name must be at least 2 characters');
  if (cleaned.length > 100) return fail('Name must be under 100 characters');
  if (!/^[a-zA-Z\s'.\-]+$/.test(cleaned)) return fail('Name contains invalid characters');
  return ok;
};

// Indian vehicle plate: e.g. DL01AB1234, KA05MN0001
export const validateVehiclePlate = (value: string): ValidationResult => {
  const cleaned = sanitize(value).toUpperCase().replace(/\s/g, '');
  if (!cleaned) return fail('Vehicle number is required');
  if (!/^[A-Z]{2}\d{1,2}[A-Z]{0,3}\d{1,4}$/.test(cleaned))
    return fail('Enter a valid vehicle number (e.g. DL01AB1234)');
  return ok;
};

// Alphanumeric text field (manufacturer, model, city, etc.)
export const validateAlphaText = (value: string, fieldName: string, maxLen = 50): ValidationResult => {
  const cleaned = sanitize(value);
  if (!cleaned) return fail(`${fieldName} is required`);
  if (cleaned.length > maxLen) return fail(`${fieldName} must be under ${maxLen} characters`);
  if (!/^[a-zA-Z0-9\s\-'.]+$/.test(cleaned)) return fail(`${fieldName} contains invalid characters`);
  return ok;
};

// Numeric string (zip code, etc.)
export const validateNumericString = (value: string, fieldName: string, exactLen?: number): ValidationResult => {
  if (!value) return fail(`${fieldName} is required`);
  if (!/^\d+$/.test(value)) return fail(`${fieldName} must contain only digits`);
  if (exactLen && value.length !== exactLen) return fail(`${fieldName} must be ${exactLen} digits`);
  return ok;
};

// Year within a range
export const validateYear = (value: string | number): ValidationResult => {
  const year = typeof value === 'string' ? parseInt(value, 10) : value;
  if (isNaN(year)) return fail('Enter a valid year');
  if (year < 1900 || year > new Date().getFullYear()) return fail(`Year must be between 1900 and ${new Date().getFullYear()}`);
  return ok;
};

// Age within bounds
export const validateAge = (value: number): ValidationResult => {
  if (isNaN(value)) return fail('Enter a valid age');
  if (value < 18) return fail('Must be at least 18 years old');
  if (value > 100) return fail('Age must be under 100');
  return ok;
};
