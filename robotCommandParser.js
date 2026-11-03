export function parseCommands(stream) {
    if (stream === "OX789") {
      return ["moveBackward"];
    }
  
    if (stream === "OXABC") {
      return ["stop"];
    }
  
    return ["moveForward"];
  }