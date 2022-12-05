enum ContractStatus{
    Permanet = 1,
    Temp,
    Apprentice    
}
let employeeStatus : ContractStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
