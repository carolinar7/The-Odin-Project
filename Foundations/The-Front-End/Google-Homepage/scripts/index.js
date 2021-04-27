function signIn() {
  location.href = "https://accounts.google.com/signin";
}

function search() {
  let searchContent = document.getElementById("search-textarea").value;
  let searchURL = "https://www.google.com/search?q=" + searchContent;
  location.href = searchURL;
}

window.addEventListener("pageshow", () => {
  document.getElementById("search-textarea").value = "";
});