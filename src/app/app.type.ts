// tslint:disable-next-line:interface-over-type-literal
export type param = {
    patient_id: number;
};

// tslint:disable-next-line:interface-over-type-literal
export type UserDetails = {
    person_name?: string;
    age?: AgeDetails;
    email_id?: string;
    gender?: 'M' | 'F' | 'O';
    mobile_no?: string;

};

// tslint:disable-next-line:interface-over-type-literal
export type AgeDetails = {
    days?: number;
    months?: number;
    years?: number;
};



