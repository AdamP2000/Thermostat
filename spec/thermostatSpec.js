'use strict';

describe('Thermostat', function() {
  let thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toBe(20)
    });
  });

  describe('up', function() {
    it('increases the temparature by 1', function() {
      thermostat.up()
      expect(thermostat.temperature).toBe(21)
    });
  });

  describe('down', function() {
    it ('decreases the temperature by 1', function() {
      thermostat.down()
      expect(thermostat.temperature).toBe(19)
    })

    it('throws error when it is already at minimum temperature', function() {
      thermostat.temperature -= 10
      console.log(thermostat.temperature)
      expect(function() {thermostat.down();}).toThrow ('Minimum temperature reached');
    });
  });

  describe('isPowerSaving', function() {
    it ('starts with power saving mode off', function() {
      expect(thermostat.isPowerSaving).toBe(false)
    })
    it('has a max temp of 25 degrees when on', function() {
      this.temparature += 5
      expect(function() {thermostat.up();}).toThrow ('Max temperature, power saving mode is on');
    })
  })

  describe('power saving on', function() {
    it('sets power saving to true', function() {
      thermostat.powerSavingOn()
      expect(thermostat.isPowerSaving).toBe(true)
    });
  });
});
