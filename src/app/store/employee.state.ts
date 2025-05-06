 import { Employee } from "../model/employee";

 export const employeeState:EmployeeModel={
     list: [],
     errormessage: "",
     empobj:{
         id: 0,
         name: "",
         doj: new Date(),
         role: "",
         salary: 0
     }
 }
