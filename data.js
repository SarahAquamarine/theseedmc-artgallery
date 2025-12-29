const maparts = [
  {
    image: "images/cinnamoroll.jpeg",
    title: "Cinnamoroll",
    artist: "YourName",
    warp: "/warp cinnamoroll",
    size: "2×2",
    newest: true,
    category: "Anime"
  },
  {
    image: "images/pikachu.jpeg",
    title: "Pikachu",
    artist: "PlayerX",
    warp: "/warp pikachu",
    size: "2×2",
    newest: false,
    category: "Pokemon"
  },
  {
    image: "images/starrynight.jpeg",
    title: "Starry Night",
    artist: "BuilderY",
    warp: "/warp museum",
    size: "3×3",
    newest: false,
    category: "Related"
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
    return;
  }
  list.forEach(art => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${art.image}" alt="${art.title}" loading="lazy">
      <div class="card-content">
