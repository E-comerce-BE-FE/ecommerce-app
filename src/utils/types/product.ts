export interface ProductType {
  id: number;
  product_name: string;
  stock: number;
  price: number;
  product_image: string;
  user: UserType;
}

export interface UserType {
  user_id: number;
  name: string;
  address: string;
  profilepicture: string;
}
