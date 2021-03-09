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
  describe('powerSaving', function() {
    it ('starts with power saving mode off', function() {
      expect(thermostat.powerSaving).toBe(false)
    })
  })
});
