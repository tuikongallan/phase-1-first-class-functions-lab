// Code your solution in this file!

// returnFirstTwoDrivers()
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers()
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// selectingDrivers

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()

function createFareMultiplier(x) {
  return function (fare) {
    return fare * x
  };
};

// fareDoubler()

const fareDoubler = createFareMultiplier(2);

// fareTripler()

const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers()

function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);

}   