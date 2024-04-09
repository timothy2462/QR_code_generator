import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Headroom from "react-headroom";
import GridLoader from "react-spinners/GridLoader";
import myImage from "../assets/qr-code.svg";
import Email from "mdi-react/EmailOutlineIcon";
import Github from "mdi-react/GithubIcon";
import Twitter from "mdi-react/TwitterIcon";
import Phone from "mdi-react/PhoneIcon";
import LinkedIn from "mdi-react/LinkedinIcon";
import CheckBox from "mdi-react/CheckboxMarkedCircleOutlineIcon";
import StarPoint from "mdi-react/StarFourPointsCircleOutlineIcon";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.theme;
    if (
      currentTheme === "dark" ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Qr Code Generator - Home</title>
      </Helmet>
      {loading ? (
        <GridLoader
          className="absolute m-auto top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-screen-[100vh] self-center"
          color="#36d7b7"
          loading={loading}
          size={12}
        />
      ) : (
        <motion.div
          className={`font-bodyFont duration-500 ${
            isDarkMode ? "dark:bg-[#030d06]" : "light:bg"
          } bg-[#f3f3f3] h-screen`}
        >
          <Headroom>
            <Header />
          </Headroom>
          <main className="pt-20">
            <section className={`border-b border-b-white/30 pb-20`}>
              <motion.p
                initial={{ y: -200 }}
                animate={{ y: -10 }}
                transition={{ delay: 1 }}
                className={`text-black text-center after:block after:w-[4rem] after:rounded-full after:h-[3px] after:my-[1.5rem] after:mx-auto after:bg-black content-none pt-16 px-6 sm:px-10 font-semibold  ${
                  isDarkMode ? "dark:after:bg-white" : "light:bg"
                } ${isDarkMode ? "dark:text-white" : "light:bg"}`}
              >
                Free online
                <span className={`text-green-500`}> Qr Code </span>
                Generator
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 2 }}
                className={`text-black ${
                  isDarkMode ? "dark:text-green-500" : "light:bg"
                } font-bold text-[20px] leading-9 mx-6 sm:mx-auto md:text-[21px] md:w-[600px] m-auto text-center py-4`}
              >
                Generate free, customized, and well-presentable
                <br /> qr codes to friends, families, and business associates.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 2 }}
                className={`text-black/80 text-center duration-500 py-6 leading-8 px-6 md:px-10 md:w-[700px] m-auto text-[14px] ${
                  isDarkMode ? "dark:text-white/50" : "light:bg"
                }`}
              >
                qrCode.Gen is created to generate beautiful and usable qr codes
                for friends, families, business individuals, clients, and
                customers. It enables quick access to websites, folders, and
                many more .
              </motion.p>
              <Link to="/Qrcode">
                <motion.button
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                  className={`bg-green-500 p-4 w-[200px] hover:bg-green-600 hover:duration-700 shadow-lg rounded-xl mt-10 flex justify-center m-auto`}
                >
                  Get Started
                </motion.button>
              </Link>
            </section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // transition={{ delay: 2, duration: 1.4 }}
              className={`bg-gradient-to-b from-emerald-100 to-green-300 px-6 md:px-10 py-10 shadow-lg`}
            >
              <p
                className={`font-bold text-[1.2rem] w-[275px] sm:w-[400px] flex items-center m-auto text-black sm:text-[30px] text-center tracking-wider`}
              >
                Fast.Downloadable.Standard
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-6 sm:mx-10">
                <div>
                  <p className="text-center text-[14px] pb-4 w-auto md:w-[400px] leading-8 md:text-left">
                    Seamlessly connect your customers to your digital world
                    using custom-designed QR codes that leave a lasting
                    impression. From websites to social media, menus to
                    promotional offers, our cutting-edge QR code solutions make
                    interactions effortless and memorable.
                  </p>
                  <Link
                    to="/Qrcode"
                    className={`bg-green-500 p-4 w-[200px] shadow-lg rounded-xl hover:bg-green-600 duration-700 mt-6 flex items-center justify-center m-auto md:mt-8 md:m-0`}
                  >
                    Try it Now
                  </Link>
                </div>
                <img
                  src={myImage}
                  className="md:w-[50%] m-auto"
                  alt="Qr Code illustration"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.4 }}
              className={`${
                isDarkMode ? "dark:bg-[#030d06]" : "light:bg"
              } duration-700 pt-16 px-4 md:px-10 flex flex-wrap justify-center items-center`}
            >
              <div
                className={`border border-black/20 ${
                  isDarkMode ? "dark:border-white/30" : "light:bg"
                } text-black cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 mb-10 w-[275px] sm:w-[300px]`}
              >
                <h4
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[16px] font-bold pb-4`}
                >
                  For Businesses
                </h4>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white/60" : "light:bg"
                  } text-black text-[13px] font-semibold text-black/40 pb-8`}
                >
                  Transform your marketing strategies with eye-catching QR codes
                  that engage and excite.
                </p>
                <p
                  className={`pb-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Quick business transactions
                </p>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Enable easy payments
                </p>
                <p
                  className={`pt-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Boosts Business Efficiency
                </p>
              </div>
              <div
                className={`border border-black/20 ${
                  isDarkMode ? "dark:border-white/30" : "light:bg"
                } text-black hover:shadow-lg cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 py-12 mb-10 w-[275px] sm:w-[300px]  sm:mx-8`}
              >
                <h4
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[16px] font-bold pb-4`}
                >
                  For Individuals
                </h4>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white/60" : "light:bg"
                  } text-black text-[13px] font-semibold text-black/40 pb-8`}
                >
                  Unlocking Convenience: Embrace the Power of QR Codes.
                </p>
                <p
                  className={`pb-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Create Lasting Memories
                </p>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Instant Access to Information
                </p>
                <p
                  className={`pt-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Contactless Transactions
                </p>
              </div>
              <div
                className={`border border-black/20 ${
                  isDarkMode ? "dark:border-white/30" : "light:bg"
                } text-black hover:shadow-lg cursor-pointer hover:bg-gradient-to-b from-emerald-600 to-green-800 rounded-2xl duration-700 p-10 py-12 mb-10 w-[275px] sm:w-[300px]`}
              >
                <h4
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[16px] font-bold pb-4`}
                >
                  For Families
                </h4>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white/60" : "light:bg"
                  } text-black text-[13px] font-semibold text-black/40 pb-8`}
                >
                  Keep loved ones informed effortlessly using the power of QR
                  Codes.{" "}
                </p>
                <p
                  className={`pb-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Event invitations
                </p>
                <p
                  className={`${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Share useful resources
                </p>
                <p
                  className={`pt-4 ${
                    isDarkMode ? "dark:text-white" : "light:bg"
                  } text-black text-[13px]`}
                >
                  <CheckBox
                    size={18}
                    className={`inline mr-2 text-green-500`}
                  />
                  Virtual gatherings
                </p>
              </div>
            </motion.section>

            <section className="bg-[#030d06] border-t border-t-white/30 p-20 py-[70px]">
              <div className="text-center">
                <StarPoint className="m-auto text-green-600" size={100} />
                <p className="text-white text-[1.5rem] sm:text-[2rem] font-bold w-[200px] m-auto py-8 leading-11">
                  Say goodbye to typing long URLs.
                </p>
              </div>
            </section>
          </main>

          <footer
            className={`flex justify-between ${
              isDarkMode ? "dark:bg-[#030a05]" : "light:bg"
            } duration-700 text-[10px] p-6 px-6 md:px-10 border-t border-t-white`}
          >
            <div className="flex">
              <p
                className={`pr-2 ${
                  isDarkMode ? "dark:text-white" : "light:bg"
                } text-black`}
              >
                &copy;2024
              </p>
              <a
                href="https://www.linkedin.com/in/timothy-akobundu-73b1b3241/"
                className="inline cursor-pointer text-green-500  text-[13px]"
              >
                Timothy Akobundu
              </a>
            </div>
            <div
              className={`${
                isDarkMode ? "dark:text-white" : "light:bg"
              } text-black flex mt-[-4px]`}
            >
              <a
                className=" hover:text-green-500 duration-700"
                href="https://www.linkedin.com/in/timothy-akobundu-73b1b3241/"
              >
                <LinkedIn size={22} />
              </a>
              <a
                className="px-4 hover:text-green-500 duration-700"
                href="mailto:timothy.christian10@gmail.com"
              >
                <Email size={22} />
              </a>
              <a
                className=" hover:text-green-500 duration-700"
                href="tel:+2348126402934"
              >
                <Phone size={22} />
              </a>
              <a
                className="px-4 hover:text-green-500 duration-700"
                href="https://github.com/timothy2462"
              >
                <Github size={22} />
              </a>
              <a
                className=" hover:text-green-500 duration-700"
                href="https://twitter.com/Timostickz04"
              >
                <Twitter size={22} />
              </a>
            </div>
          </footer>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Home;
