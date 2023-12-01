// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type ModelProps = {
  open: boolean;
  title?: string;
  handleClose: () => void;
  setOpen?: boolean;
};

export type TypographyType = {
  label?: any;
  variant?: any;
};

export type ThreeDotMenuEventType = {
  getData?: {};
  getIndex?: number;
};
