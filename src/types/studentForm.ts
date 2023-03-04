//other interface
import { typeMeta } from ".";

type typeForm_2Company = {
  name: string;
  type: string;
  phone_number: string;
  postal_code: string;
  address: string;
};

type typeForm_2ScheduleTable = {
  [day: string]: { ms: string; me: string; es: string; ee: string };
};

type typeForm_2Student = {
  first_name: string;
  last_name: string;
  faculty_name: string;
};

type typeForm_2ReportsItem = {
  id: number;
  desc: string;
  data: Date;
};

type typeForm_2IndustrySupervisor = {
  full_name: string;
  position: string;
};

export type typeForm_2 = {
  company: typeForm_2Company;
  form2: {
    created_at: Date;
    introduction_letter_number: number;
    internship_start_date: Date;
    schedule_table: typeForm_2ScheduleTable[];
  };
  industry_supervisor: typeForm_2IndustrySupervisor;
  reports: typeForm_2ReportsItem[];
  student: typeForm_2Student;
};

export type typeStudentForm = {
  isLoading: boolean;
  hasHeader: boolean;
  data?: typeForm_2;
  meta?: typeMeta;
};
