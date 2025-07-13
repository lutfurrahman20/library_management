import { Model } from "mongoose";

export interface IBook {
  _id : string;
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE "
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface BookInstanceMethods {
  updateCopies(quantity: number): Promise<void>;
}
export type BookModel = Model<IBook, {} , BookInstanceMethods>;

export interface IGetBooksPayload {
  filter? : string;
  sortBy? : string;
  sort?: string;
  limit? : string;
}
