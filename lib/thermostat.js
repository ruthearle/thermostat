function Thermostat() {
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.powerSavingMode = true;
  this.powerSavingOffMax = 32
  this.powerSavingOnMax = 25
  this.minimumTemp = 10
}

Thermostat.prototype.maximumTemperature = function() {
  if (this.powerSavingMode) return this.powerSavingOnMax;
  return this.powerSavingOffMax;
};

Thermostat.prototype.togglePSM = function() {
  if (this.powerSavingMode) {
    this.powerSavingMode = false;
  }
  else {
   this.powerSavingMode = true;
  }
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < this.maximumTemperature()) this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.minimumTemp) this.temperature -= 1;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.defaultTemp;
};

Thermostat.prototype.energyRating = function() {
  var x = this.temperature;
  switch (true) {
    case (x < 18):
      return 'efficient';
    case (x > 18 && x < 25):
      return 'average';
    case (x > 25):
      return 'inefficient';
  }
};
