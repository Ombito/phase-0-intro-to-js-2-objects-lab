// Write your solution in this file!
const employee = {
  name: "Alvin",
  streetAddress:"Mombasa, Kenya"
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
  let newEmployee = {...employee};
  newEmployee[name] = streetAddress;

  return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
  employee[name] = streetAddress;

  return employee
}
function deleteFromEmployeeByKey(employee, name){
  let newEmployee = {...employee};
  delete newEmployee[name];

  return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, name){
  delete employee[name];

  return employee
}