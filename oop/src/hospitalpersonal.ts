import { HospitalSchedule } from "./hospitalscehedule.js";
import { Hospital } from "./hospital.js";
import { Appointment, MedicalRecord } from "./hospitalsystem.js";

///מחלקה פרסון
export abstract class Person {
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
//מחלקת מחלקה רפואית
export class MedicalStaff extends Person {
  staffId: number;
  position: string;
  department: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffId: number,
    position: string,
    department: string
  ) {
    super(firstName, lastName, age, address);
    this.staffId = staffId;
    this.position = position;
    this.department = department;
  }
  get() {
    return (
      this.firstName,
      this.lastName,
      this.staffId,
      this.position,
      this.department
    );
  }
}
//מחלקת פציינט
export class Patient extends Person {
  patientId: number;
  phoneNumber: number;
  emergencyContact: string;
  medicalHistory: Appointment[] = [];
  constructor(
    firstName: string,
    lastName: string,
    patientId: number,
    age: number,
    address: string,
    phoneNumber: number,
    emergencyContact: string
  ) {
    super(firstName, lastName, age, address);
    this.patientId = patientId;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
  }
  get() {
    return this.firstName, this.lastName, this.patientId;
  }
  updateMedicalHistory(x: Appointment) {
    this.medicalHistory.push(x);
  }
}
//מחלקת דוקטור
export class Doctor extends MedicalStaff {
  doctorId: string;
  specialization: string;
  availability: string[] = [];
  range: [number, number];
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    doctorId: string,
    specialization: string,
    staffId: number,
    position: string,
    department: string,
    range: [number, number]
  ) {
    super(firstName, lastName, age, address, staffId, position, department);
    this.doctorId = doctorId;
    this.specialization = specialization;
    this.range = range;
  }
  get() {
    return (
      this.firstName,
      this.lastName,
      this.doctorId,
      this.staffId,
      this.position,
      this.department
    );
  }
}
