const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[4];
const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;
const backend = document.getElementById('backend');
const cancelAddMovieButton = addMovieModal.querySelector('.btn1');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');

const movies = [];

const toggleBackend = () => {
  backend.classList.toggle("visible");
}

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackend();
}

const backendClickHandler = () => {
  toggleMovieModal();
}

const cancelAddMovie = () => {
  toggleMovieModal();
  clearMovieInputs();
}
 const addMovieHandler = () => {
    const movieTitle  = userInputs[0].value;
    const movieImageUrl = userInputs[1].value; 
    const movieRating =  userInputs[2].value;
    if(movieTitle.trim() === '' || 
    movieImageUrl.trim() === '' ||
    movieRating.trim() === '' ||
    movieRating < 1 || movieRating > 5) {
      alert("Please input valid value");
    }
    const newMovie = {
      title: movieTitle,
      imageUrl: movieImageUrl,
      rating: movieRating
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
 }

    const clearMovieInputs = () => {
      for(const userInput of userInputs){
        userInput.value = "";
      }
    }

startAddMovieButton.addEventListener('click', toggleMovieModal);
backend.addEventListener('click', backendClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler)