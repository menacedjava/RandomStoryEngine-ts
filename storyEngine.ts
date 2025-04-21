const characters = ["a mysterious wizard", "a cyberpunk cat", "a rogue knight", "an alien merchant"];
const locations = ["in a glowing forest", "inside a haunted spaceship", "beneath the desert ruins", "on top of a floating island"];
const actions = ["offers you a strange deal", "vanishes into smoke", "attacks suddenly", "asks you a riddle"];

function getRandomItem(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory(input: string): string {
    const character = getRandomItem(characters);
    const location = getRandomItem(locations);
    const action = getRandomItem(actions);
    
    return `You decide to "${input}". Suddenly, ${character} appears ${location} and ${action}.`;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("userInput") as HTMLInputElement;
    const btn = document.getElementById("generateBtn") as HTMLButtonElement;
    const output = document.getElementById("story") as HTMLParagraphElement;

    btn.addEventListener("click", () => {
        const story = generateStory(input.value);
        output.innerText = story;
    });
});
