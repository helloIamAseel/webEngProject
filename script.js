//header
function loadHeader() {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("forHeader").innerHTML = data;

      const links = document.querySelectorAll('.currLink');
      const currentPage = location.pathname.split("/").pop(); // like "homePage.html"

      links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    });
}

document.addEventListener("DOMContentLoaded", loadHeader);

//searching
document.addEventListener("DOMContentLoaded", () => {
  // 1) Your hard-coded recipe list:
  const recipes = [
    { title: "Berry Yogurt Smoothie"},
    { title: "Mint Lemon Drink"},
    { title: "Chickpea Curry"},
    { title: "Backed chicken Tenders"},
    { title: "French Toast"},
    { title: "Cucumber Yogurt Dip"}
  ];

  // 2) If we’re on the search page (has #searchInput), wire up the live‐search:
  const searchInput = document.getElementById("searchInput");
  const resultsDiv  = document.getElementById("results");
  if (searchInput && resultsDiv) {
    function searchRecipes() {
      const q = searchInput.value.toLowerCase(); //what user is typing
      const matches = recipes.filter(r => r.title.toLowerCase().includes(q)); //recipes array
      resultsDiv.innerHTML = ""; //clears search bar

      if (matches.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      } else {
        matches.forEach(r => {
          // instead of a div, make this an <a> that links to recipes.html?title=…
          const link = document.createElement("a");
          link.href = `recipes1.html?title=${encodeURIComponent(r.title)}`;
          link.innerHTML = `<h3>${r.title}</h3>`;
          link.style.display = "block";   // behave like a card
          resultsDiv.appendChild(link);
        });
      }
    }

    // wire it up
    searchInput.addEventListener("input", searchRecipes);
  }

  // 3) If we’re on recipes.html (has #recipeContainer), read the URL and render that one recipe:
  const recipeContainer = document.getElementById("recipeContainer");
  if (recipeContainer) {
    const params = new URLSearchParams(window.location.search);
    const sel    = params.get("title");       // e.g. "Pasta"
    const recipe = recipes.find(r => r.title === sel);
  }
});


  const form = document.getElementById('regForm');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const errorMsg = document.getElementById('errorMessage');

  form.addEventListener('submit', function (e) {
    if (password.value !== confirmPassword.value) {
      e.preventDefault(); // Stop the form from submitting
      errorMsg.textContent = 'Passwords do not match.';
      errorMsg.style.color = 'red';
    } else {
      errorMsg.textContent = 'Account created!';
    }
  });


