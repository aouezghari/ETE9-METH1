export function parseCommands(stream) {
    const commands = [];
  
    for (let i = 0; i < stream.length; i += 5) {
      const code = stream.slice(i, i + 5);
  
      if (code === "0X123") {
        commands.push("moveForward");
      } else if (code === "OX789") {
        commands.push("moveBackward");
      } else if (code === "OXABC") {
        commands.push("stop");
      }
    }
  
    return commands;
  }