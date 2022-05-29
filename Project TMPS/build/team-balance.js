"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
class Balance {
    constructor() {
        this._money = 10000;
        if (Balance._instance) {
            throw new Error('Error: Instantiation failed: Use Balance.getInstance() instead of new.');
        }
        Balance._instance = this;
    }
    static getInstance() {
        return Balance._instance;
    }
    setMoney(value) {
        this._money = value;
    }
    getBalance() {
        return this._money;
    }
    addMoney(value) {
        this._money += value;
    }
    removeMoney(value) {
        this._money -= value;
    }
}
exports.Balance = Balance;
Balance._instance = new Balance();
