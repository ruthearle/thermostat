describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("will be 20 degrees by default", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  describe("Increasing the temperature", function() {
    it('increases if < 35 degrees', function(){
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(21);
    });

    it('will not increase if temperature is >= 25 degrees', function(){
      thermostat.temperature = 25;
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(25);
    })
  });

  describe("Decreasing the temperature", function() {
    it('decreases if > 10 degrees', function(){
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(19);
    });

    it('will not decrease if temperature is <= 10 degrees', function(){
      thermostat.temperature = 10;
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(10);
    })
  });

});
