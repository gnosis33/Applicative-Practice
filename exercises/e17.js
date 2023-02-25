export function minBy(array, cb) {
    if (array.length === 0) { 
        return undefined;
    };
    let minValue = cb(array[0]);
    let minElement = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentValue = cb(array[i]);
        if (currentValue < minValue) {
            minValue = currentValue;
            minElement = array[i];
        };
    };
    return minElement;
};

export function maxBy(array, cb) {
    if (array.length === 0) { 
        return undefined;
    };
    let maxValue = cb(array[0]);
    let maxElement = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentValue = cb(array[i]);
        if (currentValue > maxValue) {
            maxValue = currentValue;
            maxElement = array[i];
        };
    };
    return maxElement;
};
