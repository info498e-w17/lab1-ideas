
class CheckingsAccount{


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

let bobsCA:CheckingsAccount = new CheckingsAccount(500, 'Bob');
bobsCA.checkBalance();