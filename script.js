// To filter by therir continent 
document.addEventListener('DOMContentLoaded', function() {
  const radioButtons = document.querySelectorAll('input[name="continent"]');
  const flashcards = document.querySelectorAll('.flashcard');

  radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
          const selectedContinent = this.value;

          flashcards.forEach(function(flashcard) {
              const flashcardContinent = flashcard.querySelector('img').getAttribute('data-continent');

              if (selectedContinent === 'All' || selectedContinent === flashcardContinent) {
                  flashcard.style.display = 'inline-block';
              } else {
                  flashcard.style.display = 'none';
              }
          });
      });
  });
});

// To display names when clicked
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach(flashcard => {
  const imgElement = flashcard.querySelector('img');
  const countryName = imgElement.getAttribute('data-country');

  // Create a paragraph element to display the country name
  const countryNameParagraph = document.createElement('p');
  countryNameParagraph.textContent = countryName;

  // Initially hide the paragraph element
  countryNameParagraph.style.display = 'none';

  // Add the paragraph element to the flashcard
  flashcard.appendChild(countryNameParagraph);

  flashcard.addEventListener('click', () => {
    // Show the paragraph element below the image
    countryNameParagraph.style.display = 'block';
  });
});
