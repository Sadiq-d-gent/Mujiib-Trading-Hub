import heroImg from '../../assets/herobg.png';



const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const section = e.currentTarget.getAttribute("data-section");

  const message = "Hi! I'd like to learn more about the Mujiib Mentorship.";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2349049959760"; // Replace with your WhatsApp number

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
};


const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-24 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-40 lg:grid-cols-2">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <span className="text-lg font-medium text-neutral-800">
            Smart Money Concept. Real Fundamentals. No Noise
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 xl:text-5xl">
            Master SMC & Fundamental Trading with Confidence
          </h2>

          <p className="text-lg text-neutral-600">
            Join a proven mentorship program focused on Smart Money Concept and high-impact Fundamental Analysis. learn how institutions move the markets.
          </p>

          <div className="flex space-x-8">
            <a
              href="https://chat.whatsapp.com/HdG5h3cZLj94bGlkPSsivs?mode=ac_t"
              className="rounded-md bg-neutral-900 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 transition"
            >
             Join Whatsapp Group
            </a>

            <a
              href="#"
              onClick={handleWhatsAppClick}
              className="rounded-md bg-gray-100 px-10 py-3 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutra-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-last mx-auto max-w-lg lg:order-first">
          <img
            src={heroImg}
            alt="Image"
            width={1000}
            height={1000}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;