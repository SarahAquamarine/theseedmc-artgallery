/* =========================
   MAPART DATA
   ========================= */

const maparts = [
  {
    image: "images/cinnamoroll.png",
    title: "Starry Night",
    artist: "Player123",
    warp: "/warp museum",
    size: "2×2"
  },
  {
    image: "images/cinnamoroll.png",
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
      </div>
    `;

    const img = card.querySelector("img");
    img.addEventListener("click", () => openLightbox(art.image));

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

    const matchesSize =
      sizeValue === "" || art.size === sizeValue;

    const matchesArtist =
      artistValue === "" || art.artist === artistValue;

    const matchesWarp =
      warpValue === "" || art.warp === warpValue;

    return matchesSearch && matchesSize && matchesArtist && matchesWarp;
  });

  // Sorting
  if (sortValue === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortValue === "size") {
    filtered.sort((a, b) => a.size.localeCompare(b.size));
  }

  if (sortValue === "newest") {
    filtered = [...filtered].reverse();
  }

  renderGallery(filtered);
}

/* =========================
   POPULATE DROPDOWNS
   ========================= */

function populateArtists() {
  const artists = [...new Set(maparts.map(a => a.artist))];
  artists.forEach(artist => {
    const option = document.createElement("option");
    option.value = artist;
    option.textContent = artist;
    artistFilter.appendChild(option);
  });
}

function populateWarps() {
  const warps = [...new Set(maparts.map(a => a.warp))];
  warps.forEach(warp => {
    const option = document.createElement("option");
    option.value = warp;
    option.textContent = warp;
    warpFilter.appendChild(option);
  });
}

/* =========================
   LIGHTBOX
   ========================= */

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* =========================
   RESET BUTTON
   ========================= */

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  sizeFilter.value = "";
  artistFilter.value = "";
  warpFilter.value = "";
  sortSelect.value = "";
  renderGallery(maparts);
});

/* =========================
   EVENT LISTENERS
   ========================= */

searchInput.addEventListener("input", filterGallery);
sizeFilter.addEventListener("change", filterGallery);
artistFilter.addEventListener("change", filterGallery);
warpFilter.addEventListener("change", filterGallery);
sortSelect.addEventListener("change", filterGallery);

/* =========================
   INITIAL LOAD
   ========================= */

populateArtists();
populateWarps();
renderGallery(maparts);
