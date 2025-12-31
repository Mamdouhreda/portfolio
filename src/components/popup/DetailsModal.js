import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

const DetailsModal = () => {
  const { portfolioDetailsModal, setPortfolioDetailsModal } =
    useContext(TokyoContext);

  if (!portfolioDetailsModal) {
    return null;
  }
  const project = portfolioDetailsModal;
  const { title, content, headImage, projects } = project;
  const { category, client, date, social, social2, social3 } = projects || {};

  // Aggregate social links
  const socialLinks = [];
  if (social) socialLinks.push(social);
  if (social2) socialLinks.push(social2);
  if (social3) socialLinks.push(social3);

  const mainImageUrl =
    projects?.headImage?.node?.sourceUrl || "assets/img/thumbs/4-2.jpg";
  //format the date
  const formattedDate = date ? date.substring(0, 10) : "";
  console.log(mainImageUrl);

  return (
    <ModalContainer nullValue={setPortfolioDetailsModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url={mainImageUrl}
            style={{
              backgroundImage: `url(${mainImageUrl})`,
            }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{title}</h3>
          <span>{category}</span>
          <div />
        </div>
        <div className="main_details w-full h-auto clear-both flex mb-[90px]">
          <div className="textbox w-[70%] pr-[40px]">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="detailbox w-[30%] pl-[40px]">
            <ul className="list-none">
              {client && (
                <li className="mb-[8px] w-full float-left">
                  <span className="first font-bold block text-black mb-[3px]">
                    Client
                  </span>
                  <span>{client}</span>
                </li>
              )}
              {category && (
                <li className="mb-[8px] w-full float-left">
                  <span className="first font-bold block text-black mb-[3px]">
                    Category
                  </span>
                  <span>
                    <a
                      className="text-[#767676] transition-all duration-300 hover:text-black"
                      href="#"
                    >
                      {category}
                    </a>
                  </span>
                </li>
              )}
              {formattedDate && (
                <li className="mb-[8px] w-full float-left">
                  <span className="first font-bold block text-black mb-[3px]">
                    Date
                  </span>
                  <span>{formattedDate}</span>
                </li>
              )}
              {socialLinks.length > 0 && (
                <li className="w-full float-left">
                  <span className="first font-bold block text-black mb-[3px]">
                    Links
                  </span>
                  <ul className="share list-none relative top-[7px] ">
                    {socialLinks.map((socialItem, index) => (
                      <li className="mr-[10px] inline-block" key={index}>
                        <a
                          className="text-black text-[18px]"
                          href={socialItem.url}
                        >
                          <i className={socialItem.title} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DetailsModal;
