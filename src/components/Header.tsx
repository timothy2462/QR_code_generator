import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Header() {

        const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
                const currentTheme = localStorage.theme;
                if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        setIsDarkMode(true);
                } else {
                        setIsDarkMode(false);
                }
        }, []);
        const handleThemeToggle = () => {
                if (isDarkMode) {
                        document.documentElement.classList.remove('dark');
                        localStorage.theme = 'light';
                } else {
                        document.documentElement.classList.add('dark');
                        localStorage.theme = 'dark';
                }
                setIsDarkMode(!isDarkMode);
        };

        const svgVariants = {
                hidden: { rotate: -180 },
                visible: {
                        rotate: 0,
                        transition: { duration: 1 }
                }
        }
        const pathVariants = {
                hidden: {
                        opacity: 0,
                        pathLength: 0
                },
                visible: {
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                                duration: 2,
                        }
                }
        }
        const rotVariants = {
                rotate1: {
                        rotate: -360,
                        transition: {
                                delay: 0.5,
                                yoyo: Infinity
                        }
                },
                rotate2: {
                        rotate: 0,
                        transition: {
                                yoyo: Infinity
                        }
                }
        }
        return <>
                <motion.header

                        className={`font-semibold font-bodyFont shadow-lg duration-500 ${isDarkMode ? 'dark:bg-[#030d06]' : 'light:bg'} bg-white/100 p-4 px-6 md:px-10 flex justify-between border-b border-b-white/30 top-0 fixed w-full`}>
                        <Link
                                to="/"
                                className="flex pt-2">

                                <motion.svg className="fill-green-500 mr-2" width="20px" height="20px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        variants={svgVariants}
                                        initial="hidden"
                                        animate="visible"
                                >
                                        <motion.path

                                                d="M2.89473689 2.89473689h1.26315788v1.26315788H2.89473689zm0 6.94736834h1.26315788v1.26315788H2.89473689zm6.94736834-6.94736834h1.26315788v1.26315788H9.84210523zM2.26315795 7.31578947h1.26315788v1.26315788H2.26315795zm1.26315788-1.26315788h1.26315788v1.26315788H3.52631583zm5.68421046 3.1578947h1.26315788v1.26315788H9.21052629zm0 2.52631576h1.26315788v1.26315788H9.21052629zm1.26315788-1.
                                26315788h1.26315788v1.26315788h-1.26315788zm1.26315788-3.1578947h1.26315788v1.26315788h-1.26315788zm-5.68421046 4.42105258h1.26315788v1.26315788H6.05263159z"
                                                variants={pathVariants}
                                                initial="hidden"
                                                animate="visible"
                                        />
                                        <motion.path

                                                d="M6.05263159 9.52631576v1.26315788h1.26315788v.94736841h1.26315788v-3.1578947h1.89473682V7.31578947H8.57894735V6.05263159H6.05263159v1.26315788H4.78947371v1.26315788h2.52631576v.94736841zm5.68421046-.31578947h1.26315788v1.26315788h-1.26315788zm0 2.52631576h1.26315788v1.26315788h-1.26315788zm-1.26315788-5.68421046h1.26315788v1.26315788h-1.26315788z"
                                                variants={pathVariants}
                                                initial="hidden"
                                                animate="visible"
                                        />
                                        <motion.path

                                                d="M7.94736841 1.00000007v5.05263152h5.05263152V1.00000007H7.94736841zm3.78947364 3.78947364H9.21052629V2.26315795h2.52631576v2.52631576zM1.00000007 6.05263159h5.05263152V1.00000007H1.00000007v5.05263152zm1.26315788-3.78947364h2.52631576v2.52631576H2.26315795V2.26315795zM1.00000007 12.99999993h5.05263152V7.94736841H1.00000007v5.05263152zm1.26315788-3.78947364h2.52631576v2.52631576H2.26315795V9.21052629z"
                                                variants={pathVariants}
                                                initial="hidden"
                                                animate="visible"
                                        />
                                </motion.svg>
                                <motion.p
                                        initial={{ y: -200 }}
                                        animate={{ y: 0 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="text-green-500 text-[13px]">
                                        {/* <QrCodeEdit className="text-green-500 mr-2 inline" size={20} /> */}
                                        qrCode.Gen
                                </motion.p>
                        </Link>


                        <motion.svg
                                onClick={handleThemeToggle}
                                className="fill-green-500 w-[25px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>theme-light-dark</title>
                                <motion.path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2"
                                        variants={pathVariants}
                                        initial="hidden"
                                        animate="visible"
                                />
                                <motion.g
                                        variants={rotVariants}
                                        initial="rotate1"
                                        animate="rotate2"
                                >
                                        <motion.path d="M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"
                                                variants={pathVariants}
                                                initial="hidden"
                                                animate="visible"
                                        />
                                </motion.g>
                        </motion.svg>

                </motion.header>
        </>
}