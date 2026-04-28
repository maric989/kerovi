export type Gender = "male" | "female";
export type PuppyStatus = "available" | "reserved" | "sold";
export type DogCategory = "stud" | "female" | "champion" | "retired";
export type LitterStatus = "planned" | "born" | "completed";
export type GalleryCategory = "puppies" | "adult-dogs" | "shows" | "new-homes" | "everyday";

export interface Dog {
  id: string;
  slug: string;
  name: string;
  gender: Gender;
  dateOfBirth: string;
  color: string;
  category: DogCategory[];
  healthTests: string[];
  pedigreeUrl?: string;
  titles: string[];
  temperament: string;
  description: string;
  images: string[];
  coverImage: string;
}

export interface Litter {
  id: string;
  slug: string;
  motherId: string;
  fatherId: string;
  birthDate: string | null;
  status: LitterStatus;
  expectedColors: string[];
  expectedPickupDate?: string;
  waitlistOpen: boolean;
  description?: string;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  gender: Gender;
  dateOfBirth: string;
  color: string;
  status: PuppyStatus;
  temperament: string;
  litterId: string;
  images: string[];
  coverImage: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  ownerName: string;
  dogName: string;
  city: string;
  comment: string;
  image?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  hasPreviousDog: string;
  livingArrangement: string;
  message: string;
}

