import Picolors from '../helpers/Picolors';

async function main() {
    let argument = process.argv[2];
    Picolors(process.argv[2])
        .then(colors => console.log(colors))
        .catch(error => {
            console.error(`Can\'t find colors with picture "${argument}"`);
            process.exit(1);
        })
}
main();
