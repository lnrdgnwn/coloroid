import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 text-primary border-t border-[#D1D0D0] bg-[#f4f4ff] pb-24 ">
      <div className="container mx-auto px-18 lg:px-32 flex flex-col lg:flex-row justify-between pt-10 gap-6">
        {/* Logo & Copyright */}
        <div className="flex flex-col w-full max-w-5xl justify-between ">
          <div>
            <img
              src="/images/logo/Coloroid-Logo.png"
              alt="Coloroid Logo"
              className="w-16 h-16"
            />
            <p className="font-bold text-xl">Discover your colors.</p>
          </div>
          <div>
            <p className=" text-md text-inter">
              &copy; 2025 Coloroid. All rights reserved.
            </p>
            <NavLink className="underline" to={"/"}>
              Terms of Service
            </NavLink>{" "}
            |{" "}
            <NavLink className="underline" to={"/"}>
              Privacy Policy
            </NavLink>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row w-full lg:pl-2 justify-between lg:justify-evenly gap-8 ">
          <div className="flex flex-col gap-y-3 text-md">
            <h3 className="font-bold text-xl">Navigation</h3>
            <ul className="flex flex-col gap-y-3">
              <li className="">
                <NavLink to={"/palettes"} className={"hover:underline"}>
                  Explore
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/generate"} className={"hover:underline"}>
                  Generate
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/gradient"} className={"hover:underline"}>
                  Gradient
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/contact"} className={"hover:underline"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col  gap-y-3 text-md text-inter">
            <h3 className="font-bold text-xl">Follow Us</h3>
            <ul className="flex flex-col gap-y-3">
              <li className="">
                <NavLink to={"/"} className={"hover:underline"}>
                  Twitter
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/"} className={"hover:underline"}>
                  Facebook
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/"} className={"hover:underline"}>
                  Instagram
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/"} className={"hover:underline"}>
                  Tiktok
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className={"font-bold text-xl hover:underline"}>
            Try it now →
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
