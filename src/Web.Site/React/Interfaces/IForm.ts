// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from './IBasicReturn';
// eslint-disable-next-line no-unused-vars
import { ICreated } from './ICreated';

export interface IForm extends IBasicReturn, ICreated
{
  Id: number;
  Guid: string;
  Question1: string;
  Question2: string;
  Question3: string;
  Question4: string;
  Question5: string;
  Approved: boolean;
  Info: string;
  Name: string;
  Email: string;
}
