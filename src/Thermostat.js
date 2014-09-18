function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
  if(this.powerSavingMode) return 25;
  return 32;
  // return (this.powerSavingMode) ? 25 : 32;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < this.maximumTemperature()) {
    this.temperature += 1;
  }
}

Thermostat.prototype.togglePSM = function() {
  this.powerSavingMode = !this.powerSavingMode;
}

Thermostat.prototype.decreaseTemperature = function() {
  if(this.temperature > 10) this.temperature -= 1;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyRating = function() {
  if(this.temperature < 18) return 'efficient';
  if(this.temperature >= 18 && this.temperature < 25) return 'average';
  return 'inefficient';
};