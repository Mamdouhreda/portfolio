import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Develop User Interfaces",
    text: [
      "I have the skills to design and develop visually appealing and user-friendly interfaces for websites and applications. I use my expertise in HTML, CSS, and JavaScript to structure and style frontend components, ensuring an attractive and intuitive user experience."
      ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Implement Responsive Design",
    text: [
      "I excel in implementing responsive design techniques to make websites and applications seamlessly adapt to different devices and screen sizes. I ensure that the interface remains consistent and user-friendly across desktops, tablets, and mobile devices."
       ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Enhance User Interactions",
    text: [
    "With my knowledge of JavaScript frameworks like React, I can create interactive features and dynamic functionality. I specialize in developing forms with smooth validations, implementing smooth page transitions, and handling user events to deliver an engaging and interactive user experience."  
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Optimise Website Performance",
    text: [
     "I am skilled in optimising website performance by writing efficient code, optimizing images, and minifying CSS and JavaScript files. My goal is to enhance loading times and overall site speed, ensuring that users can access and navigate the website smoothly."
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "Collaborate with Backend Developers",
    text: [
    "I work closely with backend developers to seamlessly integrate frontend interfaces with backend systems. I effectively communicate requirements, exchange data through APIs, and ensure the smooth flow of information between the frontend and backend components, resulting in a cohesive and functional web application."  
    ],
    image: "assets/img/news/5.jpg",
  },
  {
    id: 6,
    name: "Cross-Browser Compatibility",
    text: [
      "I ensure that websites I develop are compatible with various web browsers, including Chrome, Firefox, Safari, and Edge, ensuring a consistent experience for all users regardless of their browser preference."
          ],
    image: "assets/img/news/6.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
