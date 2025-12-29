const maparts = [
  {
    image: "images/cinnamoroll pfp.png",
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

maparts.forEach(art => {
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
