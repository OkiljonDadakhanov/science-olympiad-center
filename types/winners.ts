export interface Winner {
  id: number;
  photo_url: string;
  competition_name: string;
  medal: string;
  student_name: string;
  region: string;
  district: string;
  school: string;
  class_number: number;
  subject: string;
  academic_year: string;
  olympiad_type: string;
  photo: string;
}

export interface WinnersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Winner[];
}
