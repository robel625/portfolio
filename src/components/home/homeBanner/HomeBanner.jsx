import bannerImg from "../../../assets/img/homeBanner.png";
import indicatorArrow from "../../../assets/icons/indicatorArrow.png";

const HomeBanner = () => {
  return (
    <>
      <section id="/" className="pt-24 py-12">
        <div className="container font-preahvihear pt-10 sm:pt-0">
          <div className="flex gap-8 md:gap-0 flex-col md:flex-row items-center">
            <div
              className="w-72 lg:w-[23rem] h-80 lg:h-[26rem] shrink-0 relative flex justify-center items-center"
              style={{
                background:
                  "radial-gradient(50% 50.00% at 50% 50.00%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
              }}
            >
              <img
                className="rounded-full w-52 h-52 lg:w-60 lg:h-60"
                style={{
                  //   background:
                  //     "radial-gradient(at 50% 50%, #FFF 0.01%, rgba(67, 67, 67, 0.00) 100%)",
                  background:
                    "radial-gradient(at 50% 58%, rgb(255, 255, 255) 0.01%, rgba(67, 67, 67, 0) 70%)",
                }}
                src={bannerImg}
                alt="Banner Image"
              />
              <p className="capitalize absolute -mt-10 sm:mt-0 sm:-right-1/2 top-0">
                Hello! I am <span className="text-primaryLight2">Md. Minhaj Kobir</span>
                <span
                  className="absolute w-24 h-24 left-1/4 sm:-left-24 -top-5"
                  style={{ backgroundImage: `url(${indicatorArrow})` }}
                ></span>
              </p>
            </div>
            <div className="md:-ml-7 lg:-ml-10 text-center md:text-start">
              <h5 className="text-lg sm:text-xl underline mb-4 md:mb-2">
                A Web Developer who
              </h5>
              <h1 className="text-[1.5rem] sm:text-4xl lg:text-5xl leading-loose sm:leading-loose lg:leading-loose">
                Transforming Ideas into
                <br />
                <span className="border-2 border-primaryLight2 rounded-[50%] px-6 whitespace-nowrap">
                  Digital Reality
                </span>
                ...
              </h1>
              <p className="text-sm sm:text-base mt-8 md:mt-6">
                Elevating Businesses through Web Innovation, Designing the Future, One Line at
                a Time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
