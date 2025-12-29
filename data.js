const maparts = [
  {
    image: "images/cinnamoroll.jpeg",
    title: "Cinnamoroll",
    artist: "YourName",
    warp: "/warp cinnamoroll",
    size: "2×2",
    newest: true
    category: "Anime"
  }
  // Add more maparts here, follow same format
];

// DOM elements
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const sizeFilter = document.getElementById("sizeFilter");
const artistFilter = document.getElementById("artistFilter");
const warpFilter = document.getElementById("warpFilter");
const sortSelect = document.getElementById("sort");
const resetBtn = document.getElementById("reset");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Render gallery
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
      <img src="${art.image}" alt="${art.title}" loading="lazy">
      <div class="card-content">
        <h3>${art.title}</h3>
        <p><strong>Artist:</strong> ${art.artist}</p>
        <p><strong>Warp:</strong> <code>${art.warp}</code></p>
        <p><strong>Size:</strong> ${art.size}</p>
        <button class="copyWarpBtn">Copy Warp</button>
      </div>
    `;
    // Lightbox
    const img = card.querySelector("img");
    img.addEventListener("click", () => openLightbox(art.image));
    // Copy Warp
    const copyBtn = card.querySelector(".copyWarpBtn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(art.warp)
        .then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy Warp"; }, 1500);
        })
        .catch(() => alert("Failed to copy warp"));
    });
    // New badge
    if (art.newest) {
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = "New!";
      card.appendChild(badge);
    }
    gallery.appendChild(card);
  });
}

// Filters
function filterGallery() {
  const s = searchInput.value.toLowerCase();
  const size = sizeFilter.value;
  const artist = artistFilter.value;
  const warp = warpFilter.value;
  const sort = sortSelect.value;

  let filtered = maparts.filter(a =>
    (a.title.toLowerCase().includes(s) ||
     a.artist.toLowerCase().includes(s) ||
     a.warp.toLowerCase().includes(s)) &&
    (size === "" || a.size === size) &&
    (artist === "" || a.artist === artist) &&
    (warp === "" || a.warp === warp)
  );

  if (sort === "az") filtered.sort((a,b) => a.title.localeCompare(b.title));
  if (sort === "size") filtered.sort((a,b) => a.size.localeCompare(b.size));
  if (sort === "newest") filtered = [...filtered].reverse();

  renderGallery(filtered);
}

// Lightbox
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("show");
}
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

// Reset
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  sizeFilter.value = "";
  artistFilter.value = "";
  warpFilter.value = "";
  sortSelect.value = "";
  renderGallery(maparts);
});

// Event listeners
searchInput.addEventListener("input", filterGallery);
sizeFilter.addEventListener("change", filterGallery);
artistFilter.addEventListener("change", filterGallery);
warpFilter.addEventListener("change", filterGallery);
sortSelect.addEventListener("change", filterGallery);

// Initial load
renderGallery(maparts);
