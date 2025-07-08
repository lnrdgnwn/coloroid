export default function Features() {
  return (
    <section id="features" className="w-full py-16 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* === EXPLORE === */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Explore</h2>
            <img
              src="/images/features/explore.svg"
              alt="Explore Feature"
              className="w-full h-auto object-contain lg:hidden"
            />
            <p className="text-2xl">
              Find color combinations that fit your mood, style, or idea.
            </p>
            <button className="border border-[#b4b4b4] hover:border-black px-6 lg:px-12 py-4  max-w-xs rounded-xl text-black text-base lg:text-lg">
              Find Palettes
            </button>
          </div>
          {/* IMAGE DESKTOP */}
          <div className="w-full lg:w-1/2 hidden lg:block order-1 lg:order-2">
            <img
              src="/images/features/explore.svg"
              alt="Explore Feature"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* === GENERATE === */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Generate</h2>
            <img
              src="/images/features/generate.svg"
              alt="Generate Feature"
              className="w-full h-auto object-contain lg:hidden"
            />
            <p className="text-2xl">
              Quickly create unique color palettes for your inspirations.
            </p>
            <button className="border border-[#b4b4b4] hover:border-black px-6 lg:px-12 py-4  max-w-xs  rounded-xl text-black text-base lg:text-lg">
              Start Generating
            </button>
          </div>
          {/* IMAGE DESKTOP */}
          <div className="w-full lg:w-1/2 hidden lg:block order-1 lg:order-2">
            <img
              src="/images/features/generate.svg"
              alt="Generate Feature"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* === GRADIENT === */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Gradient</h2>
            <img
              src="/images/features/gradient.svg"
              alt="Gradient Feature"
              className="w-full h-auto object-contain lg:hidden"
            />
            <p className="text-2xl">
              Build smooth, eye-catching gradients and grab the CSS in one click.
            </p>
            <button className="border border-[#b4b4b4] hover:border-black px-6 lg:px-12 py-4 rounded-xl max-w-xs text-black text-base lg:text-lg">
              Create Gradient
            </button>
          </div>
          {/* IMAGE DESKTOP */}
          <div className="w-full lg:w-1/2 hidden lg:block order-1 lg:order-2">
            <img
              src="/images/features/gradient.svg"
              alt="Gradient Feature"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
