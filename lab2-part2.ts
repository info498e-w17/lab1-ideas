class SavingsAccount {
    //private balance: number;
   // private owner: string;
    private withdrawals: number = 0;

    constructor(private balance: number, private owner: string) {

    }

    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        if (this.withdrawals <= 3) {
            this.withdrawals++;
            this.balance -= amount;
        } else {
            console.log("You've exceed 3 withdrawals");
        }
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }   
}

let savingsAccount = new SavingsAccount(100, "Allen");
savingsAccount.checkBalance();
savingsAccount.deposit(100);
savingsAccount.checkBalance();
savingsAccount.withdraw(10);
savingsAccount.withdraw(20);
savingsAccount.withdraw(30);
savingsAccount.withdraw(10);
savingsAccount.checkBalance();