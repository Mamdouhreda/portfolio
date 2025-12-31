import SectionContainer from "./SectionContainer";

const socialIcon = [
  {
    id: 1,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/MamdouhEl/",
  },
  {
    id: 2,
    iconName: "icon-github-squared",
    link: "https://github.com/Mamdouhreda",
  },
  {
    id: 3,
    iconName: "icon-youtube-squared",
    link: "https://youtube.com/channel/UCJJ1ZFTNxk2F12hj6UvydQA",
  },
  {
    id: 4,
    iconName: "x-icon",
    link: "https://x.com/mamelsheshtawy",
  },
];

const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/1.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Mamdouh <span>Elsheshtawy</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                Full-stack engineer working with Go, Next.js, and JavaScript,
                focused on scalability, clean UI engineering, and maintainable
                system architecture.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black inline-flex items-center justify-center"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.iconName === "x-icon" ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        ) : (
                          <i className={item.iconName} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;
