import { createReducer, on } from '@ngrx/store';
import { employeeState, EmployeeModel } from './employee.state';
import {
  addEmployeeSuc,
  deleteEmployeeSuc,
  getEmployee,
  loadEmployeeFail,
  loadEmployeeSuc,
  updateEmployeeSuc
} from './employee.actions';
import { Employee } from '../model/employee';

const _employeeReducer = createReducer(
  employeeState,

  on(loadEmployeeSuc, (state, action): EmployeeModel => ({
    ...state,
    list: action.list,
    errormessage: ''
  })),

  on(loadEmployeeFail, (state, action): EmployeeModel => ({
    ...state,
    list: [],
    errormessage: action.errMsg
  })),

  on(deleteEmployeeSuc, (state, action): EmployeeModel => {
    const _newdata: Employee[] = state.list.filter(emp => emp.id !== action.empId);
    return {
      ...state,
      list: _newdata,
      errormessage: ''
    };
  }),

  on(addEmployeeSuc, (state, action): EmployeeModel => ({
    ...state,
    list: [...state.list, { ...action.data }],
    errormessage: ''
  })),

  on(updateEmployeeSuc, (state, action): EmployeeModel => {
    const _newdata: Employee[] = state.list.map(emp =>
      emp.id === action.data.id ? action.data : emp
    );
    return {
      ...state,
      list: _newdata,
      errormessage: ''
    };
  }),

  on(getEmployee, (state, action): EmployeeModel => {
    const _found = state.list.find(emp => emp.id === action.empId);
    return {
      ...state,
      empobj: _found ?? state.empobj
    };
  })
);

export function employeeReducer(state: EmployeeModel | undefined, action: any) {
  return _employeeReducer(state, action);
}
