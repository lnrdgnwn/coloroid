import { useEffect, useState } from "react";
import { fetchColorPalettesWithName } from "../../services/ColorAPI";
import { Check } from "lucide-react";
import { HashLoader } from "react-spinners";

export default function ExplorePalettes() {
  const [palettes, setPalettes] = useState([]);
  const [copied, setCopied] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchInitialPalettes();
  }, []);

  async function fetchInitialPalettes() {
    setLoading(true);
    const newPalettes = await fetchMultiplePalettes(30);
    setPalettes(newPalettes);
    setLoading(false);
  }

  async function fetchMultiplePalettes(count) {
    const promises = Array.from({ length: count }, () =>
      fetchColorPalettesWithName()
    );
    const results = await Promise.all(promises);
    return results.filter((res) => res);
  }

  async function loadMorePalettes() {
    setLoadingMore(true);
    const more = await fetchMultiplePalettes(30);
    setPalettes((prev) => [...prev, ...more]);
    setLoadingMore(false);
  }

  const copyToClipboard = (hex, i, j) => {
    const key = `${i}-${j}`;
    navigator.clipboard.writeText(hex.toUpperCase());
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2 py-20">
        <h1 className="text-6xl font-bold text-center">
          Discover Color Palettes
        </h1>
        <p className="text-xl text-center text-slate-400">
          Get inspired and find the color combinations that fit your mood,
          style, or idea.
        </p>
      </div>

      {loading ? (
        <div className="py-10">
          <HashLoader color="black" size={64} />
        </div>
      ) : (
        <>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {palettes.map((palette, i) => (
                <div
                  key={i}
                  className="flex rounded-lg overflow-hidden shadow border"
                >
                  {palette.map((color, j) => {
                    const key = `${i}-${j}`;
                    const isCopied = copied === key;

                    return (
                      <div
                        key={j}
                        className="flex-1 h-24 group relative cursor-pointer transition-all duration-200 hover:flex-[2]"
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyToClipboard(color.hex, i, j)}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          {color.hex}
                        </span>

                        {isCopied && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white transition-all animate-fade-in">
                            <Check size={24} className="text-white" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={loadMorePalettes}
            disabled={loadingMore}
            className="mt-10 px-6 py-2 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </>
      )}
    </div>
  );
}
