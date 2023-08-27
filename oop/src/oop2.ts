///מחלקה פרסון
class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
}
//מחלקת פציינט
class Patient extends Person {
  patientId: number;
  phoneNumber: number;
  emergencyContact: string;
  medicalHistory: Appointment[];
  constructor(
    firstName: string,
    lastName: string,
    patientId: number,
    age: number,
    address: string,
    phoneNumber: number,
    emergencyContact: string,
    medicalHistory: Appointment[]
  ) {
    super(firstName, lastName, age, address);
    this.patientId = patientId;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }
  get() {
    return this.firstName, this.lastName, this.patientId;
  }
}
//מחלקת דוקטור
class Doctor extends Person {
  doctorId: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    doctorId: number,
    specialization: string
  ) {
    super(firstName, lastName, age, address);
    this.doctorId = doctorId;
    this.specialization = specialization;
  }
  get() {
    return this.firstName, this.lastName, this.doctorId;
  }
}
///מחלקת תור
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  get() {
    return this.patient.get(), this.doctor.get(), this.date, this.time;
  }
}
//מחלקת בית חולים
class Hospital {
  patients: Patient[];
  doctors: Doctor[];
  appoitments: Appointment[];
  constructor(
    patients: Patient[],
    doctors: Doctor[],
    appoitments: Appointment[]
  ) {
    this.patients = patients;
    this.doctors = doctors;
    this.appoitments = appoitments;
  }
  //מטופל חדש
  newpatient(x: Patient) {
    this.patients.push(x);
  }
  //רופא חדש
  newdoctor(x: Doctor) {
    this.doctors.push(x);
  }
  //תור חדש
  newappoitment(x: Appointment) {
    this.appoitments.push(x);
  }
  //הצגת פרטי תורים
  appoitment() {
    console.log(this.appoitment);
  }
  //הצגת פרטי תורים לרופא
  appoitmentforDoctor(x: string, y: string) {
    const a = this.appoitments.filter(
      (appoitment) =>
        appoitment.doctor.firstName === x && appoitment.doctor.lastName === y
    );
    console.log(a);
  }
  //הצגת פרטי תורים פציינט
  appoitmentforPatient(x: string, y: string) {
    const a = this.appoitments.filter(
      (appoitment) =>
        appoitment.patient.firstName === x && appoitment.patient.lastName === y
    );
    console.log(a);
  }
  //הצגת פרטי כל התורים היום
  appoitmentforDay(x: string) {
    const a = this.appoitments.filter((appoitment) => appoitment.date === x);
    console.log(a);
  }
}
