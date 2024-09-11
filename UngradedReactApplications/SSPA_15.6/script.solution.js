document.addEventListener("DOMContentLoaded", async () => {
  async function loadContent() {
    const page = location.hash.replace("#", "");
    if (page) {
      try {
        const response = await fetch(`${page}.html`);
        const data = await response.text();
        document.getElementById("content").innerHTML = data;
      } catch (error) {
        console.error("Failed to load page: ", error);
      }
    }
  }

  window.addEventListener("hashchange", loadContent);

  loadContent();
});
