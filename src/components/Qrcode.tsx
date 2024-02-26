import { useState, useEffect } from "react";
import Header from "./Header";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GridLoader } from "react-spinners";
import brownBlack from "../images/brownblackqr.png";
import cyanBlack from "../images/cyanblackqqr.png";
import greenYellow from "../images/greenyellowqr.png";
import indigoGrey from "../images/indigogreyqr.png";
import orangeBlack from "../images/orangeblack.png";
import pinkBlack from "../images/pinkblackqr.png";
import silverGreen from "../images/silvergreenqr.png";
import yellowqr from "../images/yellowqr.png";
import Email from "mdi-react/EmailOutlineIcon";
import Github from "mdi-react/GithubIcon";
import Twitter from "mdi-react/TwitterIcon";
import Phone from "mdi-react/PhoneIcon";
import LinkedIn from "mdi-react/LinkedinIcon";

export default function Qrcode() {
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

  // const icon = ButterflyOutline;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <GridLoader
          className="absolute m-auto top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-screen-[100vh] self-center"
          color="#36d7b7"
          loading={loading}
          size={12}
        />
      ) : (
        <section>
          <Headroom>
            <Header />
          </Headroom>
          <div
            className={`font-bodyFont ${
              isDarkMode ? "dark:bg-[#030d06]" : "light:bg"
            } bg-white/40 `}
          >
            <div className={`text-center mx-4 pb-20 pt-20`}>
              <h1
                className={`pt-10 text-2xl font-bold md:text-4xl text-green-500`}
              >
                Create very nice and unique Qr Code
              </h1>
              <p
                className={`pt-6 text-black ${
                  isDarkMode ? "dark:text-white/60" : "light:bg"
                } `}
              >
                Select any template of your choice
              </p>
              <Link to="/Basicqr">
                <motion.button
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                  className={`bg-green-500 p-4 text-sm w-auto hover:bg-green-600 hover:duration-700 shadow-lg rounded-xl mt-10 flex justify-center m-auto`}
                >
                  Create a very basic qr code
                </motion.button>
              </Link>
            </div>

            <section className="flex justify-center items-center mx-4 mb-12">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
                <div>
                  <div className="relative">
                    <img
                      src={brownBlack}
                      className="cursor-pointer rounded-xl border"
                      alt="Brown Black"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 cursor-pointer hover:opacity-100 rounded-xl border"></div>
                  </div>
                  <Link to="/BrownBlack">
                    <motion.button
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: 1.4,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className={`bg-green-500 py-3 px-6 text-sm w-[120px] hover:bg-green-600 hover:duration-700 shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                    >
                      Available
                    </motion.button>
                  </Link>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={greenYellow}
                      className="cursor-pointer rounded-xl border"
                      alt="Cyan Black"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed hover:opacity-100 rounded-xl border"></div>
                  </div>

                  <motion.button
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                    className={`bg-green-300 cursor-not-allowed py-3 px-6 text-sm w-[120px] shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                  >
                    Unavailable
                  </motion.button>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={pinkBlack}
                      className="cursor-pointer rounded-xl border"
                      alt="Green Yellow"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed hover:opacity-100 rounded-xl border"></div>
                  </div>
                  <Link to="/PinkBlack">
                    <motion.button
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: 1.4,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className={`bg-green-300 cursor-not-allowed py-3 px-6 text-sm w-[120px] shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                    >
                      Unavailable
                    </motion.button>
                  </Link>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={silverGreen}
                      className="cursor-pointer rounded-xl border"
                      alt="Silver Green"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 cursor-pointer hover:opacity-100 rounded-xl border"></div>
                  </div>
                  <Link to="/SilverGreen">
                    <motion.button
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: 1.4,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className={`bg-green-500 py-3 px-6 text-sm w-[120px] hover:bg-green-600 hover:duration-700 shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                    >
                      Available
                    </motion.button>
                  </Link>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src={orangeBlack}
                      className="cursor-pointer rounded-xl border"
                      alt="Indigo grey"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed hover:opacity-100 rounded-xl border"></div>
                  </div>
                  <Link to="/OrangeBlack">
                    <motion.button
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: 1.4,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className={`bg-green-300 cursor-not-allowed py-3 px-6 text-sm w-[120px] shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                    >
                      Unavailable
                    </motion.button>
                  </Link>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={indigoGrey}
                      className="rounded-xl border"
                      alt="Orange Black"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed hover:opacity-100 rounded-xl border"></div>
                  </div>

                  <motion.button
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                    className={`bg-green-300 py-3 px-6 text-sm w-[120px] cursor-not-allowed shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                  >
                    Unavailable
                  </motion.button>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={cyanBlack}
                      className="rounded-xl border"
                      alt="Pink Black"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed hover:opacity-100 rounded-xl border"></div>
                  </div>

                  <motion.button
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                    className={`bg-green-300 py-3 px-6 text-sm w-[120px] cursor-not-allowed shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                  >
                    Unavailable
                  </motion.button>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={yellowqr}
                      className="cursor-pointer rounded-xl border"
                      alt="Yellow"
                    />
                    <div className="absolute inset-0 bg-black/50 cursor-not-allowed rounded-xl border"></div>
                  </div>

                  <motion.button
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                    className={`bg-green-300 py-3 px-6 text-sm w-[120px] cursor-not-allowed shadow-lg rounded-xl mt-4 flex justify-center m-auto`}
                  >
                    Unavailable
                  </motion.button>
                </div>
              </div>
            </section>

            <footer
              className={`flex justify-between ${
                isDarkMode ? "dark:bg-[#030a05]" : "light:bg"
              } border-t border-t-black/40 ${
                isDarkMode ? "dark:border-t-white/40" : "light:bg"
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
                  href="https://github.com/theCephas"
                  className="inline cursor-pointer text-green-500 "
                >
                  Osho Iseoluwa
                </a>
              </div>
              <div
                className={`${
                  isDarkMode ? "dark:text-white" : "light:bg"
                } text-black flex mt-[-4px]`}
              >
                <a
                  className=" hover:text-green-500 duration-700"
                  href="https://www.linkedin.com/in/osho-iseoluwa"
                >
                  <LinkedIn size={22} />
                </a>
                <a
                  className="px-4 hover:text-green-500 duration-700"
                  href="mailto:oshoiseoluwa@gmail.com"
                >
                  <Email size={22} />
                </a>
                <a
                  className=" hover:text-green-500 duration-700"
                  href="tel:+2348110470908"
                >
                  <Phone size={22} />
                </a>
                <a
                  className="px-4 hover:text-green-500 duration-700"
                  href="https://github.com/theCephas"
                >
                  <Github size={22} />
                </a>
                <a
                  className=" hover:text-green-500 duration-700"
                  href="https://twitter.com/OshoIseoluwa"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </footer>
          </div>
        </section>
      )}
    </>
  );
}
