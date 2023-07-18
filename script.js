const btn = document.getElementById('btn');
const jokes = document.getElementById('jokes');
const jokeContainer = document.getElementById('joke-container');
const spinner = document.getElementById('spinner');
const apiKey = '9onPcqYloKMmV2FoYYQlpnvvk4iJ2rMcqSg7MFmZ';
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const getJoke = async () => {
  try {
    jokeContainer.style.display = 'block';
    jokes.innerText = 'Updating...';
    spinner.style.display = 'inline-flex';
    btn.disabled = true;
    btn.innerText = 'Loading...';
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btn.disabled = false;
    btn.innerText = 'Tell me a joke';
    jokes.innerText = data[0].joke;
    spinner.style.display = 'none';

  } catch (error) {
    btn.disabled = false;
    btn.innerText = 'Tell me a joke';
    jokes.innerText = 'An error occurred, try again later';
    spinner.style.display = 'none';
  }
};

btn.addEventListener('click', getJoke);