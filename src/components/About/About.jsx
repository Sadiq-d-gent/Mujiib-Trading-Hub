const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const section = e.currentTarget.getAttribute("data-section");

  const message = "Hi! I'd like to join the Mujiib Mentotship.";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2348132694876"; // Replace with your WhatsApp number

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
};

const About = () => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="flex max-w-4xl flex-col space-y-7">
        <h3 className="text-lg font-medium uppercase tracking-wide text-neutral-800">
          Learn to trade like the institutions.
        </h3>

        <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900">
          Master the Markets with Smart Money Concepts & Fundamental Insight
        </h2>

        <p className="text-lg text-neutral-600">
        Our mentorship program is built around Smart Money Concepts (SMC) — a powerful strategy used by institutional traders to understand market manipulation, liquidity grabs, and true price action. Unlike retail strategies that rely on indicators or guesswork, SMC gives you a clearer picture of what the big players are doing. <br/>

        We teach you how to read structure, spot order blocks, mitigate risk, and align your entries with market intent. Combined with key fundamentals, news events, and macroeconomic factors, our training equips you to make confident, high-probability trades. Whether you're new to trading or looking to level up, this mentorship is designed to turn you into a precise, smart, and consistent trader.
        </p>

        <div className="flex space-x-8">
          <a
            href="#tier-basic"
          
            className="rounded-md bg-neutral-900 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          >
            View Courses
          </a>

          <a
            href="#"
            onClick={handleWhatsAppClick}
            className="rounded-md bg-transparent px-10 py-3 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          >
            Join Mentorship
          </a>
        </div>
      </div>
    </div>
  );
}

export default About