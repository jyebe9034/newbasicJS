
const rps = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
    const randomItem = rps[Math.floor(Math.random() * arr.length)];
    console.log(`randomItem: ${randomItem}`);
    return randomItem;
}
