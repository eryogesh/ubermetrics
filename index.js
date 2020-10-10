// 'use strict';

function findOrigin(trips) {
    if (!trips) {
        return null;
    }

    let startPlaces = {};
    let endPlaces = {};

    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        if (!startPlaces[trip[0]]) {
            startPlaces[trip[0]] = 1
        } else {
            startPlaces[trip[0]]++;
        }
        if (!endPlaces[trip[1]]) {
            endPlaces[trip[1]] = 1
        } else {
            endPlaces[trip[1]]++;
        }
    }

    for (var place in startPlaces) {
        if (!endPlaces[place] || startPlaces[place] > endPlaces[place]) {
            return place;
        }
    }
}

var trips = [['Cologne', 'Berlin'], ['Munich', 'Cologne'], ['YourPlace', 'Munich'], ['Pune', 'YourPlace']];
console.log('Input Trips:', trips);
console.log('Starting Place:', findOrigin(trips));
