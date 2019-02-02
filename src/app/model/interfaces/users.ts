import { Address } from './address';
import { Geo } from './geo';
export interface IUserItems {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address[];
  geo: Geo[];
  phone: string;
  website: string;
  company: Company[];
  showOtherDetails: boolean;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
