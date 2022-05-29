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
  static buy(someGood: string): Goods {
    if (someGood === 'pistol') {
      return new Pistol();
    } else if (someGood === 'rifle') {
      return new Rifle();
    } else if (someGood === 'sniper') {
      return new SniperRifle();
    } else if (someGood === 'shotgun') {
      return new Shotgun();
    } else if (someGood === 'bandage') {
      return new Bandage();
    } else if (someGood === 'first-aid-kit') {
      return new FirstAidKit();
    } else if (someGood === 'med-kit') {
      return new MedKit();
    }
    throw new Error(`'${someGood}' doesn't exist in shop!`);
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
};
