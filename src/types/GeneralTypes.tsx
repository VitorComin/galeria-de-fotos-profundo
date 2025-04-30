export interface ILayoutHeader {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IHeaderContent {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IHeaderContentMenu {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IHeaderContentMenuBody {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IHeaderContentMenuOptions {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IAddresses {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IContentPage {
  addressesList: IAddresses[];
}

export interface IContentLayout {
  addressesList: IAddresses[];
}

export interface IListLayout {
  addressesList: IAddresses[];
}

export interface IAddressListLayout {
  addressesList: IAddresses[];
}

export interface IAddressesList {
  addressesList: IAddresses[];
}
