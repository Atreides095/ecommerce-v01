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
