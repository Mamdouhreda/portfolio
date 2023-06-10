import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Mamdouh's HTML5 applications for BlackBerry were outstanding. His dedication, expertise, and attention to detail resulted in impressive results. I highly recommend him for any HTML5 development projects.",
    authorImage: "https://media.licdn.com/dms/image/C5603AQEsuAzMJ0kkqw/profile-displayphoto-shrink_400_400/0/1516321783436?e=1691625600&v=beta&t=SgMt8d0WMLEWKcp0Xe4oycezfZxw_0Zi0A4yDJ9GSOs",
    authorName: "Kamel Lajili",
    authorDesignation: "BlackBerry developer evangelist",
  },
  {
    id: 2,
    text:"Mamdouh consistently delivered exceptional performance and high-quality work on our collaborative projects. His organization, proactive nature, and honesty made him a valuable team player. ",
    authorImage :"https://media.licdn.com/dms/image/C4D03AQG7nqRa9Cxx1A/profile-displayphoto-shrink_100_100/0/1565183079483?e=1691625600&v=beta&t=1N2TUy6uimoEQts4snbE44sTwY1tm-zBoHzOU1ug24E",
    authorName: "Islam Hassan",
    authorDesignation: "Lead Machine Learning / NLP Engineer",
  },
  {
    id: 3,
    text: "Thanks,I want to work with you again",
    authorImage: "assets/img/testimonials/2.jpg",
    authorName: "Harry, client from Upwork",
    authorDesignation: "Content Manager",
  },
 

];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both bg-white float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;