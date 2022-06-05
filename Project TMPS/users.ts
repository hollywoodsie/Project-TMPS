import { Backpack } from './inventory';

class Users {
  public nickname: string;
  public backpack: Backpack;

  constructor(nickname: string) {
    this.nickname = nickname;
    this.backpack = new Backpack();
  }
  public showBackpack() {
    console.log(
      `------------------------${this.nickname}'s backpack------------------------`
    );
    console.log(`Guns:`);
    for (let i = 0; i < this.backpack.gunsInside.length; i++) {
      console.log('\n->', this.backpack.gunsInside[i]);
    }
    console.log(`\nMedicine:`);
    for (let i = 0; i < this.backpack.medicineInside.length; i++) {
      console.log('\n->', this.backpack.medicineInside[i]);
    }
    console.log(
      `--------------------------------------------------------------------`
    );
  }
}
export { Users };
