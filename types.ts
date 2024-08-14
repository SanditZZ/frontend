export interface Farm {
  id: string;
  name: string;
  location: string;
  areaSize: string;
  price: string;
  farmType: string;
  owner: string;
  contactInfo: {
    email: string;
    phone: string;
  };
}
