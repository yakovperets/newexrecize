type DoctorAvailability = Record<string, boolean>;
type HourlySchedule = Record<string, DoctorAvailability>;
type DailySchedule = Record<number, HourlySchedule>;
type MonthlySchedule = Record<number, DailySchedule>;
type YearlySchedule = Record<number, MonthlySchedule>;
export class HospitalSchedule {
  private schedule: YearlySchedule = {};

  constructor(startYear: number, endYear: number) {
    for (let year = startYear; year <= endYear; year++) {
      this.schedule[year] = {};
      for (let month = 1; month <= 12; month++) {
        this.schedule[year][month] = {};
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
          this.schedule[year][month][day] = {};
          for (let hour = 0; hour < 24; hour++) {
            this.schedule[year][month][day][hour] = {};
          }
        }
      }
    }
  }

  bookDoctor(
    year: number,
    month: number,
    day: number,
    hour: number,
    doctorId: string
  ): void {
    this.schedule[year][month][day][hour][doctorId] = true;
  }

  unbookDoctor(
    year: number,
    month: number,
    day: number,
    hour: number,
    doctorId: string
  ): void {
    this.schedule[year][month][day][hour][doctorId] = false;
  }

  isDoctorAvailable(
    year: number,
    month: number,
    day: number,
    hour: number,
    doctorId: string
  ): boolean {
    return this.schedule[year]?.[month]?.[day]?.[hour]?.[doctorId] ?? false;
  }
  // getDoctorScheduleForDay(
  //   year: number,
  //   month: number,
  //   day: number,
  //   doctorId: string
  // ): HourlySchedule | undefined {
  //   // return this.schedule[year]?.[month]?.[day]?.[doctorId];
  // }
}
