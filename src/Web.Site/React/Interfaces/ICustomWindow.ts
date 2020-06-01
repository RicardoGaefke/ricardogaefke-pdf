// eslint-disable-next-line no-unused-vars
import { IInitialContext } from './IInitialContext';

export interface ICustomWindow extends Window {
  MyInitialState: IInitialContext,
}
