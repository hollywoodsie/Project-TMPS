//Facade

import {
  ShopAvailability,
  Warmup,
  FreezeTime,
  GameTime,
  Init,
} from './gameStages';
import { Balance } from './team-balance';
import { Guns, Pistol, Creator, GunCreator, MedicineCreator } from './goods';
import { AddSuppressor, ChangeScope, Upgrade } from './upgrade-gun';

import { Users } from './users';

class ShopAPI {
  private balance = Balance.getInstance();
  private canBuy: boolean;
  private gameStage: ShopAvailability;
  private improver: Upgrade;
  private allUsers: Users[];
  private creator: Creator;

  constructor() {
    this.gameStage = new ShopAvailability(new Init());
    this.improver = new AddSuppressor(new Pistol());
    this.canBuy = this.gameStage.status;
    this.allUsers = [];
    this.creator = new GunCreator();
  }

  get users() {
    return this.allUsers;
  }

  public createUser(nickname: string) {
    this.users.push(new Users(nickname));
  }
  public buySome(whatToBuy: string, type: string, user: Users) {
    if (this.canBuy) {
      if (type === 'gun') {
        this.creator = new GunCreator();
        if (this.creator.buy(whatToBuy).price <= this.balance.getBalance()) {
          user.backpack.gunsInside.push(this.creator.buy(whatToBuy));
          this.balance.removeMoney(this.creator.buy(whatToBuy).price);
          console.log(
            `Successful bought ${whatToBuy} for ${
              user.nickname
            }. Team balance : ${this.balance.getBalance()}`
          );
        }
      } else if (type === 'med') {
        this.creator = new MedicineCreator();
        if (this.creator.buy(whatToBuy).price <= this.balance.getBalance()) {
          user.backpack.medicineInside.push(this.creator.buy(whatToBuy));
          this.balance.removeMoney(this.creator.buy(whatToBuy).price);
          console.log(
            `Successful bought ${whatToBuy} for ${
              user.nickname
            }. Team balance : ${this.balance.getBalance()}`
          );
        }
      } else
        console.log(
          `No money for buy ${type}! Currently on balance: ${this.balance.getBalance()}`
        );
    } else console.log(`Shop unavailable on this stage!`);
  }
  public startRound() {
    this.gameStage.setStrategy(new Warmup());
    this.canBuy = this.gameStage.status;
    console.log(`->Warmup now. FreezeTime in 5 seconds!\n`);
    setTimeout(() => {
      this.gameStage.setStrategy(new FreezeTime());
      this.canBuy = this.gameStage.status;
      console.log(`->FreezeTime now. Game starts in 12 seconds, buy now!\n`);
    }, 5000);
    setTimeout(() => {
      this.gameStage.setStrategy(new GameTime());
      this.canBuy = this.gameStage.status;
      console.log(`->Game started! Shop closed. GLHF!\n`);
    }, 17000);
  }

  public upgradeGun(gun: Guns, type: string, scope?: string) {
    if (type === 'supp') {
      this.improver = new AddSuppressor(gun);
      this.improver.upgrade();
    } else if (type === 'scope') {
      this.improver = new ChangeScope(gun);
      this.improver.upgrade(scope);
    } else if (type === 'both') {
      this.improver = new AddSuppressor(gun);
      this.improver.upgrade(scope);
      this.improver = new ChangeScope(gun);
      this.improver.upgrade(scope);
    }
  }
}

export { ShopAPI };
