class Account {

    constructor(private balance: number, private owner: string) {
    }

    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        this.balance -= amount;
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }   
}

class CheckingsAccount extends Account {
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
}

class SavingsAccount extends Account {
    private withdrawals: number = 0;
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
    withdraw(amount: number) {
        if (this.withdrawals <= 3) {
            this.withdrawals++;
            this.balance -= amount;
        } else {
            console.log("You've exceed 3 withdrawals");
        }
    }
}

console.log('Checkings account')
let checkingsAccount = new CheckingsAccount(100, "Allen");
checkingsAccount.checkBalance();
checkingsAccount.deposit(200);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(100);
checkingsAccount.checkBalance();


console.log('\nSavings account')
let savingsAccount = new SavingsAccount(100, "Allen");
savingsAccount.checkBalance();
savingsAccount.deposit(100);
savingsAccount.checkBalance();
savingsAccount.withdraw(10);
savingsAccount.withdraw(20);
savingsAccount.withdraw(30);
savingsAccount.withdraw(10);
savingsAccount.checkBalance();