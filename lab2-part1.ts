class CheckingAccount {
    private balance:number;
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