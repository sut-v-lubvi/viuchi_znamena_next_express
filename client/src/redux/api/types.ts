import { StatisticsType } from "@/app/profile/page";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";

export interface IUser {
  name: string;
  email: string;
  role: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IGenericResponse {
  status: string;
  message: string;
}

export interface ITest {
  id: string;
  name: string;
  icon: string;
  questions: QuestionType[];
  description: string;
}
export interface IUsers {
  id: string;
  name: string;
  email: string;
  password: string;
  statistics: StatisticsType[];
}
