// Check if the user has a preferred color scheme set
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the initial theme based on user preference or default to light mode
let isDarkMode = prefersDarkMode;

// Function to toggle between dark and light mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  applyTheme();
}

// Apply the current theme
function applyTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Event listener for the toggle button
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', toggleDarkMode);

// Initialize the theme
applyTheme();
