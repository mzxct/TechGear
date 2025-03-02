document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();
        document.querySelectorAll(".product").forEach(product => {
            product.style.display = product.querySelector("h3").innerText.toLowerCase().includes(query) ? "" : "none";
        });
    });
});
