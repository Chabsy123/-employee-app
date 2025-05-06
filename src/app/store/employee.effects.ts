import { EmployeeService } from './../service/employee.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addEmployee, updateEmployee, getEmployee } from './employee.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeEffects {

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmployee),
      mergeMap(action =>
        this.employeeService.Create(action.data).pipe(
          map((employee: Employee) => ({
            type: '[Employee API] Add Employee Success',
            data: employee
          })),
          catchError(() => of({ type: '[Employee API] Add Employee Failed' }))
        )
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      mergeMap(action =>
        this.employeeService.Update(action.data.id, action.data).pipe(
          map((employee: Employee) => ({
            type: '[Employee API] Update Employee Success',
            data: employee
          })),
          catchError(() => of({ type: '[Employee API] Update Employee Failed' }))
        )
      )
    )
  );

  getEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployee),
      mergeMap(action =>
        this.employeeService.Get(action.empId).pipe(
          map((employee: Employee) => ({
            type: '[Employee API] Get Employee Success',
            data: employee
          })),
          catchError(() => of({ type: '[Employee API] Get Employee Failed' }))
        )
      )
    )
  );

}
