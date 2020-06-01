import Hosts from '../../../Utils/Hosts';

export default (): void => {
  const MyHosts = new Hosts(window.location.href);
  window.location.href = MyHosts.Identity();
};
