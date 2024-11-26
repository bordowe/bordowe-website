"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import {
    navbarWrapper,
    mobileNavGroup,
    logoWrapper,
    hamburgerMenuIconWrapper,
    hamburgerMenuIcon,
    menuState,
    navWrapper,
    decoStripes,
} from "./index.css"

import Logo from "@/svgs/Logo"
import MobileStripes from "@/utils/svgs/MobileStripes"

import { heroSection } from "@/styles/theme.css"
import { typography } from "@/styles/typography.css"

const navbar_items = [
    {
        id: 1,
        title: "Nasze Realizacje",
        path: "/realizacje",
        ref: null,
    },
    {
        id: 2,
        title: "Dla Ciebie",
        path: "/rozwiazania",
        ref: null,
    },
    {
        id: 3,
        title: "Nasz Blog",
        path: "/blog",
        ref: null,
    },
    {
        id: 4,
        title: "Kontakt",
        path: null,
        ref: "kontakt",
    },
]

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isDesktop, setDesktop] = useState(false)
    const [currentViewportRange, setCurrentViewportRange] = useState("mobile")

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const lackMobileMenuOnDesktop = () => {
        const isNowDesktop = window.innerWidth >= 1024

        if (isNowDesktop && currentViewportRange !== "desktop") {
            setMenuOpen(true)
            setDesktop(true)
            setCurrentViewportRange("desktop")
        } else if (!isNowDesktop && currentViewportRange !== "mobile") {
            setMenuOpen(false)
            setDesktop(false)
            setCurrentViewportRange("mobile")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", lackMobileMenuOnDesktop)

        lackMobileMenuOnDesktop()

        return () => {
            window.removeEventListener("resize", lackMobileMenuOnDesktop)
        }
    }, [currentViewportRange])

    const getHeight = () => {
        if (isMenuOpen && isDesktop) return "80px"
        if (isMenuOpen) return "100vh"
    }

    const getNavInitial = () => {
        if (isMenuOpen && isDesktop) return { x: -100, opacity: 0 }
        return { x: -100, opacity: 0 }
    }
    const getNavAnimate = () => {
        if (isMenuOpen && isDesktop) return { x: 0, opacity: 1 }
        return isMenuOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
    }

    return (
        <header>
            <div style={{ height: "80px" }}></div>
            <motion.div
                className={`${navbarWrapper} ${heroSection}`}
                initial={{
                    height: "80px",
                    y: "-100%",
                }}
                whileInView={{
                    height: getHeight(),
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    mass: 1,
                }}
            >
                <div className={`${mobileNavGroup}`}>
                    <div className={logoWrapper}>
                        <Logo />
                    </div>
                    <motion.div
                        className={hamburgerMenuIconWrapper}
                        onClick={toggleMenu}
                        tabIndex={0}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                            if (e.key === "Enter") {
                                toggleMenu()
                            }
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{ scale: 0.85 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 15,
                            mass: 1,
                        }}
                    >
                        <div
                            className={`${hamburgerMenuIcon} ${isMenuOpen ? menuState.iconOpen : menuState.iconClosed}`}
                        ></div>
                    </motion.div>
                </div>
                <nav className={navWrapper} onClick={() => setMenuOpen(false)}>
                    {navbar_items.map((item) => {
                        return item.path !== null ? (
                            <motion.div
                                key={item.id}
                                initial={getNavInitial()}
                                animate={getNavAnimate()}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10,
                                    mass: 1,
                                    delay: 0.1 * item.id,
                                }}
                            >
                                <Link
                                    href={item.path}
                                    className={typography.navbar.nav}
                                >
                                    {item.title}
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={item.id}
                                initial={getNavInitial()}
                                animate={getNavAnimate()}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10,
                                    mass: 1,
                                    delay: 0.1 * item.id,
                                }}
                            >
                                <a
                                    onClick={(e) => handleScroll(e, item.ref)}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            toggleMenu()
                                        }
                                    }}
                                    className={typography.navbar.nav}
                                >
                                    {item.title}
                                </a>
                            </motion.div>
                        )
                    })}
                </nav>
                <motion.div
                    className={decoStripes}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: 100, opacity: 0 }}
                    animate={
                        isMenuOpen
                            ? { y: 0, opacity: 1 }
                            : { y: 100, opacity: 0 }
                    }
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 10,
                        mass: 1,
                        delay: 0.2,
                    }}
                >
                    <MobileStripes />
                </motion.div>
            </motion.div>
        </header>
    )
}

function handleScroll(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
) {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}

export default Navbar
