// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById('setup'),
  punchlinDiv = document.getElementById('punchline'),
  punchlineBtn = document.getElementById('punchlineBtn'),
  newJokeBtn = document.getElementById('newJokeBtn');

let punchline = '';

newJokeBtn.addEventListener('click', getJoke);
punchlineBtn.addEventListener('click', getPunchline);

async function getJoke() {
  const getJokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );
  const joke = await getJokePromise.json();

  if (getJokePromise.ok) {
    setupDiv.innerHTML = joke[0].setup;
    //store the data to a global variable to be used in another function
    punchline = joke[0].punchline;

    punchlinDiv.innerHTML = '';
    punchlinDiv.classList.remove('bubble');

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
  } else {
    console.error(`Error: ${getJokePromise.status}`);
  }
}

function getPunchline() {
  punchlinDiv.innerHTML = punchline;

  punchlinDiv.classList.add('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}
