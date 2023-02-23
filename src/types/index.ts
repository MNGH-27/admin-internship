export type typeSingleInitialRegestration = {
  name: string;
  last_name: string;
  student_number: number;
  faculty: string;
  term: string;
  national_code: number;
  phoneCode: string;
};

export type typeMeta = {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_records: number;
};
