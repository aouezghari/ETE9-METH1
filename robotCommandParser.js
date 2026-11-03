export function parseCommands(stream) {
    const commands = [];
    let i = 0;
  
    while (i < stream.length) {
      const code = stream.slice(i, i + 5);
      i += 5;
  
      let count = 1;
  
      if (stream[i] === "*") {
        i++;
        let digits = "";
  
        while (i < stream.length && /[0-9]/.test(stream[i])) {
          digits += stream[i];
          i++;
        }
  
        count = Number(digits);
      }
  
      let command;
  
      if (code === "0X123") {
        command = "moveForward";
      } else if (code === "OX789") {
        command = "moveBackward";
      } else if (code === "OXABC") {
        command = "stop";
      }
  
      if (command !== undefined) {
        for (let repetition = 0; repetition < count; repetition++) {
          commands.push(command);
        }
      }
    }
  
    return commands;
  }