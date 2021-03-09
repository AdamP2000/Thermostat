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

  describe('up', function(){
    it('increases the temparature by 1', function() {
      thermostat.up
      expect(thermostat.temperature).toBe(21)
    });
  });
});
