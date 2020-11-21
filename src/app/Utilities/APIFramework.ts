export interface SignUpResponse {
  status: number;
  description: string;
}

export interface LoginResponse {
  status: number;
  description: string;
  CustomerDetails: [
    {
      CustomerID: number;
      FirstName: string;
      LastName: string;
      Username: null;
      MobileNumber: string;
      EmailAddress: string;
      Country: null;
      Address_1: null;
      Address_2: null;
      Password: string;
    }
  ];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  firstname: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
}

//dummy data

export interface BookDetails {
  title: string;
  body: string;
  userId: number;
}

export interface BookResponse {
  title: string;
  body: string;
  userId: number;
  id: number;
}
