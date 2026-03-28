// const sharp = require("sharp");

// sharp("public/different-shoes-shelves-wardrobe-closet.jpg")
//     .resize(1440 , 600 , {
//         fit: "cover",
//         position: "top",
//     })
//     .webp({ quality: 50, effort: 6 })
//     .toFile("public/wardrobe-closet.webp")
//     .then(() => console.log("✅ Done"))
//     .catch(console.error);


//logos

const sharp = require("sharp");

sharp("public/logo/footerlogo.webp")
    .resize({
        width: 32,
        height: 32,
        fit: "contain", // better for logos
        background: "transparent"
    })
    //   .webp({
    //     quality: 100,
    //     effort: 6
    //   })
    .toFile("src/app/favicon.ico")
    .then(() => console.log("✅ Done"))
    .catch(console.error);
