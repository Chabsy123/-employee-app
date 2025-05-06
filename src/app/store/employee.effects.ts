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
