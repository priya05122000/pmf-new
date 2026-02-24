const sharp = require("sharp");

sharp("public/different-shoes-shelves-wardrobe-closet.jpg")
    .resize(1440 , 600 , {
        fit: "cover",
        position: "top",
    })
    .webp({ quality: 50, effort: 6 })
    .toFile("public/wardrobe-closet.webp")
    .then(() => console.log("✅ Done"))
    .catch(console.error);


//logos

// const sharp = require("sharp");

// sharp("public/logo/Frame-15.png")
//   .resize({
//     height: 300,
//     fit: "contain" // better for logos
//   })
//   .webp({
//     quality: 60,
//     effort: 6
//   })
//   .toFile("public/logo/bigpmg.webp")
//   .then(() => console.log("✅ Done"))
//   .catch(console.error);
