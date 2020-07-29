const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      if (array.length){
        array.forEach((x) => alert(x))
      }else
      {
        for (const property in array) {
                alert(array[property])
         }
      }
       return array;
    },

    map: function(array, callback) {
      if (array.length){
        return array.map(function (x) { return callback(x)} );
      }else
      {
        let res = [];
        for (const property in array) {
           res.push(callback(array[property]));
         }
         return res;
         }

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
