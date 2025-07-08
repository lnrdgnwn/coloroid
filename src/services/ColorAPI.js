import axios from "axios";

// ColorMind API
async function getRandomRGBColors() {
  const response = await axios.post(
    "http://colormind.io/api/",
    JSON.stringify({ model: "default" }),
    {
      headers: { "Content-Type": "text/plain" },
    }
  );
  console.log(response.data.result);
  return response.data.result;
}

// RGB to Hex Convert Function
function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

// TheColorAPI
async function getNamedColors(rgbColors) {
  return await Promise.all(
    rgbColors.map(async ([r, g, b]) => {
      const hex = rgbToHex(r, g, b);
      try {
        const response = await axios.get(
          `https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`
        );
        const name = response.data.name.value;
        return { r, g, b, hex, name };
      } catch {
        return { r, g, b, hex, name: "Unknown" };
      }
    })
  );
}

// Main Function
export async function fetchColorPalettesWithName() {
  try {
    const rgbColors = await getRandomRGBColors();
    const namedColors = await getNamedColors(rgbColors);
    return namedColors;
  } catch (error) {
    console.error("Gagal mengambil palet warna:", error);
  }
}
