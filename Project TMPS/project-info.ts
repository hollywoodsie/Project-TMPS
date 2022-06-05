//Template method

import { Balance } from './team-balance';
abstract class Information {
  protected showDate(): void {
    console.log(`\n\n-> Session requested on ${new Date().toLocaleString()}`);
  }

  protected abstract showAdditional(): string;

  protected showDefault(): void {}

  public showInfo() {
    this.showDate();
    console.log(this.showAdditional());
    console.log(this.showDefault());
  }
}

class PersonalInformation extends Information {
  protected showAdditional(): string {
    console.log(`\n---- Personal Information ----`);
    return `It's an engine that emulates the gear mechanism in a shooter.\nThis project was prepared by Covali Roman, student of the Technical University of Moldova `;
  }
  protected showDefault() {
    return ``;
  }
}
class TechnicalInformation extends Information {
  protected showAdditional(): string {
    console.log(`\n---- Technical Information ----`);
    return 'This project is written in TypeScript. Released on the NodeJS platform.';
  }

  protected showDefault() {
    return `By default team balance is ${Balance.getInstance().getBalance()}\nNo users by default!\nBy default app is in init stage.That means u need to run script to start.\n On warmup u can't buy, on freeze time u have 10 seconds to buy, next u have to play, so shop gonna be unavailable.\n\n`;
  }
}

export { PersonalInformation, TechnicalInformation };
