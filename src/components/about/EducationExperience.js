const certificatesData = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    instructor: "Dr. Angela Yu",
    date: "",
    description:
      "Completed a comprehensive full-stack program covering both front-end and back-end development. Built real-world applications using HTML5, CSS3, Flexbox, Grid, Bootstrap, and JavaScript (ES6), while also working across the full development lifecycle including application structure, data flow, and deployment-ready workflows.",
  },
  {
    id: 2,
    title: "Learning Go (Golang)",
    provider: "LinkedIn Learning",
    instructor: "",
    date: "",
    description:
      "Currently learning Go fundamentals, including variables, collections, control flow, structs & methods, error handling, and core concurrency concepts.",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white pt-[40px] pb-[93px] px-0">
      <div className="container">
        <div className="certificates w-full h-auto clear-both float-left">
          <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
            <h3 className="text-[20px] font-bold">Certificates</h3>
          </div>
          <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
            <ul className="m-0 list-none relative inline-block pt-[0px] pb-[20px]">
              {certificatesData.map((cert, i) => (
                <li
                  className={`m-0 w-full float-left relative pl-[20px] ${
                    i == certificatesData.length - 1 ? "pb-[20px]" : "pb-[45px]"
                  }`}
                  key={cert.id}
                >
                  <div className="list_inner w-full h-auto clear-both float-left">
                    {cert.date && (
                      <div className="time w-full mb-[10px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>
                    )}
                    <div className="place w-full">
                      <h3 className="text-[16px] mb-[5px] font-semibold">
                        {cert.title}
                      </h3>
                      <div className="text-[14px] mb-[8px]">
                        <span className="font-medium">{cert.provider}</span>
                        {cert.instructor && (
                          <span className="text-[#767676]">
                            {" "}
                            • {cert.instructor}
                          </span>
                        )}
                      </div>
                      <p className="text-[14px] text-[#767676] leading-relaxed mb-[12px]">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
