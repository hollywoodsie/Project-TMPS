"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_1 = require("./strategy");
const team_balance_1 = require("./team-balance");
const goods_1 = require("./goods");
const upgrade_gun_1 = require("./upgrade-gun");
class ShopAPI {
    constructor() {
        this.balance = team_balance_1.Balance.getInstance();
        this.backpack = [];
        this.gameStage = new strategy_1.ShopAvailability(new strategy_1.Init());
        this.improver = new upgrade_gun_1.AddSuppressor(new goods_1.Pistol());
        this.canBuy = this.gameStage.status;
    }
    get goods() {
        return this.backpack;
    }
    useShop(whatToBuy) {
        if (this.canBuy) {
            if (goods_1.Creator.buy(whatToBuy).price < this.balance.getBalance()) {
                this.backpack.push(goods_1.Creator.buy(whatToBuy));
                this.balance.removeMoney(goods_1.Creator.buy(whatToBuy).price);
            }
            else
                console.log(`No money for buy! Currently on balance: ${this.balance.getBalance()}`);
        }
        else
            console.log(`Shop unavailable on this stage!`);
    }
    upgradeGun(gun, type, scope) {
        if (type === 'supp') {
            this.improver = new upgrade_gun_1.AddSuppressor(gun);
            this.improver.upgrade(scope);
        }
        else if (type === 'both') {
            this.improver = new upgrade_gun_1.AddSuppressor(gun);
            this.improver.upgrade(scope);
            this.improver = new upgrade_gun_1.ChangeScope(gun);
            this.improver.upgrade(scope);
        }
        else {
            this.improver = new upgrade_gun_1.ChangeScope(gun);
            this.improver.upgrade(scope);
        }
    }
}
const shopAPI = new ShopAPI();
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
shopAPI.useShop('sniper');
console.log(shopAPI.goods);
