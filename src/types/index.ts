// Admins
export interface Admin {
  id: string;
  name: string;
  profile_pic: string | null;
  phone_number: string | null;
  email: string;
  address: string | null;
  password_hash: string;
  role: string; // superadmin, admin, editor
  status: boolean;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}
// Partner
export interface Partner {
  id: string;
  name: string;
  website_url: string | null;
  logo_url: string;
  description: string | null;
  status: boolean;
  display_order: number | null;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

// Admin Password Reset
export interface AdminPasswordReset {
  id: string;
  admin_id: string;
  token: string;
  expires_at: string;
  used: boolean;
  created_at: string | null;
}

// Blog Post
export interface Product {
  id: string;
  title: string;
  slug: string;
  primary_image_url: string;
  secondary_image_url: string | null;
  sub_title: string | null;
  Description: string | null;
  category_id: string;
  is_popular: boolean;
  is_published: boolean;
  Active: boolean;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

// Category
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

// Appointment Request
export interface AppointmentRequest {
  id: string;
  name: string;
  email: string | null;
  phone_number: string;
  message: string | null;
  is_handled: boolean;
  handled_by: string | null;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface SiteInfo {
  id: string;
  project_count: number | null;
  client_count: number | null;
  phone_primary: string | null;
  phone_secondary: string | null;
  email_primary: string | null;
  email_secondary: string | null;
  address: string | null;
  vision: string | null;
  mission: string | null;
  values: string | null;
  homepage_image_url: string | null;
  contact_image_url: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string | null;
  photo_url: string | null;
  location: string | null;
  organization: string | null;
  platform: string | null;
  rating: number | null;
  message: string;
  status: boolean;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category_id: string;
  projectName: string | null;
  shortNote: string | null;
  longDescription: string | null;
  projectImagePath: string;
  projectUrl: string | null;
  location: string | null;
  descriptions: Description[] | null;
  status: boolean;
  display_order: number | null;
  created_by: string | null;
  updated_by: string | null;
  deleted_by: string | null;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface Description {
  id: string;
  project_id: string;
  primary_ImagePath: string;
  secondary_ImagePath: string | null;
  description: string;
  status: boolean;
  created_at: string | null;
  updated_at: string | null;
}
