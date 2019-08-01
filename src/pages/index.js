import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import * as app_config from "../constants/app";
// import SectionItem from "../components/SectionItem";
import { isMobile } from "react-device-detect";
import ProjectItem from "../components/ProjectItem";
import $ from "jquery";
import "../sass/app.scss";

class HomePage extends Component {

    componentDidMount() {
        const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
            .node;

        // if (themeOptions.hideHomepageGeneral) {
        //     return window.location.pathname = "/projects"
        // }

        if (!isMobile) {
            if ($(".nano").length > 0) {
                $(".nano").nanoScroller();
            }
        }
        document.body.style.backgroundColor = themeOptions.backgroundColorGeneral
            ? themeOptions.backgroundColorOfListingProject
            : app_config.BACKGROUND_COLOR

        setTimeout(function () {
            $(".footer").css({ opacity: "1" });
        }, 300);
        // setTimeout(function () {
        //     $(".home-screen").css({ opacity: "0" });
        // }, 30000);
    }

    componentDidUpdate() {
        $(".project-screen").css({ opacity: "0" });

        setTimeout(function () {
            $(".project-screen").css({ opacity: "1" });
        }, 200);
        this.buildSwiper();
    }

    buildSwiper() {
        this.swiper = new Swiper(".swiper-container-", {
            direction: "vertical",
            initialSlide: 0,
            speed: 1400,
            slidesPerView: 1,
            loop: false,
            mousewheel: {
                invert: true,
                forceToAxis: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false
            }
        });
        window.swiper = this.swiper;
    }

    nextSwiper() {
        if (typeof window.swiper !== "undefined") {
            window.swiper.slideNext();
        }
    }

    render() {
        const projects = this.props.data.allContentfulProject.edges;
        const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
            .node;
        const defaultBackGround = themeOptions.backgroundColorGeneral
            ? themeOptions.backgroundColorOfListingProject
            : app_config.BACKGROUND_COLOR;

        const defineBodyFont = isMobile ? '6.25vw' : '22px';

        const defineBodyStyle = {
            backgroundColor: defaultBackGround,
            fontSize: defineBodyFont,
            fontFamily: 'akzidenz-grotesk',
        }
        // const sections = this.props.data.allContentfulSection.edges.map(
        //     (section, index) => (
        //         <SectionItem
        //             key={index}
        //             index={index}
        //             project={section.node}
        //             nextSwiper={this.nextSwiper}
        //         />
        //     )
        // );

        let data_config = {
            head_text: themeOptions.headerOptionGeneral.headerOptionGeneral
                ? themeOptions.headerOptionGeneral.headerOptionGeneral
                : app_config.SITE_NAME,
            loading_bar_color: themeOptions.loadingBarColorGeneral
                ? themeOptions.loadingBarColorGeneral
                : app_config.LOADING_BAR_COLOR,
            meta_title: themeOptions.metaTitleGeneral
                ? themeOptions.metaTitleGeneral
                : app_config.META_TITLE,
            meta_description: themeOptions.metaDescriptionGeneral
                .metaDescriptionGeneral
                ? themeOptions.metaDescriptionGeneral.metaDescriptionGeneral
                : app_config.META_DESCRIPTION,
            meta_keywords: themeOptions.metaKeywordsGeneral.metaKeywordsGeneral
                ? themeOptions.metaKeywordsGeneral.metaKeywordsGeneral
                : app_config.META_KEYWORD,
            meta_robots: themeOptions.metaRobotsGeneral
                ? themeOptions.metaRobotsGeneral
                : app_config.META_ROBOTS,
            primary_color: themeOptions.primaryColorGeneral
                ? themeOptions.primaryColorGeneral
                : app_config.PRIMARY_COLOR,
            second_color: themeOptions.secondColorGeneral
                ? themeOptions.secondColorGeneral
                : app_config.SECONDARY_COLOR,
            background_color: themeOptions.backgroundColorGeneral
                ? themeOptions.backgroundColorGeneral
                : app_config.BACKGROUND_COLOR,
            footer_color: themeOptions.footerTextColorGeneral
                ? themeOptions.footerTextColorGeneral
                : app_config.FOOTER_COLOR,
            footer_text: themeOptions.footerOptionGeneral.footerOptionGeneral
                ? themeOptions.footerOptionGeneral.footerOptionGeneral
                : app_config.FOOTER_TEXT
        };

        let meta_data = {
            title: data_config.meta_title,
            description: data_config.meta_description,
            keywords: data_config.meta_keywords,
            robots: data_config.meta_robots,
        };

        const style_primary_color = {
            color: data_config.primary_color
        };

        // let hideheader = themeOptions.hideHeaderGeneral ? "hideheader" : "";
        // let hidefooter = themeOptions.hideFooterGeneral ? "hidefooter" : "";

        const style_hover = {
            color: !isMobile ? data_config.primary_color : ""
        };

        const projectlist = projects.map((project, index) => (
            <ProjectItem
                key={index}
                data_config={data_config}
                project={project.node}
            />
        ));
        return (
            <div className="home-screen" style={defineBodyStyle}>
                <div className="project-screen" style={defineBodyStyle}>
                    <Meta {...meta_data} />
                    <div className="project-layout">
                        <div className="project-layout--content">
                            <div className="project-layout--left">
                                <div className="section-content--menu">
                                    <ul className="menu-first">
                                        <li className="active" style={{ height: '20px' }}>
                                            <h1>
                                                <a href="https://lost-art.com" style={style_primary_color}>
                                                    {data_config.head_text}
                                                </a>
                                            </h1>
                                        </li>
                                    </ul>
                                    <ul className="menu-second">
                                        <li className="m-r-10" style={{ height: '18px' }}>
                                            <h1>
                                                <Link
                                                    to="/page/about-us/"
                                                    style={style_primary_color}
                                                >
                                                    information
                                        </Link>
                                            </h1>
                                        </li>
                                        <li className="class-contact" style={{ height: '18px' }}>
                                            <h1>
                                                <Link
                                                    to="/page/contact/"
                                                    style={style_primary_color}
                                                >
                                                    contact
                                        </Link>
                                            </h1>
                                        </li>
                                    </ul>
                                    <ul className="menu-third only_desktop" style={{ paddingTop: '2px' }}>
                                        <li>
                                            <Link
                                                to="/page/bio-in-japanese/"
                                                style={style_primary_color}
                                            >
                                                日本語
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="project-layout--right">
                                <div className="main-content">{projectlist}</div>

                                <Footer
                                    data_config={data_config}
                                    japan={true}
                                    color={data_config.footer_color}
                                />
                            </div>
                        </div>
                    </div>

                    <style>
                        {`
              .section-content--menu > ul > li > a:hover{color: ${
                            style_hover.color
                            } !important}
               
              .footer a:hover {color: ${data_config.primary_color} !important}
              .footer a {color: ${data_config.second_color}}
              .project-layout--right {color: ${data_config.primary_color}}
              .project-list a:hover ~ .desc a{color: ${
                            style_primary_color.color
                            } !important}
              .project-list .desc a:hover{color: ${
                            data_config.primary_color
                            } !important}
              `}
                    </style>
                </div>
            </div>
        );
    }
}

export default HomePage;

export const query = graphql`
  query {
    allContentfulSection {
      edges {
        node {
          id
          title
          slug
          model
          imageScale
          embedVimeo
          medias {
            title
            description
            file {
              url
            }
            fluid {
              sizes
              aspectRatio
            }
          }
        }
      }
    }

    allContentfulGeneralOptions {
      edges {
        node {
          metaTitleGeneral
          metaDescriptionGeneral {
            metaDescriptionGeneral
          }
          metaRobotsGeneral
          metaKeywordsGeneral {
            metaKeywordsGeneral
          }
          metaTitleOfListingProject
          backgroundColorGeneral
          primaryColorGeneral
          secondColorGeneral
          loadingBarColorGeneral
          headerOptionGeneral {
            headerOptionGeneral
          }
          footerOptionGeneral {
            footerOptionGeneral
          }
          footerTextColorOfHome
          footerTextColorGeneral
          hideHomepageGeneral
          hideHeaderGeneral
          hideFooterGeneral
          metaTitleOfListingProject
          metaDescriptionOfListingProject {
            metaDescriptionOfListingProject
          }
          backgroundColorOfListingProject
          headerTextColorOfHome
          colorHoverForUrlOnHomePage
          urlColorOfFooter
        }
      }
    }

    allContentfulProject(skip: 0, limit: 10, sort: { fields: order }) {
        edges {
            node {
                id
                title
                slug
                order
                description {
                    description
                }
                image {
                    title
                    description
                    file {
                        contentType
                        url
                    }
                }
            }
        }
    }

    allContentfulGeneralOptions {
        edges {
            node {
                metaTitleGeneral
                metaDescriptionGeneral {
                    metaDescriptionGeneral
                }
                metaRobotsGeneral
                metaKeywordsGeneral {
                    metaKeywordsGeneral
                }
                metaTitleOfListingProject
                backgroundColorGeneral
                primaryColorGeneral
                secondColorGeneral
                loadingBarColorGeneral
                hideHeaderGeneral
                headerOptionGeneral {
                    headerOptionGeneral
                }
                footerOptionGeneral {
                    footerOptionGeneral
                }
                footerTextColorOfHome
                footerTextColorGeneral
                hideHomepageGeneral
                hideHeaderGeneral
                hideFooterGeneral
                metaTitleOfListingProject
                metaDescriptionOfListingProject {
                    metaDescriptionOfListingProject
                }
                backgroundColorOfListingProject
                headerTextColorOfHome
                colorHoverForUrlOnHomePage
                urlColorOfFooter
            }
        }
    }
  }
`;
