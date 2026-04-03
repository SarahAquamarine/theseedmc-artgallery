// ==========================
// HELPERS
function formatTitle(name) {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function createMapart({
  name,
  artist,
  warp,
  size = "1x1",
  date,
  categories = [],
  transparent = true
}) {
  return {
    image: `images/${name}.png`,
    title: formatTitle(name),
    artist,
    warp,
    size,
    dateAdded: date,
    categories,
    transparent
  };
}

// ==========================
// ===== PACKS ==============

// ===== Sarah =====
const sarahPack = [
  ["replant-or-banned", ["Server","Utility"], false],
  ["theseedmc", ["Server","Utility"], false],
];

// ===== Eden =====
const edenPack = [
  ["edens-cat", ["Animals","Aesthetic"], false, "1x2"],
  ["nezuko", ["Demon Slayer","Anime","Characters"], false, "2x3"],
  ["tanjiro", ["Demon Slayer","Anime","Characters"], false, "2x2"],
  ["mew", ["Pokemon","Characters"], false, "2x2"],
  ["zelda", ["Legend of Zelda","Characters"], true, "2x2"],
  ["the-straw-hat-pirates", ["One Piece","Anime","Characters"], false, "3x4"],

  ["aerith", ["Final Fantasy","Characters"], false, "2x3"],
  ["ashe", ["Final Fantasy","Characters"], false, "2x2"],
  ["buggy", ["One Piece","Anime","Characters"], false, "2x2"],
  ["chibi-ffvii", ["Final Fantasy","Characters","Chibi"], true, "1x2"],
  ["cloud-and-tifa", ["Final Fantasy","Characters"], false, "2x2"],
  ["costa-del-tifa", ["Final Fantasy","Aesthetic"], false, "2x3"],
  ["her-perspective", ["Aesthetic","Scenery"], false],
  ["his-perspective", ["Aesthetic","Scenery"], false],
  ["lightning", ["Final Fantasy","Characters"], false, "2x3"],
  ["nami", ["One Piece","Anime","Characters"], false, "2x3"],
  ["save-game", ["Gaming","Aesthetic"], true],
  ["tidus-and-yuna", ["Final Fantasy","Characters"], false, "2x3"],
  ["zerotwo", ["Anime","Characters"], false, "2x3"],
];

// ===== Gothic =====
const gothicPack = [
  ["cyber-spine", ["Horror","Abstract","Sci-Fi"]],
  ["running-blood", ["Horror","Abstract"]],
  ["scp-096", ["Horror","SCP","Characters"], true, "1x2"],
  ["clown", ["Horror","Characters"], false],
  ["dead-cowboy", ["Horror","Characters"], false],
  ["trench", ["Horror","Aesthetic"], false],
  ["lantern", ["Decor","Objects","Aesthetic"], true, "2x1"],

  ["brick-block", ["Gaming","Mario","Objects"], false],
  ["question-block", ["Gaming","Mario","Objects"], false],
  ["question-block-2", ["Gaming","Mario","Objects"], false],
  ["pipe", ["Gaming","Mario","Objects"], false],
  ["pipe-2", ["Gaming","Mario","Objects"], false],

  ["empty-block", ["Objects","Utility"], false],
  ["empty-block-2", ["Objects","Utility"], false],

  ["disco-ball", ["Aesthetic","Objects"], false],

  ["angel", ["Fantasy","Aesthetic"]],
  ["back-in-stock", ["Text","Utility"]],
  ["beheaded-statue", ["Horror","Statue"]],
  ["better-call-saul", ["TV","Meme"]],
  ["blood-splatter", ["Horror","Abstract"]],
  ["breaking-bad", ["TV"]],
  ["bubbles", ["Aesthetic"]],
  ["candycane", ["Seasonal","Aesthetic"]],
  ["clearance-sell", ["Text","Utility"]],
  ["coming-soon", ["Text"]],

  ["colorful-christmas-lights", ["Seasonal","Decor"]],
  ["crazy", ["Text","Meme"]],
  ["curved-vine", ["Nature","Decor"]],
  ["cutting-board", ["Objects"]],
  ["emoji-1", ["Emoji","Aesthetic"]],
  ["employees-only", ["Text","Utility"]],
  ["furnace-fire", ["Aesthetic"]],
  ["garland", ["Seasonal","Decor"]],
  ["green-leaf-litter", ["Nature"]],
  ["green-leaf-litter-2", ["Nature"]],
  ["green-leaf-litter-3", ["Nature"]],
  ["green-leaf-litter-4", ["Nature"]],
  ["green-ornament", ["Seasonal","Aesthetic"]],

  ["half-life", ["Gaming"]],
  ["happy-new-year", ["Seasonal","Text"]],
  ["how-do-i-turn-this-thing-off", ["Meme","Text"]],
  ["inspirational-quote", ["Text"]],
  ["i-was-crazy-once", ["Meme"]],

  ["mario-coin", ["Gaming","Mario","Objects"]],
  ["mario-flower", ["Gaming","Mario","Objects"]],
  ["mario-mushroom", ["Gaming","Mario","Objects"]],

  ["merry-christmas", ["Seasonal","Text"]],
  ["moon", ["Aesthetic"]],
  ["moss", ["Nature"]],
  ["mouse", ["Animals"]],
  ["mouse-hole", ["Objects","Aesthetic"]],
  ["new", ["Text"]],

  ["pink-ornament", ["Seasonal","Aesthetic"]],
  ["primogem", ["Gaming"]],
  ["purple-ornament", ["Seasonal","Aesthetic"]],
  ["rainbow-ornament", ["Seasonal","Aesthetic"]],
  ["red-ornament", ["Seasonal","Aesthetic"]],
  ["retro-floor", ["Aesthetic","Decor"]],
  ["sale", ["Text","Utility"]],
  ["see-no-evil", ["Aesthetic"]],
  ["silver-ornament", ["Seasonal","Aesthetic"]],
  ["snowfall", ["Seasonal","Aesthetic"]],
  ["snowflake", ["Seasonal","Aesthetic"]],

  ["spider", ["Horror","Animals"]],
  ["spider-string", ["Horror","Decor"]],
  ["stardew-valley", ["Gaming"]],
  ["straight-vine", ["Nature","Decor"]],
  ["strawberry", ["Food","Aesthetic"]],
  ["strawberry-bundle", ["Food","Aesthetic"]],
  ["strawberry-bundle-2", ["Food","Aesthetic"]],

  ["super-mario-sunshine", ["Gaming","Mario"]],
  ["switch", ["Gaming"]],
  ["temporarily-sold-out", ["Text","Utility"]],
  ["the-boiled-one", ["Horror"]],
  ["the-fallen-angel", ["Fantasy","Horror"]],
  ["the-office", ["TV"]],
  ["under-construction-tape", ["Utility"]],
  ["yellow-ornament", ["Seasonal","Aesthetic"]],

  ["bring-me-the-horizon", ["Music","Aesthetic"]],

  ["black-all-are-welcome-here", ["Text","Utility"]],
  ["black-commissions-closed", ["Text","Utility"]],
  ["black-commissions-open", ["Text","Utility"]],
  ["black-drink-some-water", ["Text"]],
  ["black-mapart-coming-soon", ["Text"]],
  ["black-mapart-coming-soon-heart", ["Text"]],
  ["black-not-taking-orders", ["Text","Utility"]],
  ["black-not-taking-requests", ["Text","Utility"]],
  ["black-taking-orders", ["Text","Utility"]],
  ["black-taking-requests", ["Text","Utility"]],

  ["white-all-are-welcome-here", ["Text","Utility"]],
  ["white-commissions-closed", ["Text","Utility"]],
  ["white-commissions-open", ["Text","Utility"]],
  ["white-drink-some-water", ["Text"]],
  ["white-mapart-coming-soon", ["Text"]],
  ["white-mapart-coming-soon-heart", ["Text"]],
  ["white-not-taking-orders", ["Text","Utility"]],
  ["white-not-taking-requests", ["Text","Utility"]],
  ["white-taking-orders", ["Text","Utility"]],
  ["white-taking-requests", ["Text","Utility"]],

  ["blue-ornament", ["Seasonal","Aesthetic"]],
  ["bongcheon-dong-ghost", ["Horror"]],
  ["christmas-lights", ["Seasonal","Decor"]],
];

// ===== Wats =====
const watsPack = [
  ["blaze", ["Minecraft","Mobs"]],
  ["bunny", ["Animals","Cute"]],
  ["cave-spider", ["Minecraft","Mobs"]],
  ["cow", ["Animals","Minecraft"]],
  ["creeper", ["Minecraft","Mobs"]],
  ["donkey", ["Animals","Minecraft"]],
  ["drowned", ["Minecraft","Mobs"]],
  ["for-you", ["Cute","Aesthetic"]],
  ["frog-v1", ["Animals","Minecraft"]],
  ["frog-v2", ["Animals","Minecraft"]],
  ["frog-v3", ["Animals","Minecraft"]],
  ["ghost-v1", ["Cute","Ghost"]],
  ["ghost-v2", ["Cute","Ghost"]],
  ["hoglin", ["Minecraft","Mobs"]],
  ["horse", ["Animals","Minecraft"]],
  ["lemergency", ["Meme"]],
  ["magmacube", ["Minecraft","Mobs"]],
  ["monsieur-slime", ["Minecraft","Meme"]],
  ["mushkin", ["Cute"]],
  ["mushlon", ["Food","Cute"]],
  ["mushroom-cow", ["Minecraft","Animals"]],
  ["piglin", ["Minecraft","Mobs"]],
  ["sheep", ["Animals","Minecraft"]],
  ["skeleton", ["Minecraft","Mobs"]],
  ["slaughter-to-prevail", ["Music"]],
  ["slime", ["Minecraft","Mobs"]],
  ["spider", ["Minecraft","Mobs"]],
  ["strider", ["Minecraft","Mobs"]],
  ["walnut-chocolate-chip-cookie", ["Food"]],
  ["warp-lemon-shop", ["Text","Utility"]],
  ["witch", ["Minecraft","Mobs"]],
  ["zombie", ["Minecraft","Mobs"]],
  ["zombpig", ["Minecraft","Mobs"]],
];

// ==========================
// BUILD

const maparts = [

  ...sarahPack.map(([name, categories, transparent]) =>
    createMapart({
      name,
      artist: "SarahAzureHeart",
      warp: "/warp artgallery",
      size: "1x1",
      date: "2025-12-29",
      categories,
      transparent
    })
  ),

  ...edenPack.map(([name, categories, transparent, size = "1x1"]) =>
    createMapart({
      name,
      artist: "Bipolarbearx56",
      warp: "/warp mapart by eden",
      size,
      date: "2025-12-29",
      categories,
      transparent
    })
  ),

  ...gothicPack.map(([name, categories, transparent = true, size = "1x1"]) =>
    createMapart({
      name,
      artist: "BringTheHorizon",
      warp: "/warp gothic mapart",
      size,
      date: "2026-03-24",
      categories,
      transparent
    })
  ),

  ...watsPack.map(([name, categories]) =>
    createMapart({
      name,
      artist: "watstom1811",
      warp: "/warp wats art",
      size: "1x1",
      date: "2026-04-03",
      categories,
      transparent: true
    })
  )

];
