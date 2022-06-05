import { ShopAPI } from './shop-api';
import { TechnicalInformation, PersonalInformation } from './project-info';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function shopEngine() {
  const personalInfo = new PersonalInformation();
  const techInfo = new TechnicalInformation();

  personalInfo.showInfo();
  techInfo.showInfo();

  const shopAPI = new ShopAPI();

  await sleep(2000);
  shopAPI.createUser('kowalski');
  shopAPI.createUser('skipper');

  await sleep(2000);
  shopAPI.startRound();

  await sleep(3000);
  shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);

  await sleep(3000);
  shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);
  shopAPI.buySome('rifle', 'gun', shopAPI.users[0]);
  shopAPI.buySome('first-aid-kit', 'med', shopAPI.users[0]);
  await sleep(3000);
  shopAPI.buySome('pistol', 'gun', shopAPI.users[1]);
  shopAPI.buySome('sniper', 'gun', shopAPI.users[1]);
  shopAPI.buySome('first-aid-kit', 'med', shopAPI.users[1]);

  await sleep(9000);
  shopAPI.buySome('pistol', 'gun', shopAPI.users[0]);

  await sleep(2000);
  console.log(shopAPI.users);
  shopAPI.users[0].showBackpack();
  shopAPI.users[1].showBackpack();
  await sleep(2000);
  shopAPI.upgradeGun(shopAPI.users[0].backpack.gunsInside[1], 'both', 'x16');
  shopAPI.upgradeGun(shopAPI.users[1].backpack.gunsInside[0], 'supp');
  await sleep(5000);
  console.log(`----- After upgrade -----`);
  shopAPI.users[0].showBackpack();
  shopAPI.users[1].showBackpack();
}
shopEngine();
