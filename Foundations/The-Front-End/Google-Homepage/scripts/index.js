// Sign in button to the google sign in page
function signIn() {
  location.href = "https://accounts.google.com/signin";
}

// Concatenates the basic query url with the input text and
// navigates there
function search() {
  let searchContent = document.getElementById("search-textarea").value;
  if (searchContent.length != 0) {
    let searchURL = "https://www.google.com/search?q=" + searchContent;
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
      search();
      return false;
    }
  }
}

// Clears the text area whenever the page is closed/redirected
window.addEventListener("pageshow", () => {
  document.getElementById("search-textarea").value = "";
});