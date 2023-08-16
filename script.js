"use strict";

document.addEventListener("keydown", (event) => {
  //console.log(event);

  const keyPress = event.key;
  const alphabeticPattern = /^[a-zA-Z]$/;
  if (alphabeticPattern.test(keyPress)) {
    console.log(event.key);
  } else {
    alert("Not an alphabet");
  }
});
