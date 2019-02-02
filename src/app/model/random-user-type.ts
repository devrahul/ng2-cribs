export interface IRandomUser {
  results: UserItems[];

}

export interface UserItems {
  gender: string;
  name: IContact[];
  location: ILocation[];
  email: string;
  login: ILogin[];
  dob: Date;
  registered: Date;
  phone: number;
  cell: number;
  id: Ids[];
  picture: IPicture[];
  showDetails ?: boolean;
  limit ?: number;
}
export interface IContact {
  title: string;
  first: string;
  last: string;
}
export interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

export interface ILogin {
  username: string;
  password: string;
  salt: string;
  md5: number;
  sha1: number;
  sha256: number;
}

export interface Ids {
  name: string;
  value: string;
}
export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
  nat: string;
}
