const searchInput = document.querySelector("#callSearch");

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();

    document.querySelectorAll(".callcard").forEach((card) => {
      const matches = card.innerText.toLowerCase().includes(query);
      card.style.display = matches ? "block" : "none";
    });
  });
}
