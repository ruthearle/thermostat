describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  // DEFAULT SECTION //
  describe('by default will', function(){
    it("be 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    })

    it("begin with PSM on", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    })
  })

  describe('maximum temperature', function(){

    it('is 25 degrees with PSM on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 32 degrees with PSM off', function(){
      thermostat.togglePSM();
      expect(thermostat.maximumTemperature()).toEqual(32);
    })

  })

  //PSM ON //
  describe("Increasing the temperature", function() {
    describe('with PSM on', function(){
      it('increases if < 25 degrees', function(){
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(21);
      })

      it('will not increase if temperature is >= 25 degrees', function(){
        thermostat.temperature = 25;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(25);
      })
    })

  //PSM OFF //

    describe('with PSM off', function(){

      beforeEach(function() {
        thermostat.togglePSM();
      })

      it('increases if < 32 degrees', function(){
        thermostat.temperature = 25;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(26);
      })

      it('will not increase if temperature is >= 32 degrees', function(){
        thermostat.temperature = 32;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(32);
      })
    })
  })

  describe("Decreasing the temperature", function() {
    it('decreases if > 10 degrees', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    })

    it('will not decrease if temperature is <= 10 degrees', function(){
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    })
  })

  describe('resetting the temperature', function(){
    it('resets to 20 degrees', function(){
      thermostat.temperature = 25;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('energy usage', function(){
    it('is efficient if temp < 18', function(){
      thermostat.temperature = 15;
      expect(thermostat.energyRating()).toEqual('efficient');
    })
    it('is average if temp > 18 and < 25', function(){
      thermostat.temperature = 23;
      expect(thermostat.energyRating()).toEqual('average');
    })
    it('is poor if temp > 25', function(){
      thermostat.temperature = 30;
      expect(thermostat.energyRating()).toEqual('inefficient');
    })
  })

})
