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
      thermostat.temperature = 10
      expect(function() {thermostat.down();}).toThrow ('Minimum temperature reached');
    });
  });

  describe('isPowerSaving', function() {
    it ('starts with power saving mode off', function() {
      expect(thermostat.isPowerSaving).toBe(false)
    })

    it('has a max temp of 25 degrees when on', function() {
      thermostat.powerSavingOn()
      thermostat.temperature = 25
      expect(function() {thermostat.up();}).toThrow ('Max temperature reached');
    })

    it('has max temp of 32 degrees when off', function() {
      thermostat.temperature = 32
      expect(function() { thermostat.up(); }).toThrow('Maximum temperature reached')
    });
  });

  describe('power saving on', function() {
    it('sets power saving to true', function() {
      thermostat.powerSavingOn()
      expect(thermostat.isPowerSaving).toBe(true)
    });
  });

  describe('resetTemperature', function() {
    it ('resets back to 20 degrees', function() {
      thermostat.up()
      thermostat.resetTemperature()
      expect(thermostat.temperature).toBe(20)
    })
  })

  describe('energyUsage', function() {
    it('is low when temperature < 18', function() {
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toBe('Low')
    });

    it('is high when temperature > 25', function() {
      thermostat.temperature = 38
      expect(thermostat.energyUsage()).toBe('High')
    })

    it('is medium when 18..25', function() {
      thermostat.thermostat = 20
    });
  });
});
