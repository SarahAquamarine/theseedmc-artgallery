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
const artistFilter = document.getElementById("artistFilter");

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

function populateArtists() {
  const artists = [...new Set(maparts.map(a => a.artist))];
  artists.forEach(artist => {
    const option = document.createElement("option");
    option.value = artist;
    option.textContent = artist;
    artistFilter.appendChild(option);
  });
}

  renderGallery(filtered);
}
// Event listeners
searchInput.addEventListener("input", filterGallery);
sizeFilter.addEventListener("change", filterGallery);

// Initial load — SHOW EVERYTHING
renderGallery(maparts);
