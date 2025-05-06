export const deleteEmployee = createAction(
  '[Employee] Delete Employee',
  props<{ id: string }>()
);

export const deleteEmployeeSuccess = createAction(
  '[Employee] Delete Employee Success',
  props<{ id: string }>()
);

export const deleteEmployeeFailure = createAction(
  '[Employee] Delete Employee Failure',
  props<{ error: any }>()
);
