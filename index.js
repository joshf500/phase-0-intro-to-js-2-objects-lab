// Write your solution in this file!
const employee =  {
    name: "Josh",
    streetAddress: "1 Josh Road"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const deleteByKey = { ...employee}
    delete deleteByKey[key];
    return deleteByKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}