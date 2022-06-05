//Factory Method

type Guns = Pistol | Shotgun | SniperRifle | Rifle;
type Medicine = Bandage | FirstAidKit | MedKit;

import { Users } from './users';

interface Goods {
  price: number;
}

interface IGuns extends Goods {
  ammo: number;
  scope: string;
  suppressor: boolean;
}

interface IMedicine extends Goods {
  heal: number;
}

class Pistol implements IGuns {
  public ammo: number = 12;
  public price: number = 250;
  public scope: string = '0x';
  public suppressor: boolean = false;
}

class Rifle implements IGuns {
  public ammo: number = 30;
  public price: number = 2700;
  public scope: string = '2x';
  public suppressor: boolean = false;
}

class Shotgun implements IGuns {
  public ammo: number = 7;
  public price: number = 1200;
  public scope: string = '0x';
  public suppressor: boolean = false;
}

class SniperRifle implements IGuns {
  public ammo: number = 7;
  public price: number = 4750;
  public scope: string = '4x';
  public suppressor: boolean = false;
}

class Bandage implements IMedicine {
  public heal: number = 15;
  public price: number = 100;
}

class FirstAidKit implements IMedicine {
  public heal: number = 75;
  public price: number = 450;
}

class MedKit implements IMedicine {
  public heal: number = 100;
  public price: number = 700;
}

class Creator {
  static buyGun(someGun: string): Guns {
    if (someGun === 'pistol') {
      return new Pistol();
    } else if (someGun === 'rifle') {
      return new Rifle();
    } else if (someGun === 'sniper') {
      return new SniperRifle();
    } else if (someGun === 'shotgun') {
      return new Shotgun();
    }
    throw new Error(`'${someGun}' doesn't exist in shop!`);
  }
  static buyMedicine(someMed: string): Medicine {
    if (someMed === 'bandage') {
      return new Bandage();
    } else if (someMed === 'first-aid-kit') {
      return new FirstAidKit();
    } else if (someMed === 'med-kit') {
      return new MedKit();
    }
    throw new Error(`'${someMed}' doesn't exist in shop!`);
  }
}

export {
  Goods,
  IGuns,
  Pistol,
  Rifle,
  Shotgun,
  SniperRifle,
  Bandage,
  FirstAidKit,
  MedKit,
  Creator,
  IMedicine,
  Guns,
  Medicine,
};
