//Decorator

import { Guns, IGuns } from './goods';

interface Upgrade {
  upgrade(scope?: string): Guns;
}
class Decorator implements IGuns {
  public ammo: number;
  public scope: string;
  public price: number;
  public suppressor: boolean;
  protected object: Guns;

  constructor(object: Guns) {
    this.object = object;
    this.price = object.price;
    this.ammo = object.ammo;
    this.scope = object.scope;
    this.suppressor = object.suppressor;
  }
}

class AddSuppressor extends Decorator implements Upgrade {
  public upgrade(): Guns {
    this.object.suppressor = true;
    return this.object;
  }
}
class ChangeScope extends Decorator implements Upgrade {
  public upgrade(scope: string): Guns {
    this.object.scope = scope;
    return this.object;
  }
}

export { Decorator, AddSuppressor, ChangeScope, Upgrade };
