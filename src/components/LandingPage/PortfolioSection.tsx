import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "i Home",
      description:
        "We crafted a modern and clean visual identity for i Home, reflecting the brand's focus on smart living and contemporary design.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00d117815d5d39b541dbfdfb070221ddb56cab96",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/19262947c98dfd5570bca883385edc5103f3b892",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-black">
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
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Check Our
            <br />
            Last Work
          </h2>
          <p className="text-white text-lg">
            Take a look at our latest projects where creativity meets strategy.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevProject}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-20"
          >
            <svg
              className="w-4 h-6 text-[#14142B]"
              fill="currentColor"
              viewBox="0 0 16 25"
            >
              <path d="M14.01 0.5C14.3433 0.833332 14.51 1.24167 14.51 1.725C14.51 2.20833 14.3433 2.61667 14.01 2.95L4.66 12.325L14.01 21.7C14.3433 22.0333 14.51 22.4375 14.51 22.9125C14.51 23.3875 14.3475 23.7917 14.0225 24.125C13.6975 24.4583 13.2933 24.625 12.81 24.625C12.3267 24.625 11.9183 24.4583 11.585 24.125L0.985001 13.525C0.651667 13.1917 0.485001 12.7875 0.485001 12.3125C0.485001 11.8375 0.651667 11.4333 0.985001 11.1L11.585 0.5C11.9183 0.166666 12.3267 0 12.81 0C13.2933 0 13.6933 0.166666 14.01 0.5Z" />
            </svg>
          </Button>

          <Button
            onClick={nextProject}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-20"
          >
            <svg
              className="w-4 h-6 text-[#14142B]"
              fill="currentColor"
              viewBox="0 0 16 25"
            >
              <path d="M0.984985 0.5C1.31832 0.166666 1.72665 0 2.20999 0C2.69332 0 3.10165 0.166666 3.43499 0.5L14.01 11.1C14.36 11.45 14.535 11.8542 14.535 12.3125C14.535 12.7708 14.36 13.175 14.01 13.525L3.43499 24.125C3.10165 24.4583 2.69332 24.625 2.20999 24.625C1.72665 24.625 1.31832 24.4583 0.984985 24.125C0.651652 23.7917 0.484985 23.3875 0.484985 22.9125C0.484985 22.4375 0.651652 22.0333 0.984985 21.7L10.36 12.325L0.984985 2.95C0.651652 2.61667 0.484985 2.20833 0.484985 1.725C0.484985 1.24167 0.651652 0.833332 0.984985 0.5Z" />
            </svg>
          </Button>

          {/* Project Card */}
          <div className="flex justify-center px-8 md:px-24">
            <div className="max-w-5xl w-full">
              <div className="relative h-[400px] md:h-[485px] rounded-[50px] overflow-hidden bg-white/10 backdrop-blur-[30px] border border-white/20">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-full">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover rounded-l-[50px]"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Project Logo */}
                      <div className="mb-8">
                        <svg
                          className="h-16 md:h-20 w-auto"
                          viewBox="0 0 225 77"
                          fill="white"
                        >
                          <path
                            d="M79.7856 30.3735C66.2299 30.3735 56.4484 40.2475 56.4484 53.2119C56.4484 66.1763 66.2299 76.0503 79.7856 76.0503C93.3413 76.0503 103.123 66.0905 103.123 53.2119C103.123 40.3333 93.4281 30.3735 79.7856 30.3735ZM79.7856 62.4841C74.2083 62.4841 70.5197 58.2771 70.5197 53.2119C70.5197 48.1467 74.2094 43.8528 79.7856 43.8528C85.3618 43.8528 89.1382 48.1456 89.1382 53.2119C89.1382 58.2782 85.4486 62.4841 79.7856 62.4841Z"
                            fill="white"
                          />
                          <path
                            d="M158.248 31.4903C152.242 31.4903 148.295 34.1516 145.722 37.3289C143.405 33.8084 139.458 31.4903 133.452 31.4903C128.39 31.4903 124.958 33.3793 122.728 35.869V32.5201H108.742V76.0504H122.728V51.0656C122.728 46.2579 126.331 45.1412 128.562 45.1412C130.793 45.1412 134.311 46.1721 134.311 51.0656V76.0504H148.295V51.0656C148.295 46.2579 151.814 45.1412 154.044 45.1412C156.275 45.1412 159.879 46.1721 159.879 51.0656V76.0504H173.779V47.2876C173.779 38.5303 168.887 31.4893 158.248 31.4893V31.4903Z"
                            fill="white"
                          />
                          <path
                            d="M201.877 30.3735C189.436 30.3735 179.397 40.3333 179.397 53.2119C179.397 66.7781 189.179 76.0503 203.85 76.0503C212.344 76.0503 219.036 72.2723 222.554 66.8639L212.773 61.0253C211.4 62.6568 208.312 64.8033 203.85 64.8033C198.53 64.8033 194.413 62.4852 192.954 57.4189H224.356C226.072 39.1309 214.746 30.3735 201.877 30.3735ZM192.954 49.0049C194.241 44.1971 197.931 41.6206 202.307 41.6206C207.111 41.6206 210.715 43.9386 211.744 49.0049H192.954Z"
                            fill="white"
                          />
                          <path
                            d="M25.9437 30.4156L25.9426 30.4167L22.6677 33.6939L16.1167 40.2494L16.1156 40.2505L14.9552 41.4117V19.5205H1.05756V76.0489H14.9552V61.0793L25.9426 50.0843L25.9437 50.0832L36.93 61.0771V76.0499H50.8298V55.3178L35.7707 40.2494L25.9437 30.4156Z"
                            fill="white"
                          />
                          <path
                            d="M7.018 15.0088C11.6867 15.5693 15.5989 11.6056 15.1582 6.96408C14.8249 3.44029 11.9244 0.629078 8.39441 0.39662C3.77887 0.0935572 0.0165311 4.07249 0.684113 8.75639C1.14762 12.0119 3.75607 14.6178 7.01908 15.0088H7.018Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      {/* Project Description */}
                      <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[33px] font-medium">
                        {projects[currentProject].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
