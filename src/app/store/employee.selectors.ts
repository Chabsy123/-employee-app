// import { createFeatureSelector, createSelector } from "@ngrx/store";
//  import { EmployeeModel } from "../model/employee";

//  const getEmployeeState=createFeatureSelector<EmployeeModel>('emp')

//  export const getEmpList=createSelector(getEmployeeState,(state)=>{
//      return state.list;
//  })

//  export const selectEmployee=createSelector(getEmployeeState,(state)=>{
//      return state.empobj;
//  })
// employee.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.state';

// First, select the feature state
export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

// Then, use that to create specific selectors
export const selectEmployeeList = createSelector(
  selectEmployeeState,
  (state) => state.list
);

export const selectEmployeeError = createSelector(
  selectEmployeeState,
  (state) => state.errormessage
);

export const selectEmployee = createSelector(
  selectEmployeeState,
  (state) => state.empobj
);
