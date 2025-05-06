// import { employeeState } from './employee.state';
// import { createReducer, on } from "@ngrx/store";
//  import { addEmployeeSuc, deleteEmployeeSuc, getEmployee, loadEmployeeFail, loadEmployeeSuc, updateEmployeeSuc } from "./employee.actions";
//  import { state } from "@angular/animations";

//  const _employeeReducer = createReducer(employeeState,
//      on(loadEmployeeSuc, (state, action) => {
//          return {
//              ...state,
//              list: action.list,
//              errormessage: ''
//          }
//      }),
//      on(loadEmployeeFail, (state, action) => {
//          return {
//              ...state,
//              list: [],
//              errormessage: action.errMsg
//          }
//      }),
//      on(deleteEmployeeSuc, (state, action) => {
//          const _newdata = state.list.filter(o => o.id != action.empId)
//          return {
//              ...state,
//              list: _newdata,
//              errormessage: ''
//          }
//      }),
//      on(addEmployeeSuc, (state, action) => {
//          const _newdata = { ...action.data };
//          return {
//              ...state,
//              list: [...state.list, _newdata],
//              errormessage: ''
//          }
//      }),
//      on(updateEmployeeSuc, (state, action) => {
//          const _newdata = state.list.map(o => {
//              return o.id === action.data.id ? action.data : o
//          })
//          return {
//              ...state,
//              list: _newdata,
//              errormessage: ''
//          }
//      }),
//      on(getEmployee, (state, action) => {
//          let _newdata = state.list.find(o =>o.id===action.empId);
//          if(_newdata==null){
//              _newdata=state.empobj;
//          }
//          return {
//              ...state,
//              empobj:_newdata
//          }
//      })
//  );

//  export function employeeReducer(state: any, action: any) {
//      return _employeeReducer(state, action);
//  }

//  export { employeeState };
// employee.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import { initialEmployeeState, EmployeeState } from './employee.state';

const _employeeReducer = createReducer(
  initialEmployeeState,
  on(EmployeeActions.loadEmployeeSuc, (state, { list }) => ({
    ...state,
    list,
    errormessage: ''
  })),
  on(EmployeeActions.loadEmployeeFail, (state, { errMsg }) => ({
    ...state,
    list: [],
    errormessage: errMsg
  })),
  on(EmployeeActions.deleteEmployeeSuc, (state, { empId }) => ({
    ...state,
    list: state.list.filter(o => o.id !== empId),
    errormessage: ''
  })),
  on(EmployeeActions.addEmployeeSuc, (state, { data }) => ({
    ...state,
    list: [...state.list, { ...data }],
    errormessage: ''
  })),
  on(EmployeeActions.updateEmployeeSuc, (state, { data }) => ({
    ...state,
    list: state.list.map(o => o.id === data.id ? data : o),
    errormessage: ''
  })),
  on(EmployeeActions.getEmployee, (state, { empId }) => ({
    ...state,
    empobj: state.list.find(o => o.id === empId) || null
  }))
);

export function employeeReducer(state: EmployeeState | undefined, action: any) {
  return _employeeReducer(state, action);
}

