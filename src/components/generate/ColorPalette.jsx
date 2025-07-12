import { useEffect, useState } from "react";
import { fetchColorPalettesWithName } from "../../services/ColorAPI";
import { Lock, Unlock, Copy, Check } from "lucide-react";
import { HashLoader } from "react-spinners";

function getTextColor(r, g, b) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128 ? "white" : "black";
}

export default function ColorPalette() {
  const [colors, setColors] = useState([]);
  const [locks, setLocks] = useState([false, false, false, false, false]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate New Colors
  const loadColors = async () => {
    const newColors = await fetchColorPalettesWithName();
    if (!newColors) return;

    setColors((prevColors) =>
      newColors.map((color, i) => (locks[i] ? prevColors[i] : color))
    );
  };

  // Color Load
  useEffect(() => {
    const fetchInitialColors = async () => {
      const initialColors = await fetchColorPalettesWithName();
      if (initialColors) setColors(initialColors);
      setIsLoading(false);
    };

    fetchInitialColors();
  }, []);

  // Event listener space button
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        loadColors();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [locks]);

  // Toggle lock warna
  const toggleLock = (index) => {
    setLocks((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const copyHex = async (hex, index) => {
    try {
      await navigator.clipboard.writeText(hex.toUpperCase());
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000);
    } catch {
      alert("Gagal menyalin warna");
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <HashLoader color="black" size={60} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Header Desktop */}
      <div className="hidden md:flex shrink-0 justify-between items-center bg-white/90 px-6 py-3 text-sm text-gray-800">
        <p>Press the spacebar to generate color palettes!</p>
        <button
          onClick={loadColors}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Generate Again
        </button>
      </div>

      {/* Palettes */}
      <div className="flex flex-1 flex-col md:flex-row border-t border-neutral-200">
        {colors.map((color, index) => {
          const textColor = getTextColor(color.r, color.g, color.b);

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center justify-center text-center px-4 relative"
              style={{ backgroundColor: color.hex, color: textColor }}
            >
              <h1 className="text-2xl md:text-3xl font-bold drop-shadow mb-4">
                {color.name}
              </h1>
              <div className="text-base md:text-lg drop-shadow mb-2">
                {color.hex.toUpperCase()}
              </div>

              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => copyHex(color.hex, index)}
                  className="p-2 rounded-full transition hover:bg-black/30"
                  style={{ color: textColor }}
                  title="Copy"
                >
                  {copiedIndex === index ? (
                    <Check size={20} />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>

                <button
                  onClick={() => toggleLock(index)}
                  className="p-2 rounded-full transition hover:bg-black/30"
                  style={{ color: textColor }}
                  title={locks[index] ? "Unlock" : "Lock"}
                >
                  {locks[index] ? <Lock size={20} /> : <Unlock size={20} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Header Mobile */}
      <div className="flex flex-col md:hidden shrink-0 bg-white/90 text-center p-4 text-gray-800 text-sm gap-2">
        <p>Press the spacebar to generate color palettes!</p>
        <button
          onClick={loadColors}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Generate Again
        </button>
      </div>
    </div>
  );
}
