"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScope = exports.AddSuppressor = exports.Decorator = void 0;
class Decorator {
    constructor(object) {
        this.object = object;
        this.price = object.price;
        this.ammo = object.ammo;
        this.scope = object.scope;
        this.suppressor = object.suppressor;
    }
}
exports.Decorator = Decorator;
class AddSuppressor extends Decorator {
    upgrade() {
        this.object.suppressor = true;
        return this.object;
    }
}
exports.AddSuppressor = AddSuppressor;
class ChangeScope extends Decorator {
    upgrade(scope) {
        this.object.scope = scope;
        return this.object;
    }
}
exports.ChangeScope = ChangeScope;
