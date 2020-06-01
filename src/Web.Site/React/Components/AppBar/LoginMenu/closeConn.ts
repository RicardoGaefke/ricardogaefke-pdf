// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';
import Hosts from '../../../Utils/Hosts';

export default async (): Promise<void> => {
  await myAxios(window.location.href).get<IBasicReturn>('Identity/SignOut');
  const MyHosts = new Hosts(window.location.href);
  window.location.href = MyHosts.Home();
};
