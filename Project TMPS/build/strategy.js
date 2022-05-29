"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = exports.GameTime = exports.FreezeTime = exports.Warmup = exports.ShopAvailability = void 0;
class ShopAvailability {
    constructor(stage) {
        this.stage = stage;
    }
    setStrategy(stage) {
        this.stage = stage;
    }
    get status() {
        return this.stage.setStatus();
    }
}
exports.ShopAvailability = ShopAvailability;
class Init {
    setStatus() {
        console.log(`Initial stage...`);
        return true;
    }
}
exports.Init = Init;
class Warmup {
    setStatus() {
        console.log(`Players are on warmup. Shop unavailable!`);
        return false;
    }
}
exports.Warmup = Warmup;
class FreezeTime {
    setStatus() {
        console.log(`Freeze time begins. You have 10 seconds to buy guns!`);
        return true;
    }
}
exports.FreezeTime = FreezeTime;
class GameTime {
    setStatus() {
        console.log(`Freeze time ended. Shop closed. Have fun!`);
        return false;
    }
}
exports.GameTime = GameTime;
