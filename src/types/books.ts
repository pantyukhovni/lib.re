
export interface IBook {
  Title: string;
  Author: string;
  Price: number;
  Published: string;
  inStock: boolean;
  id: number;
}

export interface BooksState {
  books: IBook[];
  bookForModal: object;
}

export enum BooksActionType {
  ADD_NEW_BOOK = 'ADD_NEW_BOOK',
  MODIFY_BOOK = 'CHANGE_BOOK',
  DELETE_BOOK = 'DELETE_BOOK',
  SET_BOOK = 'SET_BOOK',
  FETCH_BOOK_BY_ID = 'FETCH_BOOK_BY_ID'
}

interface IAddBook {
  type: BooksActionType.ADD_NEW_BOOK;
  payload: IBook;
};

interface IDeleteBook {
  type: BooksActionType.DELETE_BOOK;
  payload: number;
};

interface IModifyBook {
  type: BooksActionType.MODIFY_BOOK;
  book: IBook;
};

interface IFetchBook {
  type: BooksActionType.FETCH_BOOK_BY_ID;
  bookId: number;
};

export type BooksAction = IAddBook | IDeleteBook | IModifyBook | IFetchBook;
