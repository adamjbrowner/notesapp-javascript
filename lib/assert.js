(function(exports) {

  function isTrue(functionName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + functionName + " is NOT truthy");
    } else {
      console.log(functionName + " passes");
    }
  }

  exports.assert = {
  isTrue: isTrue,
}
})(this);
