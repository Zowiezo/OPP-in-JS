let account = function(name, balance, accountType, accountNumber, accountHolder) {

    this.name = name;
    this.balance = balance;
    this.accountType = accountType
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;

    console.log("Name: " + name + "; Balance: " + balance + "; Account Type: " + accountType + "; Account Number: " + accountNumber + "; Account Holder" + accountHolder);
};

let LeeAccount = new account("Lee", "R585.00", "Savings", "789 654 1235", "Lee Sims");
let KateAccount = new account("Kate", "R18 620.00", "Cheque Account", "987 456 4258", "Kate Waters");
let LeoAccount = new account("Leo", "R785 258 98.00", "Credit Card", "789 547 8635", "leo Bread");

console.log(LeoAccount.balance);
console.log(LeeAccount.accountNumber);
console.log(KateAccount.accountType);
console.log(KateAccount.accountHolder);