export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center px-12 lg:flex-row xl:gap-x-10 lg:py-10 w-full">
      {/* IMAGE SECTION */}
      <div className="w-full lg:w-1/2 xl:w-fit flex justify-center">
        <img
          src="images/Color-Pallete-Animation.png"
          alt="Color Palette"
          className="w-[80%] max-w-md lg:w-full"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col text-center lg:text-left w-full lg:w-3/4 xl:w-1/2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl gap-y-5">
        <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl xl:leading-[70px]">
          Play with color, whatever your style.
        </h1>
        <p className="text-xl xl:text-2xl">
          Explore palettes, design gradients, and be inspired by thousands of color combinations.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 md:gap-x-4 justify-center lg:justify-start">
          <button className="bg-[#0075de] hover:bg-[#005BAB] px-6 lg:px-12 py-4 rounded-xl text-white text-base lg:text-lg">
            Generate Now!
          </button>
          <button className="border border-[#b4b4b4] hover:border-black px-6 lg:px-12 py-4 rounded-xl text-black text-base lg:text-lg">
            Discover Palettes
          </button>
        </div>
      </div>
    </section>
  );
}
