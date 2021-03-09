class Thermostat {
  constructor() {
    this.temperature = 20;
    this.isPowerSaving = false
  }

  up() {
    this.temperature += 1;
  }

  down() {
    if (this.temperature >= 11) {
      this.temperature -= 1;
    } else {
      throw 'Minimum temperature reached';
    }
  };
};
