export function parseCommands(stream) {
    const translations = {
      "0X123": "moveForward",
      "OX789": "moveBackward",
      "OXABC": "stop"
    };
  
    const commands = [];
    const pattern = /(0X123|OX789|OXABC)(?:\*(\d+))?/g;
  
    for (const match of stream.matchAll(pattern)) {
      const code = translations[match[1]];
      const count = Number(match[2] ?? 1);
  
      for (let i = 0; i < count; i++) {
        commands.push({ code });
      }
    }
  
    return commands;
  }