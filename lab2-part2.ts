class SavingsAccount{

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

let bobsSA:SavingsAccount = new SavingsAccount(500, 'Bob');
bobsSA.checkBalance();
bobsSA.withdraw(10);
bobsSA.checkBalance();
bobsSA.withdraw(20);
bobsSA.checkBalance();
bobsSA.withdraw(30);
bobsSA.checkBalance();
bobsSA.withdraw(40);