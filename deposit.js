class Account {
    constructor(name,accno,balance){
        this.name = name ;
        this.accno= accno;
        this.balance=balance;
    }
    getBalance(){
        return"the blance is " + this.balance;
    }
    withdraw(amount) { 
        console.log(amount,this.balance);
        if(this.balance >= amount){
            
         this.balance = this.balance - amount ;
         return this.getBalance();

        }else {
            return " insuf"+ this.balance ;
        }

    }
deposit(amount){
    console.log(amount,this.balance);
    if(this.balance <= amount){
        this.balance = this.balance + amount ;
        return this.getBalance();
    }else {
        return this.balance ;
    }
}
}

const govarthan = new Account ("govarthan", 546 ,10000);
var mad = new Account ("mad" , 678 , 30000);
let bab = new Account ("bab", 332, 766649);

console.log(mad.getBalance());
console.log(govarthan.getBalance());
console.log(bab.getBalance());

console.log (mad.withdraw(1000));
console.log  (bab.withdraw(3000));

console.log (govarthan.deposit(20000323));
