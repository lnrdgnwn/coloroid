import { useState, useRef } from "react";
import { ColorPicker } from "react-color-palette";

// Gradient Presets
const gradientPresets = [
  {
    type: "linear",
    angle: 90,
    stops: [
      { color: "#2A7B9B", alpha: 1, position: 0 },
      { color: "#57C785", alpha: 1, position: 50 },
      { color: "#EDDD53", alpha: 1, position: 100 },
    ],
  },
  {
    type: "linear",
    angle: 90,
    stops: [
      { color: "#020024", alpha: 1, position: 0 },
      { color: "#090979", alpha: 1, position: 35 },
      { color: "#00D4FF", alpha: 1, position: 100 },
    ],
  },
  {
    type: "linear",
    angle: 0,
    stops: [
      { color: "#22C1C3", alpha: 1, position: 0 },
      { color: "#FDBB2D", alpha: 1, position: 100 },
    ],
  },
  {
    type: "radial",
    stops: [
      { color: "#3F5EFB", alpha: 1, position: 0 },
      { color: "#FC466B", alpha: 1, position: 100 },
    ],
  },
  {
    type: "linear",
    angle: 90,
    stops: [
      { color: "#833AB4", alpha: 1, position: 0 },
      { color: "#FD1D1D", alpha: 1, position: 50 },
      { color: "#FCB045", alpha: 1, position: 100 },
    ],
  },
  {
    name: "Cotton Candy",
    type: "radial",
    stops: [
      { color: "#EEAECA", alpha: 1, position: 0 },
      { color: "#94BBE9", alpha: 1, position: 100 },
    ],
  },
];

// Get Gradient
const getGradientCSS = (gradient) => {
  const stopsString = gradient.stops
    .map((stop) => {
      const r = parseInt(stop.color.slice(1, 3), 16);
      const g = parseInt(stop.color.slice(3, 5), 16);
      const b = parseInt(stop.color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${stop.alpha ?? 1}) ${stop.position}%`;
    })
    .join(", ");
  return gradient.type === "linear"
    ? `linear-gradient(${gradient.angle}deg, ${stopsString})`
    : `radial-gradient(circle, ${stopsString})`;
};

export default function GradientGenerator() {
  const circleRef = useRef(null);
  const sliderRef = useRef(null);
  const draggingIndex = useRef(null);

  const [selectedGradient, setSelectedGradient] = useState(gradientPresets[2]);
  const [gradientType, setGradientType] = useState(selectedGradient.type);
  const [angleValue, setAngleValue] = useState(selectedGradient.angle || 0);
  const [stops, setStops] = useState(selectedGradient.stops);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePresetClick = (preset) => {
    const updatedStops = preset.stops.map((s) => ({
      ...s,
      alpha: s.alpha ?? 1,
    }));
    setSelectedGradient(preset);
    setGradientType(preset.type);
    setStops(updatedStops);
    setAngleValue(preset.angle ?? 0);
    setSelectedIndex(0);
  };

  const handlePositionChange = (index, newPosition) => {
    const updated = [...stops];
    updated[index].position = Math.max(
      0,
      Math.min(100, parseInt(newPosition) || 0)
    );
    setStops(updated);
  };

  const getPositionFromPointer = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, Math.round(pos)));
  };

  const onPointerDown = (index, e) => {
    e.preventDefault();
    draggingIndex.current = index;
    setSelectedIndex(index);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = (e) => {
    if (draggingIndex.current === null) return;
    const pos = getPositionFromPointer(e.clientX);
    handlePositionChange(draggingIndex.current, pos);
  };

  const onPointerUp = () => {
    draggingIndex.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  const addStop = (e) => {
    const position = getPositionFromPointer(e.clientX);
    const newStop = { color: "#000000", alpha: 1, position };
    const updated = [...stops, newStop].sort((a, b) => a.position - b.position);
    setStops(updated);
    const newIndex = updated.findIndex((s) => s === newStop);
    setSelectedIndex(newIndex);
  };

  const onPointerAngleMove = (e) => {
    if (gradientType === "radial" || e.pressure === 0) return;
    const rect = circleRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (deg < 0) deg += 360;
    setAngleValue(parseInt(deg));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="h-60 w-full"
        style={{
          background: getGradientCSS({
            type: gradientType,
            angle: angleValue,
            stops,
          }),
        }}
      />

      <div className="max-w-300 mx-auto bg-white lg:rounded-md min-h-80 lg:-mt-12 font-medium">
        <div className="flex flex-col md:flex-row md:items-center gap-x-8 lg:gap-x-12 gap-y-8.5 md:px-6 lg:px-8 py-6">
          <div className="flex-1 relative px-6 sm:px-6 md:px-0">
            <div
              ref={sliderRef}
              onDoubleClick={addStop}
              className="relative h-6 cursor-pointer ring-2 ring-black ring-offset-2 rounded-md"
            >
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: getGradientCSS({
                    type: gradientType,
                    angle: angleValue,
                    stops,
                  }),
                }}
              />
              {stops.map((stop, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                  style={{ left: `calc(${stop.position}% - 6px)` }}
                  onPointerDown={(e) => onPointerDown(index, e)}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div
                    className={`w-4 h-11 rounded-full cursor-move border-2 border-black ${
                      selectedIndex === index
                        ? "ring-4 ring-black/50"
                        : "ring-4 ring-black/25"
                    }`}
                    style={{ background: stop.color }}
                    title={stop.color}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-start gap-x-6 lg:gap-x-12 gap-y-6 px-5 sm:px-6 md:px-0 pt-9 md:pt-0 border-t border-neutral-200 md:border-none">
            <div className="flex gap-x-4 lg:min-w-[260px]">
              <div className="flex flex-1 items-center justify-center rounded-md border border-neutral-200 bg-white overflow-hidden">
                <button
                  className={`w-full h-full border-r border-r-neutral-200 cursor-pointer ${
                    gradientType === "linear"
                      ? "text-[#132B39] bg-[#E3E5E8]"
                      : "text-[#66767F]"
                  }`}
                  onClick={() => setGradientType("linear")}
                >
                  Linear
                </button>
                <button
                  className={`w-full h-full cursor-pointer ${
                    gradientType === "radial"
                      ? "text-[#132B39] bg-[#E3E5E8]"
                      : "text-[#66767F]"
                  }`}
                  onClick={() => {
                    setGradientType("radial");
                    setAngleValue(0);
                  }}
                >
                  Radial
                </button>
              </div>
              <div className="flex gap-x-2">
                <div
                  ref={circleRef}
                  onPointerMove={onPointerAngleMove}
                  className={`relative w-9 h-9 rounded-full border-2 border-black transition ${
                    gradientType === "radial"
                      ? "cursor-not-allowed opacity-25"
                      : "cursor-pointer"
                  }`}
                >
                  <div
                    className="absolute w-2 h-2 bg-black rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translateX(-50%) translateY(-50%) rotate(${angleValue}deg) translateY(-10px)`,
                      transformOrigin: "center center",
                    }}
                  />
                </div>
                <input
                  type="number"
                  step="1"
                  value={angleValue}
                  className={`h-9 border border-neutral-200 rounded-sm px-3 text-base bg-white font-normal text-black outline-none  w-14 ${
                    gradientType === "radial"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onChange={(e) => setAngleValue(parseInt(e.target.value) || 0)}
                  disabled={gradientType === "radial"}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between sm:justify-start gap-2 lg:gap-3">
              {gradientPresets.map((preset, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-md cursor-pointer hover:ring-2 hover:ring-black transition-all"
                  style={{ background: getGradientCSS(preset) }}
                  onClick={() => handlePresetClick(preset)}
                  title={preset.name || `Preset ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 flex flex-col gap-3">
          <span className="text-xs text-neutral-500 uppercase font-black tracking-wider leading-none">
            Picker
          </span>
        </div>
      </div>
    </div>
  );
}
