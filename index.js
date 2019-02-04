
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    let firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
  return ("Currently serving " + firstPerson + ".")
} else {
  return ( "There is nobody waiting to be served!")
}
}
let line = [];
function currentLine(katzDeliLine) {
  for (let i=0; i<katzDeliLine.length; i++) {
      line.push(" " + [i+1] + ". " + katzDeliLine[i]);
    }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }else {
    return "The line is currently:" + line;
}
}