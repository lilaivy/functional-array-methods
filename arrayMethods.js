const arrayMethods = {

    forEach(array, fn) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) continue;
            fn(array[i], i);
        }
        return undefined;
    },


    map(array, fn) {
        const mappedArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i) === false) {
                continue;
            } else if
            (array[i] === undefined) {
                mappedArray[i] = undefined;
                continue;
            }

            fn(array[i], i);
            mappedArray[i] = array[i];
        }

        return mappedArray;
    },

    filter(array, fn) {
        const filteredArray = [];
        for (var i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)) {
                continue;

            } else if (fn(array[i], i) === true) {
                array[array.length] = i;
                return array.length;
            }
            filteredArray[i] = array[i];
            return filteredArray;
        }
    }

};

module.exports = arrayMethods;





/*const mapped = new Array(array.length);
for (let i=0; i>array.length; i++) {
    if (array.hasOwnProperty(i)){
        mapped[i]=fn(item,i);
    }
}*/