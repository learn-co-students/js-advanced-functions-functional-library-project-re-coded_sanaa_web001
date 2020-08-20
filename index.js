const fi = (function() {
    return {
        libraryMethod: function() {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function(collection, callback) {
            let result = collection;
            for (const item in collection) {
                callback(collection[item], item, collection);
            }
            return result;
        },

        map: function(collection, callback) {
            let result = [];
            for (const item in collection) {
                result.push(callback(collection[item], item, collection));
            }
            return result;
        },

        reduce: function(collection, callback, acc) {
            let accumulator = acc ? acc : collection[0];
            let index = acc ? 0 : 1;
            for (; index < collection.length; index++) {
                accumulator = callback(accumulator, collection[index], collection);
            }

            return accumulator;
        },
        find: function(collection, callback) {
            for (const item in collection) {
                if (callback(collection[item])) return collection[item];
            }
            return undefined;
        },
        filter: function(collection, callback) {
            let result = [];
            for (const item in collection) {
                if (callback(collection[item])) result.push(collection[item]);
            }
            return result;
        },
        size: function(collection) {
            return Object.keys(collection).length;
        },
        first: function(array, n) {
            if (n) {
                let result = []
                for (let i = 0; i < n; i++) {
                    result.push(array[i]);
                }
                return result;
            } else {
                return array[0];
            }
        },
        last: function(array, n) {
            if (n) {
                let result = [];
                for (n = array.length - n; n < array.length; n++) {
                    result.push(array[n]);
                }
                return result;
            } else return array[array.length - 1];
        },
        compact: function(array) {
            let result = [];
            let length = array.length;
            for (let i = 0; i < length; i++) {
                if (array[i]) result.push(array[i]);
            }
            return result;
        },
        sortBy: function(array, callback) {
            let newArr = [...array];
            return newArr.sort((a, b) => callback(a) - callback(b));
        },
        unpack: function(receiver, arr) {
            for (let val of arr)
                receiver.push(val)
        },
        flatten: function(collection, shallow, newArr = []) {
            if (!Array.isArray(collection)) return newArr.push(collection)
            if (shallow) {
                for (let val of collection)
                    Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
            } else {
                for (let val of collection) {
                    this.flatten(val, false, newArr)
                }
            }
            return newArr
        },
        uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
        keys: function(obj) {
            let result = [];
            for (const key in obj) {
                result.push(key);
            }
            return result;
        },
        values: function(obj) {
            let result = [];
            for (const key in obj) {
                result.push(obj[key]);
            }
            return result;
        },
        functions: function(obj) {
            let result = [];
            for (const key in obj) {
                if (typeof obj[key] == 'function') result.push(key);
            }
            return result.sort();
        },


    }
})()

fi.libraryMethod()
    // var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
    // fi.sortBy(stooges, function(stooge) { return stooge.name })
console.log(
    fi.uniq([1, 2, 2, 3, 4, 6, 9], false, (val => val % 3))
);

// let unpack = function(receiver = [], arr) {
//     for (let val of arr)
//         receiver.push(val)
//     return receiver
// }
// let unpacked = unpack([], [
//     [1],
//     [2],
//     [3],
//     [2, 3, [2]]
// ]);
// console.log(unpacked)
