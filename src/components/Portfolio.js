import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/popup/1.jpg",
    title: "URL shortening API landing page",
    text: [
      "I utilised HTML, CSS, JavaScript, and an API to create a responsive web application that offers a URL shortening service. The design of the application adapts to different screen sizes, providing an optimal layout and user experience across various devices. Users can enter any valid URL into the input field and instantly shorten it with a single click.",
      "The application maintains a list of shortened links, which remains accessible even after the browser is refreshed. To enhance usability, I implemented a feature that allows users to easily copy the shortened link to their clipboard with a simple click. Additionally, I integrated error handling functionality to ensure a seamless user experience. If the form is submitted with an empty input field, an error message is displayed, notifying the user to provide a valid URL for shortening."
    ],
    client: "My Project",
    date: "October 22, 2021",
    category: "Detail",
    share: [
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],

  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/popup/2.jpg",
    title: "Job listings with filtering",
    text: [
    "I opted to utilise a local data.json file to retrieve the job listings and dynamically render the content on the website. By leveraging a JavaScript library/framework like React, Vue, or Svelte, I was able to create an interactive user interface that offers a responsive layout, ensuring an optimal viewing experience on various devices. Interactive elements on the page, such as buttons and links, have hover states to provide visual feedback to the users.",
    "To enhance the functionality of the job listings, I implemented a filtering feature that allows users to refine their search based on selected categories. This empowers users to narrow down the listings and find relevant job opportunities more efficiently. Overall, this approach not only provides a seamless user experience but also serves as a great opportunity to practice and showcase proficiency in a JavaScript library/framework."
    ],
    client: "My Project",
    date: "January 21, 2022",
    category: "Detail",
    share: [
    ],
    bigImage: "",
    images: [],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/popup/3.jpg",
    title: "Wallpaper++ Mobile app using HTML5",
    text: [
      "Wallpaper++! With over 1000 wallpapers to browse, this simple app puts a variety of options at your fingertips. It's quick, easy to use, and packed with stunning wallpapers",
      "Please note that it can only change your Home screen background, not the lock screen. If you want to use a wallpaper for your lock screen, you can tap and hold the picture to Save Image. Then, set that picture as the wallpaper for your lock screen. The same procedure applies if you want to use a picture for Picture Password."
      ],
    client: "My Project",
    date: "January 21, 2014",
    category: "Mobile Application HTML5",
    share: [
    ],
    bigImage: "",
    images: [],
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/popup/4.jpg",
    title: "Rock, Paper, Scissors game",
    text: [
      "I had the opportunity to showcase my CSS, JavaScript, and HTML skills by developing an engaging Rock, Paper, Scissors game. This project not only tests players' decision-making abilities but also challenges their knowledge of CSS styling and JavaScript logic. The game allows users to choose between the classic version of Rock, Paper, Scissors or opt for an extra challenge with the inclusion of Rock, Paper, Scissors, Lizard, Spock, inspired by the popular TV show The Big Bang Theory",
      "Players can make their selection by clicking on the corresponding icons, and the game dynamically evaluates the outcome, displaying whether the player wins, loses, or ties against the computer's choice. The project highlights my proficiency in CSS for creating an attractive and intuitive user interface, as well as my JavaScript expertise in implementing the game's logic and interactivity. To explore this project and more, please visit my portfolio."
      ],
    client: "My Project",
    date: "January 21, 2022",
    category: "Detail",
    share: [
    ],
    bigImage: "",
    images: [],
  },
  {
    id: 5,
    thumbnail: "assets/img/portfolio/popup/5.jpg",
    title: "Random Quote Generator",
    text: [
      "In this frontend project, I had the opportunity to create a Random Quote Generator that delivers a dose of motivation through the display of random inspirational quotes. This project allowed me to leverage my frontend skills and delve into the realm of interactive web development using external APIs.",
      "The Random Quote Generator meets the project requirements by providing a button that fetches a new quote from an external API each time it's clicked. The generated quote, along with the author's name, is dynamically displayed on the page. To enhance user engagement, I also implemented a tweet button, enabling users to effortlessly share the quote on Twitter, spreading inspiration with just a click.",
      "Ensuring a seamless user experience, I focused on making the landing page closely resemble the provided design, paying attention to typography, layout, and overall aesthetics. Moreover, I took care to make the component fully responsive, ensuring its correct display across various screen sizes and devices.",
      "For the implementation of this project, I utilized HTML, CSS, and JavaScript. Alternatively, I could have employed a JavaScript library like React or Vue to further enhance the development process and create a more modular and efficient codebase.",
      "I am proud of this project as it showcases my ability to integrate external APIs, handle data retrieval and rendering, and deliver a visually appealing and responsive user interface. To explore this project and others in my portfolio, feel free to visit my website.",
    ],
    client: "My Project",
    date: "June 1, 2023",
    category: "React",
    share: [
    ],
    bigImage: "",
    images: [],
  },
  {
    id: 6,
    thumbnail: "assets/img/portfolio/popup/6.jpg",
    title: "OTP Verification Component",
    text: [
      "In this frontend project, I undertook the development of an OTP Verification component, designed to validate user input and enable them to submit an OTP (One-Time Password) only upon entering the correct code. This project provided an excellent opportunity for me to further enhance my frontend development skills and build interactive web components.",
      "The OTP Verification component satisfies the project requirements by incorporating a user-friendly form where users can enter the OTP. Each digit of the OTP code is represented by an input field within the form. To validate the OTP code entered by the user, the component includes a dedicated button. The input fields are designed to provide immediate visual feedback, turning the border green if the OTP entered is valid, or red if it is invalid.",
      "To facilitate testing and simulate real-world scenarios, I implemented the component to validate the OTP against a hard-coded value stored within the code. This approach allowed me to thoroughly test the functionality and ensure a seamless user experience.",
      "Upon successfully submitting a valid OTP, the user is greeted with a success message, indicating a successful verification. Conversely, if the OTP entered is invalid, the user receives an -Invalid OTP- alert message, providing immediate feedback and guiding them to enter the correct code.",
      "For the implementation of this project, I employed a combination of HTML, CSS, and JavaScript. Additionally, I had the option to utilize a JavaScript library such as React or Vue to optimize the development process and create a more modular and efficient codebase.",
      "I am proud of this project as it demonstrates my ability to build interactive front-end components, handle user input validation, and provide intuitive visual feedback. To view this project and explore more of my work, please visit my portfolio.",
    ],
    client: "My Project",
    date: "Auguest 1, 2022",
    category: "Detail",
    share: [
    ],
    bigImage: "",
    images: [],
  },
  {
    id: 7,
    thumbnail: "assets/img/portfolio/popup/weather_pop.jpg",
    title: "Weather Web App",
    text: [
      "🌤️ Excited to share my weather web app built with React and Tailwind CSS! 🌤️",
      "I've developed a simple and intuitive weather web application using React and styled it with Tailwind CSS. This combination allows for a seamless user experience and beautiful design. The app allows users to search for the weather information of any city worldwide. It retrieves real-time weather data from the OpenWeatherMap API and displays key information such as temperature, weather description, humidity, wind speed, and local time.",
      "🚀 Features:",
      "Search for weather data of any city",
      "Display current temperature and weather details",
      "Provide information on humidity, wind speed, and local time",
      "Responsive design for a seamless experience on any device",
      "I had a great time working on this project, leveraging the power of React and the convenience of Tailwind CSS. I'm excited to see how it can be further developed and improved. I encourage fellow developers to check it out, contribute, and make it even better!",
    ],
    client: "My Project",
    date: "August 1, 2022",
    category: "React",
    share: [
      {
        id: 1,
        iconName: "icon-link-1",
        link: "https://dainty-blini-03751a.netlify.app/",
      },
      {
        id: 2,
        iconName: "icon-github-squared",
        link: "https://github.com/Mamdouhreda/weather",
      },
      
    ],
    bigImage: "",
    images: [],
  }  
  
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Creative Portfolio"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("react")}
                    >
                      React
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("mobile")}
                    >
                      HTML5 App
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("webApp")}
                    >
                      Web App
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
            <li className="react mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Weather Web App"
                    data-category="check out the weather"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[6]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/weather.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            <li className="webApp mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="URL shortening API landing page"
                    data-category="Simplify, Share, and Track"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="webApp mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Job listings with filtering"
                    data-category= "Find Your Perfect Job Smart Custom Filters"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mobile mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Wallpaper++"
                    data-category="wallpapers for your phone HTML5"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="webApp mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Rock, Paper, Scissors game"
                    data-category="Conquer the Classics"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[3]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="react mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Random Quote Generator"
                    data-category="Discover Infinite Wisdom"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[4]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="react mb-[40px] float-left w-1/2 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="OTP Verification Component"
                    data-category="Securely Authenticate"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[5]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
