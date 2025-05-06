addEmployee$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(addEmployee),
    switchMap((action) => {
      return this.employeeService.addEmployee(action.employee).pipe(
        map((data) => {
          return addEmployeeSuccess({ employee: action.employee });
        }),
        catchError((error) => of(addEmployeeFailure({ error })))
      );
    })
  );
});
deleteEmployee$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(deleteEmployee),
    switchMap((action) => {
      return this.employeeService.deleteEmployee(action.id).pipe(
        map(() => {
          return deleteEmployeeSuccess({ id: action.id });
        }),
        catchError((error) => of(deleteEmployeeFailure({ error })))
      );
    })
  );
});
