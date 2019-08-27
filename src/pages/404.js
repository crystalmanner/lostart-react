import React from "react";
//import React, { Children } from "react";
import { Link } from "gatsby";
import { isMobile } from 'react-device-detect'
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import GoBack from "../components/GoBack";
import renderHTML from "react-render-html";
import $ from "jquery";
import * as app_config from "../constants/app";

class NotFound extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {
        //   location: ""
        // }
    }

    componentDidMount() {
        let iScrollPos = 0;
        const el = document.getElementsByClassName("project-layout")[0];

        window.scrollTo(0, 0);

        $(window).scroll(function () {
            let iCurScrollPos = $(this).scrollTop();

            if (iCurScrollPos > iScrollPos || iCurScrollPos === 0) {
                //Scrolling Down
                el.classList.remove("nav_fixed");
            } else {
                //Scrolling Up
                el.classList.add("nav_fixed");
                $(".project-layout--left").css({
                    opacity: "1",
                    background: app_config.BACKGROUND_COLOR
                });
            }
            iScrollPos = iCurScrollPos;
        });

        $(".footer").css({ opacity: "1" });
        //setTimeout(function(){ $('.footer').css({ "opacity": "1"}); }, 300);
        document.body.style.backgroundColor = '#fff'

        // this.setState({
        //   location: window.location.pathname
        // })
    }

    render() {
        console.log(this.props)
        // const page = this.props.data.contentfulPageContent;
        // const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
        //     .node;

        let data_config = {
            head_text: app_config.SITE_NAME,
            loading_bar_color: app_config.LOADING_BAR_COLOR,
            meta_title: app_config.META_TITLE,
            meta_description: app_config.META_DESCRIPTION,
            meta_keywords: app_config.META_KEYWORD,
            meta_robots: app_config.META_ROBOTS,
            primary_color: app_config.PRIMARY_COLOR,
            second_color: app_config.SECONDARY_COLOR,
            background_color: app_config.BACKGROUND_COLOR,
            footer_color: app_config.FOOTER_COLOR,
            footer_text: app_config.FOOTER_TEXT
        };

        const defineBodyFont = isMobile ? '6.25vw' : '22px';

        const defineBodyStyle = {
            fontSize: defineBodyFont,
            fontFamily: 'akzidenz-grotesk',
        }
        let path_name = "";
        if (typeof window !== `undefined`) {
            path_name = window.location.href;
        }
        let meta_data = {
            title: data_config.meta_title,
            description: data_config.meta_description,
            keywords: data_config.meta_keywords,
            robots: data_config.meta_robots,
            location: path_name,
        };

        const style_primary_color = {
            color: data_config.primary_color
        };

        const style_second_color = {
            color: data_config.second_color
        };

        return (
            <div className="page-screen" style={defineBodyStyle}>
                <Meta {...meta_data} />
                <div className="project-layout display-table">
                    <div className="project-layout--content">
                        <div className="project-layout--left">
                            <div className="section-content--menu">
                                <ul className="menu-first">
                                    <li className="active">
                                        <h1>
                                            <a href="https://lost-art.com" style={style_primary_color}>
                                                {data_config.head_text}
                                            </a>
                                        </h1>
                                    </li>
                                </ul>
                                <ul className="menu-second-1">
                                    <li>
                                        <GoBack style={style_primary_color} />
                                    </li>
                                </ul>
                                {
                                    !isMobile &&
                                    <>
                                        <ul className="menu-second">
                                            <li className="active">
                                                <Link to="/page/about-us/">
                                                    information
                        </Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/page/contact/">
                                                    contact
                        </Link>
                                            </li>
                                        </ul>
                                        <ul className="menu-third only_desktop">
                                            <li className="active">
                                                <Link to="/page/bio-in-japanese/">
                                                    日本語
                        </Link>
                                            </li>
                                        </ul>
                                    </>
                                }
                            </div>
                        </div>

                        <div className="project-layout--right">
                            <div className="content-notfound">

                                <div className="title">error 404</div>

                                <div className="content">
                                    <p className="m-b-5">oops, something went wrong</p>
                                    <p className="m-b-0">
                                        <a href="http://lost-art.com/" title="lost art">click here</a> to go to <span>lost-art.com</span>
                                    </p>
                                </div>
                            </div>

                            <Footer
                                japan="jpan"
                                color={
                                    data_config.footer_color
                                }
                                data_config={data_config}
                            />
                        </div>
                    </div>
                </div>
                {/* <GoBack className="only_desktop" style={style_second_color} /> */}
                {isMobile ?
                    (
                        <style>
                            {`
                    .footer a , .project-layout--right a {color: ${style_second_color.color}}
                    .project-layout--right {color: ${style_primary_color.color}}
                    `}
                        </style>
                    ) :
                    (
                        <style>
                            {`
                  .section-content--menu > ul > li > a:hover {color: ${
                                style_primary_color.color
                                } !important}
                  a.go-back:hover, .footer a:hover, .project-layout--right a:hover {color: ${
                                style_primary_color.color
                                } !important}
                  .footer a , .project-layout--right a {color: ${
                                style_second_color.color
                                }}
                  .project-layout--right {color: ${style_primary_color.color}}
                  `}
                        </style>
                    )
                }
            </div>
        );
    }
}

export default NotFound;
