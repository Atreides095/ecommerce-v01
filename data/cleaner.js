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

for (let file of files) {
    const data = require(`./${file}.json`);
    const newData = data.map((item) => {
        item.image_single = item.image_single_big.replace(
            'https://img.computerunivers.net/images/1000/',
            '/'
        );

        item.image_list = item.image_list_big.map((item) => {
            return item.replace(
                'https://img.computerunivers.net/images/1000/',
                '/'
            );
        });

        item.details = item.facets;

        delete item.image_single_square;
        delete item.image_list_square;
        delete item.image_single_big;
        delete item.image_list_big;
        delete item.facets;
        delete item.category_single;

        return item;
    });

    fs.writeFile(
        `./data/${file}Clean.json`,
        JSON.stringify(newData),
        'utf8',
        (err) => {
            if (err) {
                console.log(err);
                return console.log(err);
            }

            console.log('JSON file has been saved');
        }
    );
}
