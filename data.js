const maparts = [
  {
    image: "images/cinnamoroll.png",
    title: "Starry Night",
    artist: "Player123",
    warp: "/warp museum",
    size: "2×2"
  },
  {
    image: "images/example2.png",
    title: "Dragon",
    artist: "BuilderX",
    warp: "/warp dragonart",
    size: "4×4"
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const sizeFilter = document.getElementById("sizeFilter");

function renderGallery(list) {
  gallery.innerHTML = "";

  list.forEach(art => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}">
      <div class="card-content">
        <h3>${art.title}</h3>
        <p><strong>Artist:</strong> ${art.artist}</p>
        <p><strong>Warp:</strong> <code>${art.warp}</code></p>
        <p><strong>Size:</strong> ${art.size}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function filterGallery() {
  const searchText = searchInput.value.toLowerCase();
  const sizeValue = sizeFilter.value;

  const filtered = maparts.filter(art => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchText) ||
      art.artist.toLowerCase().includes(searchText) ||
      art.warp.toLowerCase().includes(searchText);

    const matchesSize =
      sizeValue === "" || art.size === sizeValue;

    return matchesSearch && matchesSize;
  });

  renderGallery(filtered);
}
// Event listeners
searchInput.addEventListener("input", filterGallery);
sizeFilter.addEventListener("change", filterGallery);

// Initial load — SHOW EVERYTHING
renderGallery(maparts);
