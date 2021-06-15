import { Loan } from './loan.model';

export interface Customer {
  id?: string;
  employer: string;
  grossSalary: number;
  netSalary: number;
  crdbInstallment: number;
  durationInMonths: number;
  loan: Loan;
}
