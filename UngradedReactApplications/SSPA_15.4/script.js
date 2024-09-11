document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("homeBtn").addEventListener("click", () => {
    document.getElementById("content").innerHTML =
      "<h2>Home</h2><p>Welcome to our cloud kitchen. Enjoy our gourmet meals delivered right to your doorstep!</p>";
  });

  document.getElementById("productsBtn").addEventListener("click", () => {
    fetch("products.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("content").innerHTML = data));
  });

  document.getElementById("testimonialsBtn").addEventListener("click", () => {
    fetch("testimonials.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("content").innerHTML = data));
    // Todo: Fetch the contents of the `testimonials.html` file, parse the text using `response.text()` function and set the innerHTML of the div with id `content` to the parsed data.
  });
});
