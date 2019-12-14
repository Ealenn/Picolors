import * as Vibrant from 'node-vibrant'

async function Picolors(path) {
    let swatches = await Vibrant
        .from(path)
        .getSwatches();
    return {
        color: swatches.Vibrant.getHex(),
        textColor: swatches.Vibrant.getTitleTextColor()
    };
};

module.exports = Picolors;