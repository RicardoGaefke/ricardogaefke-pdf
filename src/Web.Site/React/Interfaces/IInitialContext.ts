// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from './IBasicReturn';

export interface IInitialContext extends IBasicReturn {
  Language: string,
  Theme: string,
  ConsentCookie: boolean,
  Name?: string,
  Email?: string,
  IsAuthenticated?: boolean,
  KeepConnected?: boolean,
  Ready: boolean,
  Drawer?: boolean,
  Config?: boolean,
  UTC?: string,
}
