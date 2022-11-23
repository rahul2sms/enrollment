export class User {
    firstName: string; 
    lastName: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    subject:string;

    constructor(firstName: string, lastName: string, dob: string, gender: string, email: string, phone: string, subject:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
    }
}