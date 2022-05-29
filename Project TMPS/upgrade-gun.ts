import { IGuns } from './goods';

class Decorator implements IGuns {
  public ammo: number;
  public scope: string;
  public price: number;
  public suppressor: boolean;
  protected object: IGuns;

  constructor(object: IGuns) {
    this.object = object;
    this.price = object.price;
    this.ammo = object.ammo;
    this.scope = object.scope;
    this.suppressor = object.suppressor;
  }
}
class AddSuppressor extends Decorator {
  public upgrade(): IGuns {
    this.object.suppressor = true;
    return this.object;
  }
}
class ChangeScope extends Decorator {
  public upgrade(scope: string): IGuns {
    this.object.scope = scope;
    return this.object;
  }
}

export { Decorator, AddSuppressor, ChangeScope };
