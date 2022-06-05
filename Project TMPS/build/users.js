"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const inventory_1 = require("./inventory");
class Users {
    constructor(nickname) {
        this.nickname = nickname;
        this.backpack = new inventory_1.Backpack();
    }
    showBackpack() {
        console.log(`------------------------${this.nickname}'s backpack------------------------`);
        console.log(`Guns:`);
        for (let i = 0; i < this.backpack.gunsInside.length; i++) {
            console.log('\n->', this.backpack.gunsInside[i]);
        }
        console.log(`\nMedicine:`);
        for (let i = 0; i < this.backpack.medicineInside.length; i++) {
            console.log('\n->', this.backpack.medicineInside[i]);
        }
        console.log(`--------------------------------------------------------------------`);
    }
}
exports.Users = Users;
