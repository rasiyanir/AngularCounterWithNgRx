export class User {
  constructor(private email: string, private token: string, private localId: string, private expirationdate: Date){}

  get expireDate(): any {
    return this.expirationdate;
  }
}
