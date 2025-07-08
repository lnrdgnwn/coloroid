import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Plus, X } from "lucide-react";

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState("linear");
  const [angle, setAngle] = useState(180);
  const [stops, setStops] = useState([
    { color: "#22C1C3", position: 0 },
    { color: "#FDBB2D", position: 100 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Preview Area */}
      <div
        className="h-60 w-full"
        style={{
          background: "radial-gradient(circle, #EEAECA 0%, #94BBE9 100%)",
        }}
      ></div>

      {/* Control Box */}
      <div className="max-w-300 mx-auto bg-blue-500 border-y lg:border border-neutral-200 lg:rounded-md min-h-80 lg:-mt-12 font-medium">
        {/* Sliders */}
        <div className="flex flex-col md:flex-row md:items-center gap-x-8 lg:gap-x-12 gap-y-8.5 md:px-6 lg:px-8 py-6">
          <div className="flex-1 relative px-6 sm:px-6 md:px-0">
            <div className="relative h-6 cursor-copy ring-2 ring-black ring-offset-2 rounded-md touch-none"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-start gap-x-6 lg:gap-x-12 gap-y-6 px-5 sm:px-6 md:px-0 pt-9 md:pt-0 border-t border-neutral-200 md:border-none">
            <div className="flex gap-x-4 lg:min-w-[260px]">
              <div className="flex-1"></div>
              <div className="flex gap-x-2">
                <div className="relative w-9 h-9 rounded-full border-2 border-black cursor-pointer">
                  <div className="absolute w-2 h-2 bg-black rounded-full -translate-x-1 -translate-y-1"></div>
                  <input
                    type="number"
                    className="h-9 border border-neutral-200 rounded-sm px-3 text-base bg-white font-normal text-black outline-none transition-[border,ring] disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed focus-visible:ring focus-visible:ring-black focus-visible:border-black w-14"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between sm:justify-start gap-2 lg:gap-3">
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, #2A7B9B 0%, #57C785 50%, #EDDD53 100%)",
                }}
              ></div>
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, #020024 0%, #090979 35%, #00D4FF 100%)",
                }}
              ></div>
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background: "linear-gradient(0deg, #22C1C3 0%, #FDBB2D 100%)",
                }}
              ></div>
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background:
                    "radial-gradient(circle, #3F5EFB 0%, #FC466B 100%",
                }}
              ></div>
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)",
                }}
              ></div>
              <div
                className="w-10 h-10 bg-neutral-100 rounded-md cursor-pointer hover:ring-2 hover:ring-black hover:inset-ring-2 hover:inset-ring-white transition-all"
                style={{
                  background:
                    "radial-gradient(circle, #EEAECA 0%, #94BBE9 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
