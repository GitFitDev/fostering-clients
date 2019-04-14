export interface Profile {
  uid?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  password?: string,
  passwordConfirm?: string,
  dateOfBirth?: Date;
  areaOfExpertise?: string;
  isExpert?:boolean
  createdOn?: any,
  changedOn?: any,
  avatar?: {
      downloadURL?: any,
      thumb?: any,
      mimeType?: any
  }
}
