export default class Hosts {
  private Host: string;

  constructor(host: string) {
    this.Host = host;
  }

  Api = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5065/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://api.staging.profile4d.com/';
    } else {
      myHost = 'https://api.profile4d.com/';
    }

    return myHost;
  };

  Home = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5050/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://www.staging.profile4d.com/';
    } else {
      myHost = 'https://www.profile4d.com/';
    }

    return myHost;
  };

  Identity = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5055/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://identity.staging.profile4d.com/';
    } else {
      myHost = 'https://identity.profile4d.com/';
    }

    return myHost;
  };

  Admin = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5060/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://admin.staging.profile4d.com/';
    } else {
      myHost = 'https://admin.profile4d.com/';
    }

    return myHost;
  };
}
