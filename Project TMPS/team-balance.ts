class Balance {
  private static _instance: Balance = new Balance();

  private _money: number = 10000;

  private constructor() {
    if (Balance._instance) {
      throw new Error(
        'Error: Instantiation failed: Use Balance.getInstance() instead of new.'
      );
    }
    Balance._instance = this;
  }

  public static getInstance(): Balance {
    return Balance._instance;
  }

  public setMoney(value: number): void {
    this._money = value;
  }

  public getBalance(): number {
    return this._money;
  }

  public addMoney(value: number): void {
    this._money += value;
  }

  public removeMoney(value: number): void {
    this._money -= value;
  }
}
export { Balance };
