
// import { Employee } from '../model/employee';

// export interface EmployeeModel {
//   list: Employee[];
//   errormessage: string;
//   empobj: Employee;
// }

// export const employeeState: EmployeeModel = {
//   list: [],
//   errormessage: '',
//   empobj: {
//     id: 0,
//     name: '',
//     doj: new Date(),
//     role: '',
//     salary: 0
//   }
// };
import { Employee } from '../model/employee';

export interface EmployeeState {
  list: Employee[];
  empobj: Employee | null;
  errormessage: string;
}

export const initialEmployeeState: EmployeeState = {
  list: [],
  empobj: null,
  errormessage: ''
};
