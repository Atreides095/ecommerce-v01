const fs = require('fs');

const files = [
    'desktop',
    'gaming',
    'laptops',
    'peripherie',
    'smartphones',
    'tvVideo',
    'gamingPc',
];

// for (let file of files) {
//     const data = require(`./old/${file}.json`);
//     const newData = data.map((item) => {
//         item.image_single = item.image_single_big.replace(
//             'https://img.computerunivers.net/images/1000/',
//             '/'
//         );

//         item.image_list = item.image_list_big.map((item) => {
//             return item.replace(
//                 'https://img.computerunivers.net/images/1000/',
//                 '/'
//             );
//         });

//         item.details = item.facets;

//         delete item.image_single_square;
//         delete item.image_list_square;
//         delete item.image_single_big;
//         delete item.image_list_big;
//         delete item.facets;

//         return item;
//     });

//     fs.writeFile(
//         `./data/${file}Clean.json`,
//         JSON.stringify(newData),
//         'utf8',
//         (err) => {
//             if (err) {
//                 console.log(err);
//                 return console.log(err);
//             }

//             console.log('JSON file has been saved');
//         }
//     );
// }

// const data = require('./old/tvVideo.json');

// const dataNew = data.results[0].hits.map((item, i) => {
//     return {
//         name: item.name,
//         image_single: `${item.image_url}`.replace('/images/250x250', ''),
//         image_list: item.image_url_set.map((item) =>
//             `${item}`.replace('/images/250x250', '')
//         ),
//         details: item.facets,
//         manufacturer: item.manufacturer,
//         price: Math.floor(item.price_ag_floored * 1.08),
//         category_single: item.categoryname,
//         category_list: item.categorynames,
//         timestamp_created: item.timestamp_created,
//         bulletpoints: item.bulletpoints,
//         popularity: item.popularity_modified,
//     };
// });

// fs.writeFile('./data/tvVideo.json', JSON.stringify(dataNew), 'utf8', (err) => {
//     if (err) {
//         console.log(err);
//         return console.log(err);
//     }

//     console.log('JSON file has been saved');
// });

// const data = require('./tvVideo.json');

// const newData = data.map((item) => {
//     return {
//         ...item,
//         section: 'TV & Video',
//     };
// });

// fs.writeFile(`./data/tvVideo1.json`, JSON.stringify(newData), 'utf8', (err) => {
//     if (err) {
//         console.log(err);
//         return console.log(err);
//     }

//     console.log('JSON file has been saved');
// });

const desktopData = require('./desktop.json');
const gamingData = require('./gaming.json');
const laptopsData = require('./laptops.json');
const peripherieData = require('./peripherie.json');
const smartphonesData = require('./smartphones.json');
const tvVideoData = require('./tvVideo.json');

const base = [];
const allProducts = base.concat(
    desktopData.slice(0, 30),
    gamingData.slice(0, 30),
    laptopsData.slice(0, 30),
    peripherieData.slice(0, 30),
    smartphonesData.slice(0, 30),
    tvVideoData.slice(0, 30)
);

fs.writeFile(
    './data/fullArray.json',
    JSON.stringify(allProducts),
    'utf8',
    (err) => {
        if (err) {
            console.log(err.message);
            return console.log(err.message);
        }

        console.log('JSON file has been created');
    }
);
