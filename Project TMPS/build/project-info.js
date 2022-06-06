"use strict";
//Template method
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalInformation = exports.PersonalInformation = void 0;
const team_balance_1 = require("./team-balance");
class Information {
    showDate() {
        console.log(`\n\n-> Session requested on ${new Date().toLocaleString()}`);
    }
    showDefault() { }
    showInfo() {
        this.showDate();
        console.log(this.showAdditional());
        console.log(this.showDefault());
    }
}
class PersonalInformation extends Information {
    showAdditional() {
        console.log(`\n---- Personal Information ----`);
        return `It's an engine that emulates the gear mechanism in a shooter.\nThis project was prepared by Covali Roman, student of the Technical University of Moldova `;
    }
}
exports.PersonalInformation = PersonalInformation;
class TechnicalInformation extends Information {
    showAdditional() {
        console.log(`\n---- Technical Information ----`);
        return 'This project is written in TypeScript. Released on the NodeJS platform.';
    }
    showDefault() {
        return `By default team balance is ${team_balance_1.Balance.getInstance().getBalance()}\nNo users by default!\nBy default app is in init stage.That means u need to run script to start.\n On warmup u can't buy, on freeze time u have 10 seconds to buy, next u have to play, so shop gonna be unavailable.\n\n`;
    }
}
exports.TechnicalInformation = TechnicalInformation;
