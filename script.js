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

/**
 * Call loadHeader()

This starts the function.

fetch("header.html")

The browser sends a request to get the header.html file (like copy-pasting its contents).

This is asynchronous — it doesn’t block other code from running.

.then(response => response.text())

When the fetch succeeds, it gives you a response object.

.text() reads the contents of header.html as plain text (not JSON or anything else).

.then(data => {...})

When the text is ready, this function runs.

data now holds the actual HTML content from header.html.

document.getElementById("header-placeholder")

Finds the <div> in your HTML with that ID.

Example:

html
Copy code
<div id="header-placeholder"></div>
.innerHTML = data

Puts the HTML content from header.html inside the <div>.

It’s like you manually wrote it there.
 * 
 */