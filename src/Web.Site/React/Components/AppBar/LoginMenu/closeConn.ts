// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';

export default async (): Promise<void> => {
  await myAxios().get<IBasicReturn>('Identity/SignOut');
  window.location.href = 'https://www.ricardogaefke.com';
};
