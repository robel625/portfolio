import { Link } from "react-router-dom";
import { BsGithub, BsDownload } from "react-icons/bs";
import resume from "../../../assets/resume/Resume_OF_Md._Minhaj_Kobir.pdf";

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container">
        <div className="font-preahvihear">
          <h1 className="text-[1.5rem] sm:text-3xl lg:text-5xl">I'm a Web Developer.</h1>
          <h5 className="sm:text-xl group underline mt-2 sm:mt-4 mb-8 sm:mb-10">
            <Link to="https://github.com/minhaj06/" target="_blank">
              Check out my GitHub profile
              <BsGithub
                size={22}
                className="inline-block ml-2 text-primaryLight2 group-hover:text-primaryLight duration-150"
              />
            </Link>
          </h5>

          <p className="text-xs sm:text-lg leading-relaxed">
            Ambitious junior MERN developer with a hunger for learning and a drive to excel.
            Dedicated to delivering exceptional web solutions. Eager to contribute to
            collaborative teams and make a lasting impact in the world of web development.
          </p>

          <div className="mt-6 text-end">
            <a
              href={resume}
              download="Resume_OF_Md._Minhaj_Kobir.pdf"
              target="_blank"
              style={{
                background:
                  "linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)",
                boxShadow: "4px 7px 26px 0px rgba(0, 0, 0, 0.12)",
              }}
              className="inline-flex items-center text-sm sm:text-xl px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:text-gray-300 duration-150"
            >
              Download Resume
              <BsDownload size={24} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
