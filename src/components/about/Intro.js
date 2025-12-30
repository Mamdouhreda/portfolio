import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/2.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Mamdouh Elsheshtawy</h3>
        <span>Web Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          I’m Mamdouh Elsheshtawy, a London-based Full-Stack Engineer with a
          strong passion for crafting clean, user-focused digital experiences.
          My journey began in front-end development, where I built responsive,
          modern interfaces, and has since evolved into full-stack engineering—
          allowing me to design, build, and scale complete web applications from
          the ground up.
        </p>
        <p className="mb-[11px]">
          Over the years, I’ve gained hands-on experience working across the
          entire stack, combining intuitive user interfaces with robust,
          high-performance back-end systems. I work both as a freelancer and
          within collaborative teams, helping businesses and individuals
          transform ideas into reliable, production-ready digital products.
        </p>
        <p className="mb-[11px]">
          I specialise in building performant, maintainable applications using
          modern technologies. On the front end, I focus on clean architecture,
          accessibility, and seamless user experiences. On the back end, I work
          extensively with Go, designing efficient services and APIs,
          containerising applications with Docker, and deploying and scaling
          them using Kubernetes. This allows me to deliver solutions that are
          not only visually engaging, but also resilient, scalable, and ready
          for real-world traffic.
        </p>
        <p>
          I’ve worked with clients across diverse industries, delivering
          projects that solve real problems and create measurable impact.
          Whether it’s launching a new product, improving performance, or
          architecting a scalable system, I take pride in building solutions
          that meet high technical standards and exceed expectations.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>34</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:tokyo@gmail.com"
                  >
                    Mamdohreda@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Location:
                </span>
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>University of Alexandria</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>Bachelor</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Playing Basketball</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/1.jpg" download>
          <span>Download CV</span>
        </a>
      </div> */}
    </Fragment>
  );
};
export default Intro;
