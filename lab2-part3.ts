class Account{

}

class CheckingsAccount extends Account{

    constructor(private balance:number, /*private initialBalance:number,*/ private ownerName:string){
        //this.balance = initialBalance;
    }

    public withdraw(withdrawl:number){
        this.balance -= withdrawl;
    }

    public deposit(deposited:number){
        this.balance += deposited;
    }

    public checkBalance() {
        console.log(this.ownerName + "'s current balance is: " + this.balance);
    }
}

class SavingsAccount extends Account{

    private withdrawlLimit:number;
    private withdrawls:number;

    constructor(private balance:number, private ownerName:string){
        this.withdrawlLimit = 3;
        this.withdrawls = 0;
    }

    public withdraw(withdrawl:number){
        if (this.withdrawls < this.withdrawlLimit){
            this.withdrawls ++;
            this.balance -= withdrawl;
        } else {
            console.log("You have exceeded your withdrawl limit of " + this.withdrawlLimit);
        }
        
    }

    public deposit(deposited:number){
        this.balance += deposited;
    }

    public checkBalance() {
        console.log(this.ownerName + "'s current balance is: " + this.balance);
    }
}