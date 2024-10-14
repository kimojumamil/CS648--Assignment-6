for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Marco! Polo!");
      document.write("Marco! Polo!<br>");
    } else if (i % 3 === 0) {
      console.log("Marco!");
      document.write("Marco!<br>");
    } else if (i % 5 === 0) {
      console.log("Polo!");
      document.write("Polo!<br>");
    } else {
      console.log(i);
      document.write(i + "<br>");
    }
  }
  