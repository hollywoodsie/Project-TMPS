import {
  ShopAvailability,
  Warmup,
  FreezeTime,
  GameTime,
  Init,
} from './strategy';
import { Balance } from './team-balance';
import {
  Goods,
  IGuns,
  IMedicine,
  Bandage,
  FirstAidKit,
  MedKit,
  Pistol,
  Rifle,
  Shotgun,
  SniperRifle,
  Creator,
} from './goods';
import { AddSuppressor, ChangeScope } from './upgrade-gun';

class ShopAPI {
  private balance = Balance.getInstance();
  private canBuy: boolean;
  private gameStage: ShopAvailability;
  private improver: AddSuppressor | ChangeScope;
  private backpack: Goods[] = [];
  constructor() {
    this.gameStage = new ShopAvailability(new Init());
    this.improver = new AddSuppressor(new Pistol());
    this.canBuy = this.gameStage.status;
  }
  public get goods() {
    return this.backpack;
  }

  public useShop(whatToBuy: string) {
    if (this.canBuy) {
      if (Creator.buy(whatToBuy).price < this.balance.getBalance()) {
        this.backpack.push(Creator.buy(whatToBuy));
        this.balance.removeMoney(Creator.buy(whatToBuy).price);
      } else
        console.log(
          `No money for buy! Currently on balance: ${this.balance.getBalance()}`
        );
    } else console.log(`Shop unavailable on this stage!`);
  }
  public upgradeGun(gun: any, type: string, scope: string) {
    if (type === 'supp') {
      this.improver = new AddSuppressor(gun);
      this.improver.upgrade(scope);
    } else if (type === 'both') {
      this.improver = new AddSuppressor(gun);
      this.improver.upgrade(scope);
      this.improver = new ChangeScope(gun);
      this.improver.upgrade(scope);
    } else {
      this.improver = new ChangeScope(gun);
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
