export class UserRegisterValues{

  id: string
  firstName: string
  lastName: string
  email: string
  pwd: string
  pwd2: string

  constructor(firstName: string, lastName: string, email: string, pwd: string, pwd2: string){

    this.id = '1'
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.pwd = pwd
    this.pwd2 = pwd2
  }
}
