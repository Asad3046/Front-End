class BankAccount
{
    #balance; //private field

    constructor(InitialBalance)
    {
        this.#balance = InitialBalance;
    }
    deposit(amount)
    {
        this.#balance += amount;
    }
    getBalance()
    {
        return this.#balance;
    }
}

const obj = new BankAccount(5000);
console.log(obj.getBalance()); //output: 5000
obj.deposit(500);
console.log(obj.getBalance()); //output: 5500
