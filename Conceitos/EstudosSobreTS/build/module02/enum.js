"use strict";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanet"] = 1] = "Permanet";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
