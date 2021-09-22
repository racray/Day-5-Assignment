var Capital = (str) =>{
    console.log(str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    ));
  }

Capital("rayed khan");