"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_api_1 = require("./shop-api");
const project_info_1 = require("./project-info");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function shopEngine() {
    return __awaiter(this, void 0, void 0, function* () {
        const personalInfo = new project_info_1.PersonalInformation();
        const techInfo = new project_info_1.TechnicalInformation();
        personalInfo.showInfo();
        techInfo.showInfo();
        const shopAPI = new shop_api_1.ShopAPI();
        yield sleep(2000);
        shopAPI.createUser('kowalski');
        shopAPI.createUser('skipper');
        yield sleep(2000);
        shopAPI.startRound();
        yield sleep(3000);
        shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);
        yield sleep(3000);
        shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);
        shopAPI.buySome('rifle', 'gun', shopAPI.users[0]);
        shopAPI.buySome('first-aid-kit', 'med', shopAPI.users[0]);
        yield sleep(3000);
        shopAPI.buySome('pistol', 'gun', shopAPI.users[1]);
        shopAPI.buySome('sniper', 'gun', shopAPI.users[1]);
        shopAPI.buySome('first-aid-kit', 'med', shopAPI.users[1]);
        yield sleep(9000);
        shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);
        yield sleep(2000);
        console.log(shopAPI.users);
        shopAPI.users[0].showBackpack();
        shopAPI.users[1].showBackpack();
        yield sleep(2000);
        shopAPI.upgradeGun(shopAPI.users[0].backpack.gunsInside[1], 'both', 'x16');
        shopAPI.upgradeGun(shopAPI.users[1].backpack.gunsInside[0], 'supp');
        yield sleep(5000);
        console.log(`----- After upgrade -----`);
        shopAPI.users[0].showBackpack();
        shopAPI.users[1].showBackpack();
    });
}
shopEngine();
