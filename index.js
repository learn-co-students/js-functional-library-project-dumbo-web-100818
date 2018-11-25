fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
      const collection = testArr instanceof Array ? testArr.slice() : Object.values(testArr);
      for (let i = 0; i < collection.length; i++) {
        alert(collection[i]);
      }
      return testArr;
    },

    map: function(testArr, callback) {
      const collection = testArr instanceof Array ? testArr.slice() : Object.values(testArr);
      const newArray = []
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
      return newArray;
    },

    reduce: function(testArr, callback, acc = 0) {
      const collection = testArr instanceof Array ? testArr.slice() : Object.values(testArr);
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    functions: function(obj) {
      const functionNames = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key);
        }
      }
      return functionNames.sort();
    },


  }
})()

fi.libraryMethod()
