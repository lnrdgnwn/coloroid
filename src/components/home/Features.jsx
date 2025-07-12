import { NavLink } from "react-router";

export default function Features() {
  const features = [
    {
      title: "Discover Palettes",
      subtitle: "Explore",
      description:
        "Find the color combinations that fit your mood, style, or idea.",
      buttonText: "Find Palettes",
      image: "/images/features/Feature-Explore.png",
      link: "/palettes",
      reverse: false,
    },
    {
      title: "Generate Palettes",
      subtitle: "Generate",
      description:
        "Quickly create unique color palettes for your inspirations.",
      buttonText: "Start Generating",
      link: "/generate",
      image: "/images/features/Feature-Generate.png",
      reverse: true,
    },
    {
      title: "Make Gradient",
      subtitle: "Gradient",
      description:
        "Build smooth, eye-catching gradients and grab the CSS in one click.",
      buttonText: "Create Gradient",
      link: "/gradient",
      image: "/images/features/Feature-Gradient.png",
      reverse: false,
    },
  ];

  return (
    <section id="features" className="w-full py-16 px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-20 md:gap-30 lg:gap-36">
        {features.map((feature, index) => {
          const isReversed = feature.reverse;

          return (
            <div
              key={index}
              className={`flex flex-col-reverse sm:flex-row ${
                isReversed ? "sm:flex-row-reverse" : ""
              } items-center gap-5 sm:gap-12`}
            >
              {/* Image */}
              <div
                className={`max-w-full  lg:w-1/2 flex justify-center order-2 sm:order-1`}
              >
                <img
                  src={feature.image}
                  alt={feature.subtitle + " Feature"}
                  className="w-full max-w-md  object-contain"
                />
              </div>

              {/* Text */}
              <div
                className={`w-full lg:w-1/2 px-4 sm:px-4 md:px-12 flex flex-col  lg:text-left gap-2 order-1 :order-2`}
              >
                <p className="uppercase text-slate-400 tracking-wide text-sm md:text-base">
                  {feature.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-2xl text-slate-700 max-w-lg">
                  {feature.description}
                </p>
                <NavLink
                  className={
                    "mt-4 border border-[#b4b4b4] mouse-pointer hover:border-neutral-400 text-center cursor-pointer hover:bg-neutral-100 px-6 lg:px-10 py-3 rounded-xl text-slate-700 text-base md:text-md transition-all duration-300"
                  }
                  to={feature.link}
                >
                  {feature.buttonText}
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
