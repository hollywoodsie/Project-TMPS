"use strict";
//Factory Method
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineCreator = exports.GunCreator = exports.Creator = exports.MedKit = exports.FirstAidKit = exports.Bandage = exports.SniperRifle = exports.Shotgun = exports.Rifle = exports.Pistol = void 0;
class Pistol {
    constructor() {
        this.ammo = 12;
        this.price = 250;
        this.scope = '0x';
        this.suppressor = false;
    }
}
exports.Pistol = Pistol;
class Rifle {
    constructor() {
        this.ammo = 30;
        this.price = 2700;
        this.scope = '2x';
        this.suppressor = false;
    }
}
exports.Rifle = Rifle;
class Shotgun {
    constructor() {
        this.ammo = 7;
        this.price = 1200;
        this.scope = '0x';
        this.suppressor = false;
    }
}
exports.Shotgun = Shotgun;
class SniperRifle {
    constructor() {
        this.ammo = 7;
        this.price = 4750;
        this.scope = '4x';
        this.suppressor = false;
    }
}
exports.SniperRifle = SniperRifle;
class Bandage {
    constructor() {
        this.heal = 15;
        this.price = 100;
    }
}
exports.Bandage = Bandage;
class FirstAidKit {
    constructor() {
        this.heal = 75;
        this.price = 450;
    }
}
exports.FirstAidKit = FirstAidKit;
class MedKit {
    constructor() {
        this.heal = 100;
        this.price = 700;
    }
}
exports.MedKit = MedKit;
class Creator {
}
exports.Creator = Creator;
class GunCreator extends Creator {
    buy(someGun) {
        if (someGun === 'pistol') {
            return new Pistol();
        }
        else if (someGun === 'rifle') {
            return new Rifle();
        }
        else if (someGun === 'sniper') {
            return new SniperRifle();
        }
        else if (someGun === 'shotgun') {
            return new Shotgun();
        }
        throw new Error(`'${someGun}' doesn't exist in shop!`);
    }
}
exports.GunCreator = GunCreator;
class MedicineCreator extends Creator {
    buy(someMed) {
        if (someMed === 'bandage') {
            return new Bandage();
        }
        else if (someMed === 'first-aid-kit') {
            return new FirstAidKit();
        }
        else if (someMed === 'med-kit') {
            return new MedKit();
        }
        throw new Error(`'${someMed}' doesn't exist in shop!`);
    }
}
exports.MedicineCreator = MedicineCreator;
