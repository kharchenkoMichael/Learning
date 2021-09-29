addEventListener(
  "message",
  function (e) {
    var array = e.data;
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }

    postMessage(array);
  },
  false
);
