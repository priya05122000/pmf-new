// const sharp = require("sharp");

// sharp("public/logo/pmf.webp")
//     .resize(200 , 200, {
//         fit: "cover",
//         position: "centre",
//     })
//     .webp({ quality: 10, effort: 6 })
//     .toFile("public/logo/pmf-new.webp")
//     .then(() => console.log("✅ Done"))
//     .catch(console.error);


//logos

const sharp = require("sharp");

sharp("public/logo/Frame-15.png")
  .resize({
    height: 300,
    fit: "contain" // better for logos
  })
  .webp({
    quality: 60,
    effort: 6
  })
  .toFile("public/logo/bigpmg.webp")
  .then(() => console.log("✅ Done"))
  .catch(console.error);
