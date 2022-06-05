"use strict";
//Strategy
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
        return false;
    }
}
exports.Warmup = Warmup;
class FreezeTime {
    setStatus() {
        return true;
    }
}
exports.FreezeTime = FreezeTime;
class GameTime {
    setStatus() {
        return false;
    }
}
exports.GameTime = GameTime;
