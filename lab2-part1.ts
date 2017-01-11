class CheckingsAccount {
    //private balance: number;
    //private owner: string;

    constructor(private balance: number, private owner: string) {
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }   
}

let checkingsAccount = new CheckingsAccount(100, "Allen");
checkingsAccount.checkBalance();
checkingsAccount.deposit(200);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(100);
checkingsAccount.checkBalance();