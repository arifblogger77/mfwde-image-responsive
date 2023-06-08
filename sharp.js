const sharp = require('sharp');
const fs = require('fs')
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach(image => {
        // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
        sharp(`${target}/${image}`)
            .resize(800)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
            ));

        // mengubah ukuran gambar dengan lebar 400px, dengan prefix -small.jpg
        sharp(`${target}/${image}`)
                .resize(400)
                .toFile(path.resolve(
                    __dirname,
                    `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
                ));
    })