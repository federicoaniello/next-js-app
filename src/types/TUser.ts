export type TUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: TAddress
}

type TAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: TGeolocalizationData,
    phone: string,
    website: string,
    company: TUserCompanyData
};

type TGeolocalizationData = {
    lat: string,
    long: string
}

type TUserCompanyData = {
    name: string,
    catchPhrase: string,
    bs: string
}