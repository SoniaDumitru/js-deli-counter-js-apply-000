
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