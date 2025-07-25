/*
You need to install the following package npm install @headlessui/react@latest
*/

import { useState } from 'react';
import { Dialog, Menu} from '@headlessui/react';
import logo from '../../assets/MBlogo.png';


const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const section = e.currentTarget.getAttribute("data-section");

  const message = "Hi! I'd like to learn more about the Mujiib Trading Hub.";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2349049959760"; // Replace with your WhatsApp number

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
};

const navigation = [
  { name: 'Blog', href: '#', dropdown: false },
  { name: 'About Us', href: '#About', dropdown: false },
  {
    name: 'Our Courses',
    dropdown: true,
    dropdownItems: [
      {
        name: 'Basic Class',
        href: '#tier-basic',
      },
      {
        name: 'Advance Class',
        href: '#tier-advanced',
      },
      {
        name: 'Masters Class',
        href: '#tier-masters',
      },
      {
        name: 'One In One Class',
        href: '#tier-one in one',
      },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-neutral-300 p-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center space-x-2 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo className="h-12 w-12 fill-neutral-900" />
          </a>
            <span className="text-xl font-bold text-neutral-900 text-[#C3975A] font-mont">Mujiib Trading Hub</span>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerIcon
              className="h-6 w-6 stroke-neutral-800"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* NAVIGATION ITEMS */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-sm font-semibold leading-6 text-neutral-900">
                    {item.name}
                    <ChevronDownIcon className="ml-2 h-5 w-5 stroke-neutral-700" />
                  </Menu.Button>

                  {/* DROPDOWN ITEMS */}
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white py-4 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {item.dropdownItems.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={`${
                              active && 'bg-slate-200'
                            } block px-4 py-2`}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-neutral-900"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4">
            <a
              href="#"
              onClick={handleWhatsAppClick}
              className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </a>

            <a
              href="#"
              onClick={handleWhatsAppClick}
              className="rounded-md bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo className="h-8 w-auto fill-neutral-900" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 stroke-neutral-800"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* MOBILE NAVIGATION ITEMS */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/30">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900">
                          {item.name}
                        </span>

                        <div className="ml-4 mt-1">
                          {item.dropdownItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-neutral-600 hover:bg-neutral-200"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-200"
                      >
                        {item.name}
                      </a>
                    )}{' '}
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-4 py-6">
                <a
                  href="#"
                  className="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>

                <a
                  href="#"
                  className="rounded-md bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

function Logo(props) {
  return (
     <img
      src={logo} // Or /MBhub.jpg depending on what you rename it to
      alt="MBhub Logo"
      width={200}
      height={200}
      // className="object-contain"
      className="w-32 max-w-none"
      {...props}
    />
  );
}

function HamburgerIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function XMarkIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default Navbar;