on(deleteEmployeeSuccess, (state, { id }) => ({
  ...state,
  employees: state.employees.filter(employee => employee.id !== id),
  error: null
}))
