// A simple launch countdown
for (let i = 10; i >= 0; i--) {
    if (i === 10) {
        console.log("Countdown 10");
    } else if (i === 0) {
        console.log("Blast off!");
    } else {
        console.log(i);
    }
}

// A guest list
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil", // refuse
  "Lola", // refuse
  "Sam",
  "Kay",
  "Bruce",
];

let admit = "";
let refuse = "";

for (const guest of people) {
    if (guest === "Phil" || guest === "Lola") {
        refuse = refuse + guest + ",";
    } else {
        admit = admit + guest + ",";
    }
}

admit = admit.trim().replace(/,$/, ".");
refuse = refuse.trim().replace(/,$/, ".");

console.log(`admit list: ${admit}`); // admit list: Chris,Anne,Colin,Terri,Sam,Kay,Bruce.
console.log(`refuse list: ${refuse}`); // refuse list: Phil,Lola.

