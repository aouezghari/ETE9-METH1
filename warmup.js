function randomChoice(values) {
    return values[Math.floor(Math.random() * values.length)];
  }

const a = ["foo", "bar"][Math.random() < 0.5 ? 0 : 1]
const b = [1, 2][Math.random() < 0.5 ? 0 : 1]
const c = [["foo"], ["bar"]][Math.random() < 0.5 ? 0 : 1]

