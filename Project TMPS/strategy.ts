class ShopAvailability {
  private stage: Stages;

  constructor(stage: Stages) {
    this.stage = stage;
  }

  public setStrategy(stage: Stages) {
    this.stage = stage;
  }
  get status() {
    return this.stage.setStatus();
  }
}

interface Stages {
  setStatus(): boolean;
}
class Init implements Stages {
  public setStatus(): boolean {
    console.log(`Initial stage...`);
    return true;
  }
}
class Warmup implements Stages {
  public setStatus(): boolean {
    console.log(`Players are on warmup. Shop unavailable!`);
    return false;
  }
}

class FreezeTime implements Stages {
  public setStatus(): boolean {
    console.log(`Freeze time begins. You have 10 seconds to buy guns!`);
    return true;
  }
}

class GameTime implements Stages {
  public setStatus(): boolean {
    console.log(`Freeze time ended. Shop closed. Have fun!`);
    return false;
  }
}

export { ShopAvailability, Warmup, FreezeTime, GameTime, Init };
