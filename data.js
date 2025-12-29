/* =========================
   MAPART DATA
   ========================= */
const maparts = [
  {
    image: "images/cinnamoroll.jpeg",
    title: "Starry Night",
    artist: "Player123",
    warp: "/warp museum",
    size: "2×2"
  },
  {
    image: "images/cinnamoroll.jpeg",
    title: "Dragon",
    artist: "BuilderX",
    warp: "/warp dragonart",
    size: "4×4"
  }
];

/* =========================
   DOM ELEMENTS
   ========================= */
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const sizeFilter = document.getElementById("sizeFilter");
const artistFilter = document.getElementById("artistFilter");
const warpFilter = document.getElementById("warpFilter");
const sortSelect = document.getElementById("sort");
const resetBtn = document.getElementById("reset");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

/* =========================
   RENDER GALLERY
   ========================= */
function renderGallery(list) {
  gallery.innerHTML = "";

  if (list.length === 0) {
    gallery.innerHTML = "<p>No mapart found.</p>";
    return;
  }

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
        <button class="copyWarpBtn">Copy Warp</button>
      </div>
    `;

    // Lightbox click
    const img = card.querySelector("img");
    img.addEventListener("click", () => openLightbox(art.image));

    // Copy Warp button
    const copyBtn = card.querySelector(".copyWarpBtn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(art.warp)
        .then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => {
            copyBtn.textContent = "Copy Warp";
          }, 1500);
        })
        .catch(err => {
          alert("Failed to copy warp");
          console.error(err);
        });
    });

    gallery.appendChild(card);
  });
}

/* =========================
   FILTER + SORT LOGIC
   ========================= */
function filterGallery() {
  const searchText = searchInput.value.toLowerCase();
  const sizeValue = sizeFilter.value;
  const artistValue = artistFilter.value;
  const warpValue = warpFilter.value;
  const sortValue = sortSelect.value;

  let filtered = maparts.filter(art => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchText) ||
      art.artist.toLowerCase().includes(searchText) ||
      art.warp.toLowerCase().includes(searchText);

    const matchesSize = sizeValue === "" || art.size === sizeValue;
    const matchesArtist = artistValue
