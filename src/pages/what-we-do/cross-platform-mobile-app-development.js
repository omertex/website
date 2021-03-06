import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import SectionForm from "../../components/sectionForm/sectionForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import page from "../../assets/styles/page.module.sass"
import style from "./cross-platform-mobile-app-development.module.sass"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export default () => {
  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "cpmad/cpmad-bg.jpg" }) {
        ...sharpImage
      }
      cost_saving: file(
        relativePath: { eq: "cpmad/png_icon_cost_saving.png" }
      ) {
        ...sharpImage
      }
      faster_delivery: file(
        relativePath: { eq: "cpmad/png_icon_faster_delivery.png" }
      ) {
        ...sharpImage
      }
      truly_native_ui: file(
        relativePath: { eq: "cpmad/png_icon_truly_native_ui.png" }
      ) {
        ...sharpImage
      }
      live_app_updates: file(
        relativePath: { eq: "cpmad/png_icon_live_app_updates.png" }
      ) {
        ...sharpImage
      }
      app_support: file(
        relativePath: { eq: "cpmad/png_icon_app_support.png" }
      ) {
        ...sharpImage
      }
      xamarin: file(relativePath: { eq: "cpmad/png_icon_xamarin.png" }) {
        ...sharpImage
      }
      react: file(relativePath: { eq: "cpmad/png_icon_react.png" }) {
        ...sharpImage
      }
      delphi_fmx: file(relativePath: { eq: "cpmad/png_icon_delphi_fmx.png" }) {
        ...sharpImage
      }
      phonegap: file(relativePath: { eq: "cpmad/png_icon_phonegap.png" }) {
        ...sharpImage
      }
      angular: file(relativePath: { eq: "cpmad/png_icon_angular.png" }) {
        ...sharpImage
      }
      google_lighthouse: file(
        relativePath: { eq: "cpmad/png_icon_google_lighthouse.png" }
      ) {
        ...sharpImage
      }
      ionic: file(relativePath: { eq: "cpmad/png_icon_ionic.png" }) {
        ...sharpImage
      }
      cordova: file(relativePath: { eq: "cpmad/png_icon_cordova.png" }) {
        ...sharpImage
      }
      react_color: file(
        relativePath: { eq: "cpmad/png_icon_react_color.png" }
      ) {
        ...sharpImage
      }
      xamarin_color: file(
        relativePath: { eq: "cpmad/png_icon_xamarin_color.png" }
      ) {
        ...sharpImage
      }
      flutter_color: file(
        relativePath: { eq: "cpmad/png_icon_flutter_color.png" }
      ) {
        ...sharpImage
      }
      form_bg: file(relativePath: { eq: "cpmad/form_bg.png" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Cross-platform mobile app development"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Cross-platform mobile app development"
        description="What is a cross-platform app? A cross-platform mobile application is the one that can run on both
        Android and iOS mobile phones. Cross-platform apps fall into the category of hybrid mobile apps and web-based
        or mobile web apps."
      />
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <p className={page.body_1}>
            Looking for a mobile app development company to build a
            cross-platform mobile app for your business? At Omertex, we provide
            high-quality mobile app development services including native and
            cross-platform mobile app development for Android and iOS platforms.
            <br />
            <br />
            You can approach us for our knowledge and expertise in Android and
            iPhone app development at any stage of your app development,
            including the initial one where you may be looking for a
            consultation.
          </p>
        </div>
      </div>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.second_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.second_section_h2, page.title_1)}>
            Who do we build <br /> cross-platform mobile
            <br /> apps for?
          </h2>
          <p className={page.body_1}>
            When providing cross-platform app development services, our
            development teams aim to create really valuable products for the
            industries that we work with, which include:
          </p>
          <div className={style.second_section_list_box}>
            <ul className={style.checked_list}>
              <li>blockchain and crypto</li>
              <li>payment and money transfer</li>
              <li>real estate and asset management</li>
            </ul>
            <ul className={style.checked_list}>
              <li>banking</li>
              <li>lending</li>
              <li>insurance</li>
              <p
                className={classNames(
                  page.body_1,
                  style.second_section_list_other
                )}
              >
                and other FinTech segments...
              </p>
            </ul>
          </div>
          <p className={page.body_1}>
            That’s why, for each development process, we begin with a deep
            analysis. We’ll carefully study all the requirements to your sphere
            and your business in order to foresee pitfalls and to suggest the
            best solutions. Namely, such an approach allows us to build mobile
            apps (including cross-platform ones) that bring value to your
            business and your customers.
          </p>
        </div>
      </div>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.third_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.third_section_h2, page.title_1)}>
            Benefits of choosing <br />a cross-platform mobile app
          </h2>
          <p className={classNames(style.third_section_p, page.body_1)}>
            Below are the benefits you receive when you choose for your app to
            be a cross-platform one:
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <div className={style.image_column_header}>
                <Img
                  fluid={images.cost_saving.childImageSharp.fluid}
                  className={style.image_column_icon}
                  alt="icon"
                />
                <h3
                  className={classNames(style.image_column_title, page.body_2)}
                >
                  Cost saving
                </h3>
              </div>
              <p className={classNames(style.image_column_p, page.body_1)}>
                Cross-platform app development allows you to reduce development
                costs. This is the key benefit of such an app. Ordering a native
                mobile app to be separately developed for Android and iPhone
                devices means that you’re ordering the development of two mobile
                applications rather than one. But ordering a cross-platform app
                means that you’ll only have to pay for one app. This is because
                the same source code will be run on both Android phones and
                iPhones.
              </p>
            </div>
            <div className={style.image_column}>
              <div className={style.image_column_header}>
                <Img
                  fluid={images.faster_delivery.childImageSharp.fluid}
                  className={style.image_column_icon}
                  alt="icon"
                />
                <h3
                  className={classNames(style.image_column_title, page.body_2)}
                >
                  Faster delivery
                </h3>
              </div>
              <p className={classNames(style.image_column_p, page.body_1)}>
                As pointed out above, it is faster to build one mobile
                application than it is to hire Android and iPhone app developers
                separately. Ordering cross-platform app development allows you
                to cut the time required for analysis, designing UX and UI,
                development and quality assurance nearly in half! It is also far
                more manageable for you since you will spend less time
                communicating with one development team than two separate ones.
              </p>
            </div>
            <div className={style.image_column}>
              <div className={style.image_column_header}>
                <Img
                  fluid={images.truly_native_ui.childImageSharp.fluid}
                  className={style.image_column_icon}
                  alt="icon"
                />
                <h3
                  className={classNames(style.image_column_title, page.body_2)}
                >
                  Truly Native UI
                </h3>
              </div>
              <p className={classNames(style.image_column_p, page.body_1)}>
                The tools and technologies used by our mobile app development
                experts allow them to create cross-platform or hybrid mobile
                apps that feel and look native on Android and iOS operating
                systems.
              </p>
            </div>
            <div className={style.image_column}>
              <div className={style.image_column_header}>
                <Img
                  fluid={images.live_app_updates.childImageSharp.fluid}
                  className={style.image_column_icon}
                  alt="icon"
                />
                <h3
                  className={classNames(style.image_column_title, page.body_2)}
                >
                  Live App Updates
                </h3>
              </div>
              <p className={classNames(style.image_column_p, page.body_1)}>
                The cross-platform app development framework Ionic lets you
                update the UI and business logic of your app remotely, in
                real-time. Push updates directly to end users to instantly fix
                bugs and ship new features without the trouble of going through
                the app store.
              </p>
            </div>
            <div className={style.image_column}>
              <div className={style.image_column_header}>
                <Img
                  fluid={images.app_support.childImageSharp.fluid}
                  className={style.image_column_icon}
                  alt="icon"
                />
                <h3
                  className={classNames(style.image_column_title, page.body_2)}
                >
                  App enhancement and support
                </h3>
              </div>
              <p className={classNames(style.image_column_p, page.body_1)}>
                When you have a cross-platform app built with a single code
                base, it is much easier and cheaper to maintain your application
                and to add new functionality with the help of reusable code and
                components than it is to do the same with separate apps. As a
                result, cross-platform apps turn out to be absolutely time and
                cost-effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.fourth_section_h2, page.title_1)}>
            Cross-platform technologies <br />
            consulting services
          </h2>
          <p className={classNames(style.fourth_section_p, page.body_1)}>
            If you want to discuss some considerations regarding the mobile app
            or if you are interested in learning more about our approaches to
            cross-platform mobile app development (including hybrid and
            web-based app development), you are welcome. Before proceeding to
            mobile app development, our specialists are ready to provide you
            with a professional consultation. After discussing your demands and
            expectations, we will be able to find the most appropriate
            cross-platform solutions within your budget.
          </p>
        </div>
      </div>
      <SectionForm
        color="#F07C26"
        title="Looking for professional cross-platform app development services?"
      >
        <p>
          Leave us your contact details to schedule a free app development
          consultation!
        </p>
      </SectionForm>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.sixth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.sixth_section_h2, page.title_1)}>
            Frameworks used to build <br /> cross-platform mobile apps
          </h2>
          <div className={style.gray_cards_box}>
            <div className={style.gray_card}>
              <Img
                fluid={images.xamarin.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Xamarin"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                Xamarin
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.react.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="React native"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                React Native
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.delphi_fmx.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Delphi FMX"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                Delphi FMX
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.phonegap.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="PhoneGap"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                PhoneGap
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.react.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="React.js"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                React.js
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.angular.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Angular"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                Angular
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.google_lighthouse.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Google Lighthouse"
              />
              <h3
                className={classNames(
                  style.gray_card_h3,
                  style.gray_card_h3_top,
                  page.body_2
                )}
              >
                Google <br /> Lighthouse
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.ionic.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Ionic"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                Ionic
              </h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.cordova.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="Cordova"
              />
              <h3 className={classNames(style.gray_card_h3, page.body_2)}>
                Cordova
              </h3>
            </div>
          </div>
          <h3 className={classNames(style.sixth_section_h3, page.subtitle_1)}>
            In our company, we turn to the most advanced of them. We can offer
            you the following cross-platform app development services:
          </h3>
          <div className={style.color_cards_box}>
            <div className={style.color_card}>
              <Img
                fluid={images.react_color.childImageSharp.fluid}
                className={style.color_card_icon}
                alt="React native"
              />
              <div className={style.color_card_description}>
                <h3 className={classNames(style.color_card_h3, page.body_2)}>
                  React native
                </h3>
                <p className={classNames(style.color_card_p, page.body_1)}>
                  App development
                </p>
              </div>
            </div>
            <div className={style.color_card}>
              <Img
                fluid={images.xamarin_color.childImageSharp.fluid}
                className={style.color_card_icon}
                alt="Xamarin"
              />
              <div className={style.color_card_description}>
                <h3 className={classNames(style.color_card_h3, page.body_2)}>
                  Xamarin
                </h3>
                <p className={classNames(style.color_card_p, page.body_1)}>
                  App development
                </p>
              </div>
            </div>
            <div className={style.color_card}>
              <Img
                fluid={images.flutter_color.childImageSharp.fluid}
                className={style.color_card_icon}
                alt="Flutter"
              />
              <div className={style.color_card_description}>
                <h3 className={classNames(style.color_card_h3, page.body_2)}>
                  Flutter
                </h3>
                <p className={classNames(style.color_card_p, page.body_1)}>
                  App development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.seventh_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.seventh_section_h2, page.title_1)}>
            How we build cross-platform <br /> mobile apps
          </h2>
          <p className={classNames(style.seventh_section_p, page.body_1)}>
            At Omertex, we provide a full cycle of the services traditionally
            offered by a mobile app development company. We take mobile app
            development extremely seriously and want to achieve the highest
            level of our customers' satisfaction. If our work starts at the
            stage when your app is just an idea, it does not stop until your app
            is successfully released. You can also approach us with an already
            existing mobile app if you are looking to enhance it or looking for
            a new vendor.
          </p>
          <h4 className={classNames(style.seventh_section_h4, page.body_2)}>
            The cross-platform app development process includes the following
            steps:
          </h4>
          <div className={page.flow_column}>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  Software specification (the collection and analysis of the
                  requirements)
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  Before starting their work, developers need to have a clear
                  understanding of what kind of product you want to get. That’s
                  why we pay very special attention to this step of mobile
                  application development. We attentively listen to our
                  customers in order to get as many details about their ideas as
                  possible. We share our vision and discuss with them all of the
                  possible ways to bring their ideas to life.
                </p>
              </div>
            </div>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  App architecture designing
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  Throughout this stage, our mobile app developers strictly
                  follow all the functional and business requirements previously
                  gathered. They define the way your app will perform its tasks,
                  how it will interact with users, and how it will interact with
                  other software. Our mobile app developers work hard to find
                  the most appropriate approach to organize data processing and
                  elaborate on other solutions related to the app’s functioning.
                </p>
              </div>
            </div>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  UI/UX designing
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  When we figure out how your app will function, it is necessary
                  to decide how it will look. The main task for our professional
                  development team is to make it both attractive and intuitively
                  clear for users. If you want to control all the steps of this
                  process, we are always open for communication and are ready to
                  answer all your questions, as well as to implement updates
                  concerning customized user interface design and other aspects.
                </p>
              </div>
            </div>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  Development
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  This step is pretty much self-explanatory. Just leave it to
                  us.
                </p>
              </div>
            </div>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  Testing and Quality assurance
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  When the app is ready, it’s time to test it and to check that
                  it is functioning properly. You can be sure that all bugs (if
                  any) will be fixed at this stage.
                </p>
              </div>
            </div>
            <div className={style.line_list}>
              <div className={style.line_list_box}>
                <div className={style.line_list_circle} />
                <div className={style.line_list_line} />
              </div>
              <div>
                <h3 className={classNames(style.line_list_h3, page.title_2)}>
                  Post-development support and app maintenance
                </h3>
                <p className={classNames(style.line_list_p, page.body_1)}>
                  If you think that our role as your cross-platform mobile app
                  development company ends immediately after testing, think
                  again. We are always ready to help you with updating your app
                  and expanding its functionality in order to meet the
                  constantly changing market needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          page.section,
          page.justify_center,
          style.eighth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(style.eighth_section_h2, page.title_1)}>
            Why should you choose <br /> Omertex for cross-platform <br /> app
            development?
          </h2>
          <div className={style.eighth_section_list_box}>
            <ul className={style.checked_list_min}>
              <li>
                We have been building mobile apps since 2010 and cross-platform
                mobile apps since 2014.
              </li>
              <li>We can help you refine your app idea.</li>
              <li>
                You can contact us for consultations regarding all types of
                cross-platform mobile apps development.
              </li>
              <li>
                We offer our mobile app development services to companies and
                businesses from all over the globe.
              </li>
              <li>We’re a full-service mobile app development company.</li>
              <li>
                We always follow deadlines to deliver apps within the approved
                timelines.
              </li>
            </ul>
            <ul className={style.checked_list_min}>
              <li>
                We never stop learning and we are constantly enhancing our
                skills and knowledge in mobile app development.
              </li>
              <li>
                As an app development company, we respect the interests of our
                clients and offer the most cost-efficient solutions.
              </li>
              <li>
                Our services extend beyond cross-platform mobile app
                development. We can also help you market your app or back your
                business with a web app.
              </li>
              <li>
                The main goal that we set for ourselves when it comes to the
                cross-platform app development is to make the final product
                absolutely reliable and user-friendly.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BottomForm
        image={images.form_bg.childImageSharp.fluid}
        title="Want to hire cross-platform app developers or get a consultation?"
      >
        <h3>Reach out to us.</h3>
        <h3>Our specialists will respond shortly.</h3>
        <p>Ask an Omertex expert how we can help.</p>
        <p>
          Find out how Omertex can drive actionable insights and streamline
          workflows, so you can deliver results.
        </p>
        <p>
          Explore life at Omertex, learn about available careers, or get in
          touch with an Omertex representative.
        </p>
      </BottomForm>
    </Layout>
  )
}
