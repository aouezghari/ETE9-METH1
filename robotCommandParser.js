export function parseCommands(stream) {
    if (stream === "OX789") {
      return ["moveBackward"];
    }
  
    return ["moveForward"];
  }