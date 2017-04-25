window.helpers = (function () {
  function traverseSinsObject(object, array){
  var relevantPortion = object
   array.forEach(key => {
     relevantPortion = relevantPortion[key]
   })
   return relevantPortion
  }



}())
