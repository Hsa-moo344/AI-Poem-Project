function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    // strings: "Think befor you speak",
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "638o6ddcb9de82b04tb79fed4f01dd2a";
  let prompt = `User instruction: Generate a French poem about${instructionsInput.value}`;
  let context = "You are the best";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">🙅‍♂️ Generating a French Poem about ${instructionsInput.value}</div>`;

  console.log("general poem....");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
