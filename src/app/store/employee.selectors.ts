import { createFeatureSelector, createSelector } from "@ngrx/store";
 import { EmployeeModel } from "../model/employee";

 const getEmployeeState=createFeatureSelector<EmployeeModel>('emp')

 export const getEmpList=createSelector(getEmployeeState,(state)=>{
     return state.list;
 })

 export const selectEmployee=createSelector(getEmployeeState,(state)=>{
     return state.empobj;
 })
