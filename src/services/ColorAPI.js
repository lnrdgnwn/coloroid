import axios from "axios";

// Buat 1 warna acak
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// Konversi RGB ke HEX
function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

// Ambil nama warna dari TheColorAPI
async function getColorWithName({ r, g, b }) {
  try {
    const response = await axios.get(
      `https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`
    );
    return {
      r,
      g,
      b,
      hex: response.data.hex.value,
      name: response.data.name.value,
    };
  } catch {
    return {
      r,
      g,
      b,
      hex: rgbToHex({ r, g, b }),
      name: "Unknown",
    };
  }
}

// Main Function
export async function fetchColorPalettesWithName() {
  const randomColors = Array.from({ length: 5 }, () => getRandomColor());
  const namedColors = await Promise.all(randomColors.map(getColorWithName));
  return namedColors;
}
