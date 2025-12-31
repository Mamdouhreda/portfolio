import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const GET_PROJECTS = gql`
  query NewQuery {
    projects {
      nodes {
        content
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        projects {
          category
          client
          date
          section
          subheading
          headImage {
            node {
              sourceUrl
            }
          }
          social {
            title
            url
          }
          social2 {
            title
            url
          }
          social3 {
            title
            url
          }
        }
      }
    }
  }
`;

const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);

  // Fetch data using the useQuery hook
  const { loading, error, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 500); // Adjust timeout as needed
    }
  }, [data]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => (e) => {
    e.preventDefault();
    setFilterKey(key);
  };

  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects</p>;

  const projects = (data?.projects?.nodes ?? []).filter(Boolean);
  const fallbackImageUrl = "assets/img/thumbs/1-1.jpg";

  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Projects"} title={"Creative Projects"} />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className={`${
                        filterKey === "*" ? "current" : ""
                      } text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black`}
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className={`${
                        filterKey === "React" ? "current" : ""
                      } text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black`}
                      onClick={handleFilterKeyChange("React")}
                    >
                      React
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className={`${
                        filterKey === "WebApp" ? "current" : ""
                      } text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black`}
                      onClick={handleFilterKeyChange("WebApp")}
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
              {projects.map((project, index) => {
                const projectMeta = project?.projects || {};
                const rawSection = projectMeta.section || ["Uncategorized"];
                const sectionsArray = Array.isArray(rawSection)
                  ? rawSection
                  : [rawSection];
                const classNames = sectionsArray
                  .map((sec) => sec.replace(/\s+/g, ""))
                  .join(" ");
                const dataCategory = projectMeta.subheading || "";
                const featuredImageUrl =
                  project?.featuredImage?.node?.sourceUrl || fallbackImageUrl;
                const projectTitle = project?.title || "";

                return (
                  <li
                    key={index}
                    className={`${classNames} mb-[40px] float-left w-1/2 pl-[40px] item__`}
                  >
                    <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                      <div
                        className="entry tokyo_tm_portfolio_animation_wrap"
                        data-title={projectTitle}
                        data-category={dataCategory}
                      >
                        <a
                          className="popup_info"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (project) {
                              setPortfolioDetailsModal(project);
                            }
                            modalToggle(true);
                          }}
                        >
                          <img
                            className="opacity-0 min-w-full"
                            src="assets/img/thumbs/1-1.jpg"
                            alt={projectTitle}
                          />
                          <div
                            className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                            data-img-url={featuredImageUrl}
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
