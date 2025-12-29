const maparts = [
  {
    image: "images/replantorbanned.png",
    title: "Replant or Banned",
    artist: "SarahAzureHeart",
    warp: "/warp artgallery",
    size: "1x1",
    dateAdded: "2025-12-29",
    category: "Misc"
  },
  {
    image: "images/theseedmc.png",
    title: "TheSeedMC",
    artist: "SarahAzureHeart",
    warp: "/warp artgallery",
    size: "1x1",
    dateAdded: "2025-12-29",
    category: "Misc"
  }
];

// DOM elements
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const sizeFilter = document.getElementById("sizeFilter");
const artistFilter = document.getElementById("artistFilter");
const warpFilter = document.getElementById("warpFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sort");
const resetBtn = document.getElementById("reset");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const mapartCount = document.getElementById("mapartCount");

// Automatically mark new maparts added in the last 7 days
function markNewMaparts() {
  const today = new Date();
  maparts.forEach(a => {
    if (a.dateAdded) {
      const added = new Date(a.dateAdded);
      const diffDays = (today - added) / (1000 * 60 * 60 * 24);
      a.newest = diffDays <= 7;
    } else {
      a.newest = false;
    }
  });
}

// Populate artist, warp, and category dropdowns dynamically
function populateFilters() {
  const artists = [...new Set(maparts.map(a => a.artist))];
  const warps = [...new Set(maparts.map(a => a.warp))];
  const categories = [...new Set(maparts.map(a => a.category))];

  artists.forEach(a => {
    const option = document.createElement("option");
    option.value = a;
    option.textContent = a;
    artistFilter.appendChild(option);
  });

  warps.forEach(w => {
    const option = document.createElement("option");
    option.value = w;
    option.textContent = w;
    warpFilter.appendChild(option);
  });

  categories.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    categoryFilter.appendChild(option);
  });
}

// Render gallery
function renderGallery(list) {
  gallery.innerHTML = "";
  if (list.length === 0) {
    gallery.innerHTML = "<p>No mapart found.</p>";
  } else {
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
          <p><strong>Category:</strong> ${art.category}</p>
          <button class="copyWarpBtn">Copy Warp</button>
        </div>
      `;
      const img = card.querySelector("img");
      img.addEventListener("click", () => openLightbox(art.image));
      const copyBtn = card.querySelector(".copyWarpBtn");
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(art.warp)
          .then(() => { copyBtn.textContent = "Copied!"; setTimeout(() => { copyBtn.textContent = "Copy Warp"; }, 1500); })
          .catch(() => alert("Failed to copy warp"));
      });
      if (art.newest) {
        const badge = document.createElement("div");
        badge.className = "badge";
        badge.textContent = "New!";
        card.appendChild(badge);
      }
      gallery.appendChild(card);
    });
  }

  // Update mapart counter
  mapartCount.textContent = `Showing ${list.length} of ${maparts.length} maparts`;
}

// Filter gallery
function filterGallery() {
  const s = searchInput.value.toLowerCase();
  const size = sizeFilter.value;
  const artist = artistFilter.value;
  const warp = warpFilter.value;
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  let filtered = maparts.filter(a =>
    (a.title.toLowerCase().includes(s) ||
     a.artist.toLowerCase().includes(s) ||
     a.warp.toLowerCase().includes(s)) &&
    (size === "" || a.size === size) &&
    (artist === "" || a.artist === artist) &&
    (warp === "" || a.warp === warp) &&
    (category === "" || a.category === category)
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
lightbox.addEventListener("click", () => lightbox.classList.remove("show"));

// Reset
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  sizeFilter.value = "";
  artistFilter.value = "";
  warpFilter.value = "";
  categoryFilter.value = "";
  sortSelect.value = "";
  renderGallery(maparts);
});

// Event listeners
searchInput.addEventListener("input", filterGallery);
sizeFilter.addEventListener("change", filterGallery);
artistFilter.addEventListener("change", filterGallery);
warpFilter.addEventListener("change", filterGallery);
categoryFilter.addEventListener("change", filterGallery);
sortSelect.addEventListener("change", filterGallery);

// Initial load
markNewMaparts();
populateFilters();
renderGallery(maparts);
