class CheckingsAccount {
    private initialBalance: number;
    private ownerName: string;

constructor(intBalance:number, newName:string){
    this.initialBalance = intBalance;
    this.ownerName = newName;

}

public getName():string {
    return this.ownerName;
}

public getBalance():number {
    return this.initialBalance;
}   

public withdraw (amount:number){
this.initialBalance = this.initialBalance - amount;

}

public checkBalance(){
    console.log(this.getName());
    console.log(this.getBalance());

}
}

let newaccount:CheckingsAccount = new CheckingsAccount(1000,"Joe");
this.checkBalance();

