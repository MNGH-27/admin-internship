export type typeSingleInitialRegestration = {
  name: string;
  last_name: string;
  student_number: number;
  faculty: string;
  entrance_year: string;
  national_code: number;
  phone_number: string;
  id: number;
};

export type typeSingleStudentForm = {
  company: string;
  entrance_year: string;
  faculty: string;
  id: number;
  last_name: string;
  name: string;
  national_code: string;
  passed_units: string;
  student_number: number;
};

export type typeMeta = {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_records: number;
};
