

export type Company = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  linkedinUrl: string;

  verificationStatus: "PENDING" | "APPROVED" | "REJECTED";
  verifiedProfile: boolean;

  industry: string;
  description: string;
  website: string;
  founded: string;
  location: string;

  createdAt: string;
  updatedAt: string;
};
