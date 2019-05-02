// i may need to create an enum to assign some token to timeslots and then convert them to actual times

export function generateTimeSlots() {
  const slotsArr: any[] = [];
  slotsArr.push({ title: "9:00 to 12:00", value: "9-12" });
  slotsArr.push({ title: "13:00 to 16:00", value: "13-15" });
  slotsArr.push({ title: "19:00 to 22:00", value: "19-22" });
  slotsArr.push({ title: "23:00 to 02:00", value: "23-02" });
  return slotsArr;
}

export enum TIMESLOTS {
  ABC,
  DEF
}
