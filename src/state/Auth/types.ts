export type AuthStateType = {
  loading: boolean;
  data?: CurrentUserType;
  updatedAt?: Date | string;
};

export type CurrentUserType = {
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  googleId: string;
  imageUrl?: string;
};
