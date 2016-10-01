'use strict';

var pikePlaceMarket = {
location: 'Pike Place Market',
minCust: 14,
maxCust: 35,
avgCups: 1.2,
avgPounds: .34,
hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
custPerHour: [],
custPerDay: 0,
cupsPerHour: [],
cupsPerDay: 0,
lbsPerHour: [],
lbsPerDay: 0,
employeesPerHour: [],
employeesPerDay: 0,

getRandomCustomer: function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},

generateCustomerData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.custPerHour.push(this.getRandomCustomer());
    this.custPerDay += this.custPerHour[i];
  }
},

generateCupsData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cupsPerHour.push(this.custPerHour [i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},

generateLbsData: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.lbsPerHour.push(this.custPerHour [i] * this.avgPounds);
      this.lbsPerDay += this.lbsPerHour[i];
    }
},

generateEmployeeData: function () {
    for (var i = 0; i < this.hours.length; i++) {
        this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
        this.employeesPerDay += this.employeesPerHour[i];
    }
}
};

pikePlaceMarket.generateCustomerData();
pikePlaceMarket.generateCupsData();
pikePlaceMarket.generateLbsData();
pikePlaceMarket.generateEmployeeData();

var capitolHill = {
location: 'Capitol Hill',
minCust: 12,
maxCust: 28,
avgCups: 3.2,
avgPounds: .03,
hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
custPerHour: [],
custPerDay: 0,
cupsPerHour: [],
cupsPerDay: 0,
lbsPerHour: [],
lbsPerDay: 0,
employeesPerHour: [],
employeesPerDay: 0,

getRandomCustomer: function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},

generateCustomerData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.custPerHour.push(this.getRandomCustomer());
    this.custPerDay += this.custPerHour[i];
  }
},

generateCupsData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cupsPerHour.push(this.custPerHour [i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},

generateLbsData: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.lbsPerHour.push(this.custPerHour [i] * this.avgPounds);
      this.lbsPerDay += this.lbsPerHour[i];
    }
},

generateEmployeeData: function () {
    for (var i = 0; i < this.hours.length; i++) {
        this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
        this.employeesPerDay += this.employeesPerHour[i];
    }
}
};

capitolHill.generateCustomerData();
capitolHill.generateCupsData();
capitolHill.generateLbsData();
capitolHill.generateEmployeeData();

var seattlePublicLibrary = {
location: 'Seattle Public Library',
minCust: 9,
maxCust: 45,
avgCups: 2.6,
avgPounds: .02,
hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
custPerHour: [],
custPerDay: 0,
cupsPerHour: [],
cupsPerDay: 0,
lbsPerHour: [],
lbsPerDay: 0,
employeesPerHour: [],
employeesPerDay: 0,

getRandomCustomer: function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},

generateCustomerData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.custPerHour.push(this.getRandomCustomer());
    this.custPerDay += this.custPerHour[i];
  }
},

generateCupsData: function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cupsPerHour.push(this.custPerHour [i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},

generateLbsData: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.lbsPerHour.push(this.custPerHour [i] * this.avgPounds);
      this.lbsPerDay += this.lbsPerHour[i];
    }
},

generateEmployeeData: function () {
    for (var i = 0; i < this.hours.length; i++) {
        this.employeesPerHour.push(Math.ceil(this.custPerHour[i] / 30));
        this.employeesPerDay += this.employeesPerHour[i];
    }
}
};

seattlePublicLibrary.generateCustomerData();
seattlePublicLibrary.generateCupsData();
seattlePublicLibrary.generateLbsData();
seattlePublicLibrary.generateEmployeeData();
