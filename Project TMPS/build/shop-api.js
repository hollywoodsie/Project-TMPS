"use strict";
//Facade
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopAPI = void 0;
const gameStages_1 = require("./gameStages");
const team_balance_1 = require("./team-balance");
const goods_1 = require("./goods");
const upgrade_gun_1 = require("./upgrade-gun");
const users_1 = require("./users");
class ShopAPI {
    constructor() {
        this.balance = team_balance_1.Balance.getInstance();
        this.allUsers = [];
        this.gameStage = new gameStages_1.ShopAvailability(new gameStages_1.Init());
        this.improver = new upgrade_gun_1.AddSuppressor(new goods_1.Pistol());
        this.canBuy = this.gameStage.status;
    }
    get users() {
        return this.allUsers;
    }
    createUser(nickname) {
        this.users.push(new users_1.Users(nickname));
    }
    buySome(whatToBuy, type, user) {
        if (this.canBuy) {
            if (type === 'gun') {
                if (goods_1.Creator.buyGun(whatToBuy).price <= this.balance.getBalance()) {
                    user.backpack.gunsInside.push(goods_1.Creator.buyGun(whatToBuy));
                    this.balance.removeMoney(goods_1.Creator.buyGun(whatToBuy).price);
                    console.log(`Successful bought ${whatToBuy} for ${user.nickname}. Team balance : ${this.balance.getBalance()}`);
                }
            }
            else if (type === 'med') {
                if (goods_1.Creator.buyMedicine(whatToBuy).price <= this.balance.getBalance()) {
                    user.backpack.medicineInside.push(goods_1.Creator.buyMedicine(whatToBuy));
                    this.balance.removeMoney(goods_1.Creator.buyMedicine(whatToBuy).price);
                    console.log(`Successful bought ${whatToBuy} for ${user.nickname}. Team balance : ${this.balance.getBalance()}`);
                }
            }
            else
                console.log(`No money for buy ${type}! Currently on balance: ${this.balance.getBalance()}`);
        }
        else
            console.log(`Shop unavailable on this stage!`);
    }
    startRound() {
        this.gameStage.setStrategy(new gameStages_1.Warmup());
        this.canBuy = this.gameStage.status;
        console.log(`->Warmup now. FreezeTime in 5 seconds!\n`);
        setTimeout(() => {
            this.gameStage.setStrategy(new gameStages_1.FreezeTime());
            this.canBuy = this.gameStage.status;
            console.log(`->FreezeTime now. Game starts in 12 seconds, buy now!\n`);
        }, 5000);
        setTimeout(() => {
            this.gameStage.setStrategy(new gameStages_1.GameTime());
            this.canBuy = this.gameStage.status;
            console.log(`->Game started! Shop closed. GLHF!\n`);
        }, 17000);
    }
    upgradeGun(gun, type, scope) {
        if (type === 'supp') {
            this.improver = new upgrade_gun_1.AddSuppressor(gun);
            this.improver.upgrade();
        }
        else if (type === 'scope') {
            this.improver = new upgrade_gun_1.ChangeScope(gun);
            this.improver.upgrade(scope);
        }
        else if (type === 'both') {
            this.improver = new upgrade_gun_1.AddSuppressor(gun);
            this.improver.upgrade(scope);
            this.improver = new upgrade_gun_1.ChangeScope(gun);
            this.improver.upgrade(scope);
        }
    }
}
exports.ShopAPI = ShopAPI;
