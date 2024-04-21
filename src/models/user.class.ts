export class User {
    firstname: string;
    lastname: string;
    birthdate:  number;
    street: number;
    zipcode: number;
    city: string;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.street = obj ? obj.street : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthdate:  this.birthdate,
            street: this.street,
            zipcode:this.zipcode, 
            city:this.city 
        }
    }
}