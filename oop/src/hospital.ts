import { Person, Patient, Doctor, MedicalStaff } from "./hospitalpersonal.js";
import { Appointment, MedicalRecord } from "./hospitalsystem.js";
import { HospitalSchedule } from "./hospitalscehedule.js";
export class Hospital {
  patients: Patient[];
  doctors: Doctor[];
  appoitments: Appointment[];
  MedicalRecords: MedicalRecord[];
  private startYear: number = 2023;
  endYear: number = 2023;
  hospitalSchedule: HospitalSchedule = new HospitalSchedule(
    this.startYear,
    this.endYear
  );
  constructor(
    patients: Patient[],
    doctors: Doctor[],
    appoitments: Appointment[],
    MedicalRecords: MedicalRecord[]
  ) {
    this.patients = patients;
    this.doctors = doctors;
    this.appoitments = appoitments;
    this.MedicalRecords = MedicalRecords;
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
    //עדכון רופא עבור גילאים
    if (
      this.hospitalSchedule.isDoctorAvailable(
        x.date.getFullYear(),
        x.date.getMonth(),
        x.date.getDay(),
        x.date.getHours(),
        x.doctor.doctorId
      ) === true &&
      x.patient.age >= x.doctor.range[0] &&
      x.patient.age <= x.doctor.range[1]
    ) {
      this.appoitments.push(x);
    } else {
      console.log("the age of patient is unvalid");
    }
  }
  //הצגת פרטי תורים
  appoitment() {
    console.log(this.appoitment);
  }
  //הצגת פרטי תורים לרופא
  appoitmentforDoctor(x: Doctor) {
    const a = this.appoitments.filter(
      (appoitment) => appoitment.doctor.doctorId === x.doctorId
    );
    console.log(a);
  }
  //הצגת פרטי תורים פציינט
  appoitmentforPatient(x: Patient) {
    const a = this.appoitments.filter(
      (appoitment) => appoitment.patient.patientId === x.patientId
    );
    console.log(a);
  }
  //הצגת פרטי כל התורים היום
  appoitmentforDay(x: Date) {
    const a = this.appoitments.filter((appoitment) => appoitment.date === x);
    console.log(a);
  }
  //הצגת רופאים לפי התמחות
  getDoctorByspecialization(x: string) {
    const a = this.doctors.filter((doctor) => doctor.specialization === x);
    console.log(a);
  }
  //יצירת תיק רפואי חדש
  createMedicalRecord(x: MedicalRecord) {
    this.MedicalRecords.push(x);
  }
  //תיק רפואי של פציינט
  getMedicalRecords(x: Patient) {
    const a = this.MedicalRecords.filter(
      (MedicalRecord) => MedicalRecord.patient.patientId === x.patientId
    );
    console.log(a);
  }
  //לוז זמינות של רופא עבור תאריך מסויים
  getDoctorAvailability() {}
}
