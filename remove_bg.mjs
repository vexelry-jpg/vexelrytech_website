import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function main() {
    const inputPath = 'src/assets/hero_human.png';
    const outputPath = 'src/assets/hero_human_transparent.png';
    console.log("Removing background...");
    
    try {
        const imageBuffer = fs.readFileSync(inputPath);
        const blob = new Blob([imageBuffer], { type: 'image/png' });
        const resultBlob = await removeBackground(blob);
        const buffer = Buffer.from(await resultBlob.arrayBuffer());
        fs.writeFileSync(outputPath, buffer);
        console.log("Background removed successfully!");
    } catch(e) {
        console.error("Error removing background:", e);
    }
}
main();
