
class Account {
    public balance:number;
    private ownerName:string;

    constructor(initialBalance:number, name:string) {
        this.balance = initialBalance;
        this.ownerName = name; 
    }

    deposit(depositAmount:number) {
        this.balance = this.balance + depositAmount;
    }

    withdraw(withdrawAmount:number) {
        this.balance = this.balance - withdrawAmount;
    }

    checkBalance(){
        console.log(this.ownerName + 'has a balance of'+ this.balance);
    }
}

class CheckingAccount extends Account {
    constructor(initialBalance:number, name:string) {
        super(initialBalance, name)
    }
}

class SavingsAccount extends Account{

    private withdrawls:number;

    constructor(initialBalance:number, name:string) {
        super(initialBalance, name)
        this.withdrawls = 3;
    }

    withdraw(withdrawAmount:number) {
        if (this.withdrawls < 1) {
            console.log('You have made too many withdrawls');
        } else {
            super.balance = super.balance - withdrawAmount;
            this.withdrawls--;
        }
    }
}

