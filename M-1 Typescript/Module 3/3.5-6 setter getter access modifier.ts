{
  // getter and setter

  class BankAccount {
    public readonly id: string;
    protected _name: string;
    private _balance: number;

    constructor(id: string, name: string, balance: number) {
      this.id = id;
      this._name = name;
      this._balance = balance;
    }

    set deposit(ammount: number) {
      this._balance = this.balance + ammount;
    }

    // deposit(amount: number) {
    //   this._balance += amount;
    // }

    get balance() {
      return this._balance;
    }

    // getAccountInfo() {
    //   return { id: this.id, name: this._name, ballance: this._balance };
    // }
  }

  const bankAccountOne = new BankAccount("1", "Mr. Z", 100);
  bankAccountOne.deposit = 150; //function will be accsable like value
  console.log(bankAccountOne.balance);

  //
}
