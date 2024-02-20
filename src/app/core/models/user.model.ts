export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  LT= "Lead Teacher",
  TA= "Teacher Assistant",
  HWR= "Homework Reviewer"
}
