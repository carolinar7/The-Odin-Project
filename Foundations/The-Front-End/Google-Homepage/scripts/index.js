// Sign in button to the google sign in page
function signIn() {
  location.href = "https://accounts.google.com/signin";
}

// Concatenates the basic query url with the input text and
// navigates there
function search(boolVal) {
  let searchTextArea = document.getElementById("search-textarea");
  let searchButton = document.getElementById("search-button");
  if (boolVal == true)
    searchButton.style.border = ".5px solid #1a73e8";
  if (searchTextArea.value.length != 0) {
    let searchURL = "https://www.google.com/search?q=" + searchTextArea.value;
    location.href = searchURL;
  }
}

// Goes directly to the first returned page without needing to be redirected
function feelingLucky() {
  let searchTextArea = document.getElementById("search-textarea");
  if (searchTextArea.value.length != 0) {
    let searchURL = "https://www.google.com/search?q=" + searchTextArea.value + "&btnI=I";
    location.href = searchURL;
  }
}

// Add shadow to search box if mouse hovers over
function searchBarHover(boolVal) {
  if (boolVal) {
    document.getElementById("search-bar").style.boxShadow = "0px 0px 5px rgb(200, 200, 200)";
  } else {
    if (document.activeElement != document.getElementById("search-textarea"))
      document.getElementById("search-bar").style.boxShadow = "none";
  }
}

// Searches text if user presses enter, and highlights search bar
function searchOnFocus() {
  let searchBar = document.getElementById("search-bar");
  let searchText = document.getElementById("search-textarea");
  
  searchBar.style.boxShadow = "0px 0px 5px rgb(200, 200, 200)";

  // Enter capability
  searchText.onkeypress = function(e) {
    if (!e) {
      e = window.event;
    }
    let keyCode = e.code || e.key;
    if ((keyCode == "Enter") && (searchText.value.length != 0)) {
      search(false);
      return false;
    }
  }
}

// Remove search bar background if off focus
function searchOnBlur() {
  if (document.getElementById("search-textarea").value.length == 0)
      document.getElementById("search-bar").style.boxShadow = "none";
}

// Display x when there is text in search text area
function displayX() {
  let searchTextArea = document.getElementById("search-textarea");
  if ((searchTextArea.value.length == 0)) {
    document.getElementById("x-icon").style.opacity = "0";
  } else {
    document.getElementById("x-icon").style.opacity = "100";
  }
}

// Remove text when x is pressed
function clearText() {
  let searchTextArea = document.getElementById("search-textarea");
  if (searchTextArea.value.length != 0) {
    searchTextArea.value = "";
    displayX();
  }
} 

// Clears the text area whenever the page is closed/redirected
window.addEventListener("pageshow", () => {
  document.getElementById("search-textarea").value = "";
});