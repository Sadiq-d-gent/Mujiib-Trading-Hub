import React from 'react';


const handleWhatsAppClick = (e) => {
  e.preventDefault();
  const section = e.currentTarget.getAttribute("data-section");

  const message = `Hi! I'm interested in the ${section}. I'd like to enroll for the mentorship.`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2349049959760"; // Replace with your WhatsApp number

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
};

const tiers = [
  {
    name: 'Basic Class',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '₦50k', annually: '' },
    features: [
      '1. Beginner-friendly structure',
      '2. Full trading platform setup',
      '3. Clear trade execution guidance',
      '4. Intro to market behavior',
      '5. Risk management fundamentals',
    ],
    cta: 'Buy plan ',
  },
  {
    name: 'Advanced Class',
    id: 'tier-advanced',
    href: '#',
    price: { monthly: '₦50k', annually: '' },
    features: [
      '1. Strategy-based learning',
      '2. Market structure mastery',
      '3. Institutional trading concepts',
      '4. Entry & exit precision',
      '5. Trading psychology essentials',
    ],
    cta: 'Buy plan',
  },
  {
    name: 'Masters Class',
    id: 'tier-masters',
    href: '#',
    price: { monthly: '₦30k', annually: '' },
    features: [
      '1. Deep liquidity theory',
      '2. Advanced risk control',
      '3. Pro-level trade setups',
      '4. High-accuracy entry models',
      '5. Full journaling framework',
    ],
    cta: 'Buy plan',
  },
  {
    name: 'One In One Class',
    id: 'tier-one in one',
    href: '#',
    price: { monthly: '₦70k', annually: '' },
    features: [
      '1. Covers basic to expert levels',
      '2. Complete trading strategy system',
      '3. Smart Money & Liquidity mastery',
      '4. Setup planning + trade management',
      '5. Professional trader routine included',
    ],
    cta: 'Buy plan',
  },
];

const Pricing = () => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col space-y-7 text-center">
        <h3 className="text-lg font-medium uppercase tracking-wide text-neutral-800">
          What You Will Learn
        </h3>

        <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900">
          Our Structured courses Designed to Buid Confident Traders
        </h2>

        <p className="text-lg text-neutral-600">
          Our courses are carefully curated ta walk you through every phase of becoming a skilled trader. From mastering market
          structure and liquidity to understand order blocks, inducements, and fundamentals - each lesson is practical, clear
          and built to grow your confidence step by step. Whether you are starting fresh or Refining your edge, we've got a course tailored to your level.
        </p>
      </div>

      <div className="isolate mx-auto mt-14 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between space-y-10 rounded-xl bg-white p-8 text-center ring-1 ring-neutral-200 shadow-xl"
          >
            <div>
              <h3
                id={tier.id}
                className="text-lg font-semibold leading-8 text-neutral-900"
              >
                {tier.name}
              </h3>

              <div className="mt-2 flex flex-col space-y-4">
                <p className="flex items-baseline justify-center gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-emerald-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-neutral-600">
                    /lifetime
                  </span>
                </p>

                <p className="text-base text-neutral-600">
                 {tier.price.annually}
                </p>
              </div>

              <ul
                role="list"
                className="mt-6 space-y-3 text-sm leading-6 text-neutral-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-neutral-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={tier.href}
              data-section={tier.name}
              onClick={handleWhatsAppClick}
              aria-describedby={tier.id}
              className="rounded-md bg-neutral-800 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default Pricing;