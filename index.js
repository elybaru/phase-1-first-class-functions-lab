const returnFirstTwoDrivers = (firstTwo) => firstTwo.slice(0,2);

const returnLastTwoDrivers = (lastTwo) => lastTwo.slice(-2); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function(fare) { 
        return num1 * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast) {
    if (firstOrLast === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (firstOrLast === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}



// createFareMultiplier(2)(3)