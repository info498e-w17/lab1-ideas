class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private withdrawls:number;

    constructor(initialBalance:number, name:string) {
        this.balance = initialBalance;
        this.ownerName = name; 
        this.withdrawls = 3;
    }

    deposit(depositAmount:number) {
        this.balance = this.balance + depositAmount;
    }

    withdraw(withdrawAmount:number) {
        if (this.withdrawls < 1) {
            console.log('You have made too many withdrawls');
        } else {
            this.balance = this.balance - withdrawAmount;
            this.withdrawls--;
        }
    }

    checkBalance(){
        console.log(this.ownerName + 'has a balance of'+ this.balance);
    }
}