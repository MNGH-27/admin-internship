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
  student_number: number;
};

type typeForm_2ReportsItem = {
  id: number;
  desc: string;
  date: Date;
};

type typeForm_2IndustrySupervisor = {
  full_name: string;
  position: string;
};

export interface typeForm_2 {
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
  status: string;
}

type typeForm_3Student = {
  faculty_name: string;
  first_name: string;
  last_name: string;
  id: number;
  internship_finish_date: Date;
  internship_start_date: Date;
  student_number: number;
};

type typeStudentEvaluation = {
  name: string;
  value: string;
};

type typeStudentFinalEvaluation = {
  title: string;
  grade: number;
};

export interface typeForm_3 {
  company: typeForm_2Company;
  industry_supervisor: typeForm_2IndustrySupervisor;
  student: typeForm_3Student;
  student_evaluations: typeStudentEvaluation[];
  final_evaluation: typeStudentFinalEvaluation[];
  total_grade: number;
  status: string;
}

interface typeSingleEvaluationForm_4 {
  option: string;
  value: string;
}

export interface typeForm_4 {
  student: typeForm_3Student;
  industry_supervisor: typeForm_2IndustrySupervisor;
  company: typeForm_2Company;
  comment: string;
  evaluations: typeSingleEvaluationForm_4[];
  status: string;
}

interface typeSingleWeek {
  accepted: number;
  first_day_of_week: Date;
  id: number;
  not_available: number;
  not_checked: number;
  rejected: number;
  status: number;
}

export interface typeFormWeeklyReport {
  student: typeForm_3Student;
  industry_supervisor: typeForm_2IndustrySupervisor;
  company: typeForm_2Company;
  weeks: typeSingleWeek[];
  status: string;
}

export interface typeFormFinishInternship {
  company: string;
  full_name: string;
  internship_finish_date: Date;
  internship_start_date: Date;
  letter_date: Date;
  letter_name: string;
  student_number: number;
  internship_supervisor: string;
  duration: number;
  status: string;
}

export type typeStudentForm = {
  isLoading: boolean;
  hasHeader: boolean;
  data?:
    | typeForm_2
    | typeForm_3
    | typeForm_4
    | typeFormWeeklyReport
    | typeFormFinishInternship;
  meta?: typeMeta;
};
