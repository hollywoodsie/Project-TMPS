//Strategy

class ShopAvailability {
  private stage: Stages;

  constructor(stage: Stages) {
    this.stage = stage;
  }

  public setStrategy(stage: Stages): any {
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
    return false;
  }
}

class FreezeTime implements Stages {
  public setStatus(): boolean {
    return true;
  }
}

class GameTime implements Stages {
  public setStatus(): boolean {
    return false;
  }
}

export { ShopAvailability, Warmup, FreezeTime, GameTime, Init };
