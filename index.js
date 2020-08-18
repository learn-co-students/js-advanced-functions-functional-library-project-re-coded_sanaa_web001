const fi = (function () {
    return {
        libraryMethod: function () {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function (arr, alert) {
            if (arr.length) {
                arr.forEach((x) => alert(x));
            }
            else {
                Object.values(arr).forEach((x) => alert(x));
            }
            return arr;
        },

        map: function (arr, callback) {
            if (arr.length) {
                return arr.map(function (x) { return callback(x) });
            }
            else {
                let newArr = [];
                Object.values(arr).forEach((x) => newArr.push(callback(x)));
                return newArr;
            }

        },

        reduce: function (arr, callback, value) {
            if (value) {
                return arr.reduce((a, b) => callback(a, b), value)
            } else {
                return arr.reduce((a, b) => callback(a, b))
            }
        },

        find: function (arr, fun) {
            return arr.find((a) => fun(a));
        },
        filter: function (arr, fun) {
            return arr.filter((x) => fun(x));
        },
        size: function (arr) {
            if (arr.length) {
                return arr.length
            }
            else {
                let size = 0;
                Object.keys(arr).forEach(() => size += 1);
                return size;
            }

        },
        first: function (arr, a) {
            if (a) {
                return arr.slice(0, a);
            }
            else {
                return arr[0];
            }
        },

        last: function (arr, a) {
            if (a) {
                return arr.slice(Math.max(arr.length - a, 0))

            } else {
                return arr[arr.length - 1];
            }
        },

        compact: function (arr) {
            const falsy = new Set([false, null, 0, "", undefined, NaN])
            return arr.filter(x => !falsy.has(x))
        },

        sortBy: function (arr, callback) {

            return arr.slice().sort(function (a, b) { return callback(a) - callback(b) });
        },

        flatten: function (arr, shallow) {
            if (shallow === true) {
                return [].concat(...arr);
            } else {
                while (arr.some((item) => Array.isArray(item))) {
                    arr = [].concat(...arr)
                }
                return arr;
            }


        },

        uniq: function (array, isSorted, callback) {
            if (isSorted === undefined) {
                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }
                return array.filter(onlyUnique);
            } else {
                function onlyUnique1(value, index, self) {
                    for (let i = 0; i < index; i++) {
                        if (callback(value) === callback(self[i])) {
                            return false
                        }
                    }
                    return true;
                }
                return array.filter(onlyUnique1);
            }
        },
        keys: function (object) {
            let arr = [];
            for (const property in object) {
                arr.push(property);
            }
            return arr;
        },
        values: function (object) {
            let arr = [];
            for (const property in object) {
                arr.push(object[property]);
            }
            return arr;
        },

        functions: function (object) {
            let arr = [];
            for (const property in object) {
                if (object[property] === "") { } else {
                    arr.push(property);
                }

            }
            arr.sort();
            return arr;
        },


    }
})()

fi.libraryMethod()