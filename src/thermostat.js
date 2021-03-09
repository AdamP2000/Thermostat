class Thermostat {
  constructor() {
    this.temperature = 20;
    this.isPowerSaving = false
  }

  up() {
    if(this.temperature >= 32) {
      throw 'Maximum temperature reached'
    } else if(this.isPowerSaving && this.temperature >= 25) {
      throw 'Max temperature reached'
    } else {
      this.temperature += 1
    }
  }

  down() {
    if (this.temperature >= 11) {
      this.temperature -= 1;
    } else {
      throw 'Minimum temperature reached';
    }
  };

  powerSavingOn() {
    this.isPowerSaving = true;
  }

  resetTemperature() {
    this.temperature = 20
  };

  energyUsage() {
    if(this.temperature < 18) {
      return 'Low'
    }
    return 'High'
  }
};
