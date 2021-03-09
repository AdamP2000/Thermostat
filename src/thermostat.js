class Thermostat {
  constructor() {
    this.temperature = 20;
    this.isPowerSaving = false
  }

  up() {
    if(!this.isPowerSaving && this.temperature < 25) {
      this.temperature += 1
      debugger;
    } else {
      throw 'Max temperature, power saving mode is on'
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
};
