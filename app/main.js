function matchPattern(inputLine, pattern) {
  let regex = pattern.replace('\\d', '[0-9]').replace('\\w', '[0-9a-zA-Z]');

  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else if(pattern=="\\d"){
    return /\d/.test(inputLine)
    
  }else if (pattern === "\\w") {
    const regex = new RegExp(pattern);
    return regex.test(inputLine);
  }else if(pattern.startsWith('[') && pattern.endsWith(']')) {
    const ptrn = new RegExp(pattern)
    return ptrn.test(inputLine);
  }
 
  else {
    return new RegExp(regex).test(inputLine);
   }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

 
  console.log("Logs from your program will appear here");


  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
