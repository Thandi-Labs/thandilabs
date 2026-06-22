export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  requires_subscription: boolean;
  created_at: Date;
}
