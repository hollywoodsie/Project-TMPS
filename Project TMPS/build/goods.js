"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = exports.MedKit = exports.FirstAidKit = exports.Bandage = exports.SniperRifle = exports.Shotgun = exports.Rifle = exports.Pistol = void 0;
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
    static buy(someGood) {
        if (someGood === 'pistol') {
            return new Pistol();
        }
        else if (someGood === 'rifle') {
            return new Rifle();
        }
        else if (someGood === 'sniper') {
            return new SniperRifle();
        }
        else if (someGood === 'shotgun') {
            return new Shotgun();
        }
        else if (someGood === 'bandage') {
            return new Bandage();
        }
        else if (someGood === 'first-aid-kit') {
            return new FirstAidKit();
        }
        else if (someGood === 'med-kit') {
            return new MedKit();
        }
        throw new Error(`'${someGood}' doesn't exist in shop!`);
    }
}
exports.Creator = Creator;
