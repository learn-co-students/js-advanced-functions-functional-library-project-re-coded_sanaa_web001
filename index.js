const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, iteratee) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);

      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx]);

      return collection;
    },

    map: function (array, callback) {
      if (!(array instanceof Array)) {
        array = Object.values(array);
      }

      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
      }
      return newArray;
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },
    filter: function (collection, predicate) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },
    reduce: function (c = [], callback = () => {}, acc) {
      let collection = c.slice(0);

      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }

      let len = collection.length;

      for (let i = 0; i < len; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    uniqSorted: function (collection, iteratee) {
      const sorted = [collection[0]];
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx]) sorted.push(collection[idx]);
      }
      return sorted;
    },
    uniq: function (collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee);
      } else if (!iteratee) {
        return Array.from(new Set(collection));
      } else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for (let val of collection) {
          const moddedVal = iteratee(val);
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },

    compact: function (array) {
      return array.filter((e) => !!e); // two
    },
    size: function (obj) {
      return Object.keys(obj).length;
    },
    first: function (array, n) {
      if (!n) {
        return array[0];
      }
      return array.filter((e) => e < n + 1);
    },
    last: function (array, n = false) {
      if (!n) {
        return array[array.length - 1];
      }
      return array.slice(array.length - n, array.length);
      // return array.slice(array.n, array.length);
    },
    sortBy: function (collection, callback) {
      const newArr = [...collection];
      return newArr.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function (collection, shallow, newArr=[]) {
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


    keys: function (obj) {
      const keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function (obj) {
      const values = [];
      for (let key in obj) {
        values.push(obj[key]);
      }
      return values;
    },
    functions: function (obj) {
      let functions = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functions.push(key);
        }
      }
      return functions;
    },
  };
})();

fi.libraryMethod();

// console.log(fi.uniq([1, 1, 2, 3, 2, 4, 5, 6, 1]));
// console.log(fi.compact([1, 0, 'a', "", "maru", null, "choux", NaN, false, "doge", undefined]));

const testObject = {
  a: "",
  z: () => null,
  p: "",
  c: () => null,
  k: () => null,
};
// console.log(fi.size(testObject));
// console.log(fi.last([1, 2, 3, 4], 1));
// // reducer takes an array, reducer() and initialValue as argumentfunction
// // reduce(arr, reducer, initialValue);
// // {
// //   let accumulator = initialValue === undefined ? 0 : initialValue;
// //   for (let i = 0; i < arr.length; i++)
// //     accumulator = reducer(accumulator, arr[i], i, arr);
// //   return accumulator;
// // }
