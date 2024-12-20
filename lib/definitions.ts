import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(255, "Password must be 255 characters or fewer")
  .regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character",
  );

export const interviewFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  middleName: z.string(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  ssn: z.string().min(9, { message: "SSN must be at least 9 characters." }),
  dob: z.string(),
  spouseFirstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  spouseMiddleName: z.string(),
  spouseLastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  spouseEmail: z.string().email(),
  spousePhoneNumber: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be 20 digits or fewer")
    .regex(/^[0-9]+$/, "Phone number should contain only digits"),
  spouseSsn: z.string().min(9, {
    message: "SSN must be at least 9 characters.",
  }),
  spouseDob: z.string(),
  visaCategory: z.string(),
  occupation: z.string(),
  spouseOccupation: z.string(),
  currentAddress: z.string(),
  currentCity: z.string(),
  currentState: z.string(),
  zipCode: z.string(),

  dependentDetails: z.array(z.object({
    firstName: z.string(),
    middleName: z.string(),
    lastName: z.string(),
    relation: z.string(),
    dob: z.string(),
    ssn: z.string(),
  })),
  residencyStates: z.array(z.string()),

  wages: z.number(),
  spouseWages: z.number(),
  wagesFile: z.string().nullable(),

  businessIncome: z.boolean(),
  spouseBusinessIncome: z.boolean(),
  businessIncomeFile: z.string().nullable(),

  rentalIncome: z.boolean(),
  spouseRentalIncome: z.boolean(),
  rentalIncomeFile: z.string().nullable(),

  interestIncome: z.boolean(),
  spouseInterestIncome: z.boolean(),
  interestIncomeFile: z.string().nullable(),

  dividendIncome: z.boolean(),
  spouseDividendIncome: z.boolean(),
  dividendIncomeFile: z.string().nullable(),

  saleOfStock_CryptoIncome: z.any(),
  spouseSaleOfStock_CryptoIncome: z.any(),
  saleOfStock_CryptoIncomeFile: z.string().nullable(),

  retirePlanIncome: z.boolean(),
  spouseRetirePlanIncome: z.boolean(),
  retirePlanIncomeFile: z.string().nullable(),

  mortgageInterest: z.boolean(),
  spouseMortgageInterest: z.boolean(),
  mortgageInterestFile: z.string().nullable(),

  propertyTax: z.boolean(),
  spousePropertyTax: z.boolean(),
  propertyTaxFile: z.string().nullable(),

  charitableDonations: z.boolean(),
  spouseCharitableDonations: z.boolean(),
  charitableDonationsFile: z.string().nullable(),

  medicalExpenses: z.boolean(),
  spouseMedicalExpenses: z.boolean(),
  medicalExpensesFile: z.string().nullable(),

  studentLoanInterest: z.boolean(),
  spouseStudentLoanInterest: z.boolean(),
  studentLoanInterestFile: z.string().nullable(),

  educationExpenses: z.boolean(),
  spouseEducationExpenses: z.boolean(),
  educationExpensesFile: z.string().nullable(),

  fbar: z.boolean(),
  spouseFbar: z.boolean(),
  fbarFile: z.string().nullable(),

  fatca_pfic: z.boolean(),
  spouseFatca_pfic: z.boolean(),
  fatca_pfic_File: z.string().nullable(),
});

export const userRegistrationSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  email: z.string().email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be 20 digits or fewer")
    .regex(/^[0-9]+$/, "Phone number should contain only digits"),
  officeNumber: z
    .string()
    .min(10, "Office number must be at least 10 digits")
    .max(20, "Office number must be 20 digits or fewer")
    .regex(/^[0-9]+$/, "Office number should contain only digits")
    .optional(),
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const prePostTaxDocsSchema = z.object({
  documentType: z.string(),
  documentTypeFile: z.string(),
  documentRemarks: z.string().optional(),
});

export const changePasswordSchema = z.object({
  currentPass: passwordSchema,
  newPass: passwordSchema,
});

export type ResidencyStates = {
  states: string[];
};
