import { Person, Patient, Doctor, MedicalStaff } from "./hospitalpersonal";

///מחלקת תור
export class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: Date;

  status: "-1" | "0" | "1" = "-1";
  constructor(patient: Patient, doctor: Doctor, date: Date) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
  }
  get() {
    return this.patient.get(), this.doctor.get(), this.date, this.status;
  }
}
//מחלקת תיק רפואי
export class MedicalRecord {
  patient: Patient;
  doctor: Doctor;
  diagnosis: string;
  prescription: string;
  constructor(
    patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }
  get() {
    return this.patient.get(), this.doctor.get();
  }
}
