
/**
 * name
 */
class bank {
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

var bankBECU = new bank(1000, 'Huy Nguyen');

bankBECU.deposit(100);
bankBECU.withdraw(99);
bankBECU.checkBalance();