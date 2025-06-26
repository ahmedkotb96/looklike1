const TrustedCompaniesSection = () => {
  const companies = [
    {
      id: 1,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d86df6d1669fb07580af3364eab1fa6d9d55cf8f",
      alt: "Company Logo 1",
    },
    {
      id: 2,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/baea7bfda10e93b691f64c265f51f4ffde475307",
      alt: "Company Logo 2",
    },
    {
      id: 3,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/866c44c2cc3eabe41d9879151107dc6b86c2ec28",
      alt: "Company Logo 3",
    },
    {
      id: 4,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/de5a4026582bbaac447ac983fb2d4591449bae8b",
      alt: "Company Logo 4",
    },
    {
      id: 5,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0ca9fb518dd93ef3aab97ce4572d4ecd830fb27",
      alt: "Company Logo 5",
    },
    {
      id: 6,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb44e51d638adaec0a996b2882f81ddee492c096",
      alt: "Company Logo 6",
    },
    {
      id: 7,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/593540c2013d9d0961bcd3792ae98d682484ca1b",
      alt: "Company Logo 7",
    },
    {
      id: 8,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6810f2187dd1f3c2ca2a1537578143670cd29153",
      alt: "Company Logo 8",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #1225B9 57.83%, #000 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-12">
            Trusted by most innovative Companies
          </h2>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center p-4 md:p-6 border border-[#A7A7A7] rounded-2xl bg-transparent hover:bg-white/5 transition-all duration-300 aspect-square"
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
