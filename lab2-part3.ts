class CheckingsAccount {
    private balance:number;
    private name:string;
    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.name = ownerName;
    }

    deposit(amount:number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount:number) {
        this.balance = this.balance - amount;
    }

    checkBalance():void {
        console.log(`This balance is ${this.balance} and the owner is ${this.name}`);
    }
}

class SavingsAccount {
    private balance:number;
    private name:string;
    private withdrawLimit:number;
    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.name = ownerName;
        this.withdrawLimit = 3;
    }

    deposit(amount:number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount:number) {
        if(this.withdrawLimit > 0) {
            this.withdrawLimit = this.withdrawLimit - 1;
            this.balance = this.balance - amount;
        } else {
            console.log(`You are only allowed 3 withdraw limits this is the current amout of time you have left ${this.withdrawLimit}`);
        }
    }

    checkBalance():void {
        console.log(`This balance is ${this.balance} and the owner is ${this.name}`);
    }
}

var bankBECU = new bankSaving(1000, 'Huy Nguyen');

bankBECU.deposit(100);
bankBECU.withdraw(99);
bankBECU.withdraw(99);
bankBECU.withdraw(99);
bankBECU.withdraw(99);
bankBECU.checkBalance();

bankBECU.deposit(100);
bankBECU.withdraw(99);
bankBECU.checkBalance();

