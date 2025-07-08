import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className=" text-primary border-t border-[#D1D0D0] bg-[#f4f4ff] pb-24 ">
      <div className="container mx-auto px-2 lg:px-32 flex flex-col lg:flex-row justify-between pt-10 gap-6">
        {/* Logo & Copyright */}
        <div className="flex flex-col justify-between ">
            <div>
                <img
                src="/images/logo/Coloroid-Logo.png"
                alt="Coloroid Logo"
                className="w-1/4 h-auto"
                />
                <p>Discover your colors.</p>
            </div>
            <div>
                <p className=" text-md text-inter">&copy; 2025 Coloroid. All rights reserved.s</p>
                <NavLink className="underline" to ={'/'}>Terms of Service</NavLink> | <NavLink className="underline" to ={'/'}>Privacy Policy</NavLink>
            </div>
        </div>

        {/* Navigation */}
        <div className="flex w-full pl-2 justify-between lg:justify-evenly">
          <div className="flex flex-col gap-y-5 text-md">
            <h3 className="font-bold text-xl">Navigation</h3>
            <ul className="flex flex-col gap-y-3">
               <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Explore
                    </NavLink>
                </li>
              <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Generate
                    </NavLink>
                </li>
               <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Gradient
                    </NavLink>
                </li>
                <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Contact
                    </NavLink>
                </li>
            </ul>
          </div>
    
          {/* Social Media Links */}
          <div className="flex flex-col gap-y-5 text-md text-inter">
            <h3 className="font-bold text-xl">Follow Us</h3>
            <ul className="flex flex-col gap-y-3">
               <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Twitter
                    </NavLink>
                </li>
               <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Facebook
                    </NavLink>
                </li>
               <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Instagram
                    </NavLink>
                </li>
                <li className="" >
                    <NavLink to={'/'} className={'hover:underline'}>
                        Tiktok
                    </NavLink>
                </li>
            </ul>
          </div>
         <NavLink to={'/'} className={'font-bold text-xl hover:underline'}>
            Try it now →
           </NavLink>
        </div>
      </div>
    </footer>
  );
}


