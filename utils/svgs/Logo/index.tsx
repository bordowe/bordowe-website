import Link from "next/link"
import { motion } from "framer-motion"
import { logoWrapper, logoStyle } from "./index.css"

export default function Logo() {
    return (
        <motion.div
            className={logoWrapper}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                mass: 1,
            }}
        >
            <Link href="/">
                <svg
                    viewBox="0 0 341 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_17)" style={{ fill: "yellow" }}>
                        <path
                            d="M57.78 5.06998H75.42C84.85 5.06998 90.44 8.95998 90.44 15.53C90.44 19.97 88.31 23.13 84.72 24.1V24.16C89.04 25.13 91.96 28.36 91.96 33.4C91.96 40.76 86.79 45.08 76.7 45.08H57.79V5.06998H57.78ZM76.08 21.67C79.67 21.67 81.67 20.09 81.67 17.11C81.67 14.13 79.66 12.31 75.35 12.31H67.75V21.68H76.08V21.67ZM76.69 37.85C80.34 37.85 82.47 35.78 82.47 32.38C82.47 29.58 80.28 27.7 76.45 27.7H67.75V37.86H76.69V37.85Z"
                            className={logoStyle}
                        />
                        <path
                            d="M91.89 24.89C91.89 12.06 101.26 4.45999 113.36 4.45999C125.46 4.45999 134.83 12.06 134.83 24.89C134.83 37.72 125.46 45.69 113.36 45.69C101.26 45.69 91.89 37.97 91.89 24.89ZM124.49 24.95C124.49 16.98 119.69 12.3 113.36 12.3C107.03 12.3 102.23 16.98 102.23 24.95C102.23 32.92 107.04 37.84 113.36 37.84C119.68 37.84 124.49 33.03 124.49 24.95Z"
                            className={logoStyle}
                        />
                        <path
                            d="M135.74 5.06998H154.41C164.99 5.06998 170.71 9.44998 170.71 16.99C170.71 22.1 168.52 25.32 164.75 26.42V26.54C168.7 27.45 170.47 30.61 170.47 35.11V45.08H160.5V35.41C160.5 31.76 159.16 30.18 155.39 30.18H145.72V45.08H135.75V5.06998H135.74ZM154.83 24.16C159.03 24.16 161.15 22.27 161.15 18.56C161.15 14.85 158.96 12.9 154.34 12.9H145.7V24.15H154.82L154.83 24.16Z"
                            className={logoStyle}
                        />
                        <path
                            d="M172.22 5.06998H188.34C201.11 5.06998 209.02 11.88 209.02 25.02C209.02 38.16 201.54 45.09 189.62 45.09H172.23V5.06998H172.22ZM189.49 37.24C195.03 37.24 199.1 33.47 199.1 25.02C199.1 16.57 194.78 12.92 188.88 12.92H182.19V37.25H189.49V37.24Z"
                            className={logoStyle}
                        />
                        <path
                            d="M210.22 24.89C210.22 12.06 219.59 4.45999 231.69 4.45999C243.79 4.45999 253.16 12.06 253.16 24.89C253.16 37.72 243.79 45.69 231.69 45.69C219.59 45.69 210.22 37.97 210.22 24.89ZM242.82 24.95C242.82 16.98 238.02 12.3 231.69 12.3C225.36 12.3 220.56 16.98 220.56 24.95C220.56 32.92 225.37 37.84 231.69 37.84C238.01 37.84 242.82 33.03 242.82 24.95Z"
                            className={logoStyle}
                        />
                        <path
                            d="M250.48 5.06998H261.37L268.48 33.04H268.66L275.96 5.06998H285.87L293.11 33.04H293.29L300.16 5.06998H310.01L298.27 45.09H287.14L280.39 18.94H280.21L273.1 45.09H262.15L250.47 5.06998H250.48Z"
                            className={logoStyle}
                        />
                        <path
                            d="M311.29 5.06998H340.17V12.92H321.26V21.92H335.49V28H321.26V37.24H340.17V45.08H311.28V5.06998H311.29Z"
                            className={logoStyle}
                        />
                        <path
                            d="M109.96 28.78L111.72 25.68V25.63L108.91 24.83L109.43 22.94L112.35 23.85L112.4 23.8V20.33H114.32V23.8L114.37 23.85L117.29 22.94L117.81 24.83L115.01 25.63V25.68L116.74 28.78L115.1 29.81L113.41 26.78H113.32L111.61 29.81L109.97 28.78H109.96Z"
                            className={logoStyle}
                        />
                        <path
                            d="M194.32 28.47L191.22 26.71H191.17L190.37 29.52L188.48 29L189.39 26.08L189.34 26.03H185.87V24.11H189.34L189.39 24.06L188.48 21.14L190.37 20.62L191.17 23.42H191.22L194.32 21.69L195.35 23.33L192.32 25.02V25.11L195.35 26.82L194.32 28.46V28.47Z"
                            className={logoStyle}
                        />
                        <path
                            d="M235.09 21.37L233.33 24.47V24.52L236.14 25.32L235.62 27.21L232.7 26.3L232.65 26.35V29.82H230.73V26.35L230.68 26.3L227.76 27.21L227.24 25.32L230.04 24.52V24.47L228.31 21.37L229.95 20.34L231.64 23.37H231.73L233.44 20.34L235.08 21.37H235.09Z"
                            className={logoStyle}
                        />
                        <path
                            d="M27.39 24.07C27.36 23.96 27.31 23.85 27.27 23.75C27.01 23.17 26.55 22.68 25.9 22.42C25.8 22.38 25.7 22.35 25.59 22.32C25.16 22.21 24.65 22.18 24.07 22.28C23.98 22.3 23.9 22.31 23.81 22.34C23.74 22.36 23.67 22.38 23.6 22.41C22.91 22.67 22.43 23.2 22.17 23.83C22.14 23.9 22.12 23.97 22.09 24.04C21.89 24.64 21.88 25.31 22.04 25.93C22.07 26.04 22.1 26.15 22.14 26.25C22.38 26.87 22.83 27.4 23.47 27.68C23.59 27.73 23.71 27.77 23.84 27.8C23.91 27.82 23.98 27.83 24.05 27.85C24.64 27.95 25.16 27.92 25.6 27.78C25.75 27.74 25.89 27.68 26.03 27.61C26.63 27.31 27.05 26.81 27.28 26.22C27.33 26.11 27.37 25.99 27.4 25.87C27.56 25.28 27.55 24.64 27.37 24.07H27.39ZM24.8 26.74C23.81 26.74 23.01 25.94 23.01 24.95C23.01 23.96 23.81 23.16 24.8 23.16C25.79 23.16 26.59 23.96 26.59 24.95C26.59 25.94 25.79 26.74 24.8 26.74Z"
                            className={logoStyle}
                        />
                        <path
                            d="M1.40997 24.55C3.82997 24.85 19.88 24.16 20.77 24.55C21.03 24.66 20.89 25.19 20.92 25.43L1.40997 25.58V24.55Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.7 24.55C29.58 24.16 45.64 24.85 48.06 24.55L48.11 25.53C45.7 25.32 29.59 25.98 28.7 25.58C28.47 25.48 28.47 24.65 28.7 24.55Z"
                            className={logoStyle}
                        />
                        <path
                            d="M24.27 1.69C24.27 1.69 25.15 1.62 25.25 1.84C25.64 2.72 24.99 18.75 25.2 21.15L24.22 21.1L24.27 1.69Z"
                            className={logoStyle}
                        />
                        <path
                            d="M24.27 28.97C24.27 28.97 25.2 28.95 25.25 29.02L25.2 48.33L24.22 48.28L24.27 28.97Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20.0499 29.7L10.7799 39.17L10.6299 39.01L20.0499 29.7Z"
                            className={logoStyle}
                        />
                        <path
                            d="M38.59 10.96C38.73 10.94 38.77 11.04 38.85 11.11L29.43 20.33L38.59 10.96Z"
                            className={logoStyle}
                        />
                        <path
                            d="M29.42 29.7C30.39 30.91 38.63 38.27 38.74 38.92C38.75 39 38.76 39.13 38.69 39.18L29.42 29.71V29.7Z"
                            className={logoStyle}
                        />
                        <path
                            d="M19.0699 19.4C16.0999 16.8 13.4699 13.85 10.6299 11.11L10.8899 10.96C13.5199 13.86 16.4699 16.47 19.0799 19.4H19.0699Z"
                            className={logoStyle}
                        />
                        <path
                            d="M11.7599 17.75V17.65C14.9799 19.47 18.3599 21.14 21.4399 23.16C18.1799 21.43 14.9699 19.58 11.7599 17.75Z"
                            className={logoStyle}
                        />
                        <path
                            d="M37.09 31.96L36.99 32.06C34.02 30.41 30.87 28.89 28.08 27.01C31.08 28.66 34.1 30.28 37.09 31.95V31.96Z"
                            className={logoStyle}
                        />
                        <path
                            d="M29.32 26.3L37.09 28.31L36.94 28.46C35.15 27.73 30.57 27.01 29.53 26.61C29.44 26.58 29.16 26.44 29.32 26.3Z"
                            className={logoStyle}
                        />
                        <path
                            d="M17.32 38.14H17.22C18.65 35.6 19.96 32.97 21.54 30.52C20.28 33.14 18.74 35.61 17.32 38.14Z"
                            className={logoStyle}
                        />
                        <path
                            d="M37.71 17.65H37.81C35.45 19 33.12 20.41 30.71 21.67C30.73 21.66 30.64 21.52 31.07 21.26C33.22 19.98 35.53 18.89 37.71 17.66V17.65Z"
                            className={logoStyle}
                        />
                        <path
                            d="M17.17 27.02C17.27 27.02 17.38 27.02 17.48 27.02C17.58 27.04 17.47 27.18 17.38 27.23C17.1 27.38 12.07 28.42 11.15 28.72C12.01 28.32 16.74 27.04 17.17 27.02Z"
                            className={logoStyle}
                        />
                        <path
                            d="M27.26 15.38C27.36 15.46 27.4 15.5 27.41 15.64C27.44 15.93 26.07 20.56 25.92 21.35C26.11 19.33 26.83 17.37 27.26 15.38Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.27 16.31C21.74 14.39 21.22 12.47 20.73 10.54L20.83 10.44C21.33 12.31 21.94 14.17 22.37 16.05C22.4 16.19 22.25 16.22 22.27 16.31Z"
                            className={logoStyle}
                        />
                        <path
                            d="M36.99 32.06L37.09 31.96C38.7 32.86 40.33 33.76 41.93 34.69L41.78 34.84C40.18 33.93 38.6 32.96 36.99 32.06Z"
                            className={logoStyle}
                        />
                        <path
                            d="M15.01 7.76001C18.69 14.19 18.58 14.49 14.86 7.91001L15.01 7.76001Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.27 16.31C22.27 16.31 22.47 16.41 22.68 17.19C23.04 18.47 23.41 20.14 23.56 21.46C23.02 19.77 22.67 18.03 22.27 16.31Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.96 40.4L28.86 40.5C28.36 38.69 27.74 36.89 27.37 35.04C27.63 34.94 28.85 39.97 28.97 40.39L28.96 40.4Z"
                            className={logoStyle}
                        />
                        <path
                            d="M29.94 5.60001L30.09 5.86001C28.05 12.86 28.07 11.96 29.94 5.60001Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20.77 39.37C20.87 39.45 20.91 39.49 20.92 39.63C20.99 40.34 17.82 50.1 20.77 39.37Z"
                            className={logoStyle}
                        />
                        <path
                            d="M34.36 7.76C34.48 7.71 34.61 7.73 34.62 7.91C34.63 8.15 32.33 11.51 32.1 12.08C32.35 11.55 34.14 7.85 34.37 7.76H34.36Z"
                            className={logoStyle}
                        />
                        <path
                            d="M37.81 17.65H37.71C38.23 17.35 41.54 15.15 41.78 15.18C41.81 15.18 41.87 15.29 41.93 15.33C40.63 16.2 39.17 16.87 37.81 17.65Z"
                            className={logoStyle}
                        />
                        <path
                            d="M5.42997 19.81L10.11 21.2C9.18997 20.97 5.85997 20.22 5.62997 20.12C5.51997 20.07 5.25997 19.95 5.41997 19.81H5.42997Z"
                            className={logoStyle}
                        />
                        <path
                            d="M17.2199 38.14H17.3199C16.5299 39.53 15.8699 41.01 14.9999 42.36C14.7799 42.27 14.9599 41.99 15.1499 41.59C15.4199 41.04 16.6599 39.11 17.2099 38.14H17.2199Z"
                            className={logoStyle}
                        />
                        <path
                            d="M11.76 17.65V17.75C10.56 17.07 9.33997 16.4 8.09997 15.79C6.24997 14.19 10.16 16.74 11.76 17.64V17.65Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20.82 10.44L20.72 10.54C20.55 9.88001 19.34 6.00001 19.38 5.75001C19.38 5.72001 19.49 5.66001 19.53 5.60001C19.78 5.65001 20.67 9.88001 20.82 10.44Z"
                            className={logoStyle}
                        />
                        <path
                            d="M43.73 19.81C45.25 19.72 40.88 20.99 39.46 21.1C40.3 20.91 43.51 19.83 43.73 19.81Z"
                            className={logoStyle}
                        />
                        <path
                            d="M11.5099 32.48C11.7399 32.48 11.6699 32.53 11.5099 32.69C10.3499 33.76 3.26995 36.89 11.5099 32.48Z"
                            className={logoStyle}
                        />
                        <path
                            d="M9.33995 29.08C9.42995 29.08 9.65995 29.05 9.69995 29.13C8.66995 29.38 6.70995 30.16 5.93995 30.31C3.69995 30.76 8.49995 29.15 9.33995 29.07V29.08Z"
                            className={logoStyle}
                        />
                        <path
                            d="M25.8199 28.77C26.0799 28.66 26.9099 32.8 27.0599 33.2C26.7599 33.32 25.8899 29.14 25.8199 28.77Z"
                            className={logoStyle}
                        />
                        <path
                            d="M32.3 38.24C33.16 39.44 35.22 43.31 34.2 42C34.05 41.81 32.47 38.77 32.3 38.24Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.1299 30.93C29.0299 32.48 30.0999 33.97 30.7599 35.67C29.7499 34.17 28.9899 32.52 28.1299 30.93Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.86 40.51L28.96 40.41C29.11 40.99 30.1 44.07 30.09 44.27C30.09 44.41 30.03 44.44 29.94 44.53C29.73 44.52 28.97 40.93 28.86 40.51Z"
                            className={logoStyle}
                        />
                        <path
                            d="M16.96 22.8L21.13 23.88C21.29 24.17 16.37 23.01 16.96 22.8Z"
                            className={logoStyle}
                        />
                        <path
                            d="M40.23 29.18C40.55 29.23 44.21 30.12 44.09 30.36L40.23 29.18Z"
                            className={logoStyle}
                        />
                        <path
                            d="M21.85 20.22C20.9 18.78 20.09 17.23 19.33 15.69C20.34 17.1 21.07 18.68 21.85 20.22Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20 27.84C18.57 28.72 17.14 29.43 15.68 30.21C17.11 29.37 18.52 28.59 20 27.84Z"
                            className={logoStyle}
                        />
                        <path
                            d="M12.54 21.66C19.42 23.35 13.58 22.44 12.64 21.97C12.56 21.93 12.39 21.71 12.54 21.66Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20.77 26.19C21.7 26.26 19.03 26.89 17.84 26.96C18.23 26.77 20.62 26.18 20.77 26.19Z"
                            className={logoStyle}
                        />
                        <path
                            d="M31.27 23.11C32.7 23.03 28.15 24.22 28.34 23.88C29.02 23.78 30.97 23.12 31.27 23.11Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.19 11.88C28.45 11.74 27.64 15.1 27.37 14.97L28.19 11.88Z"
                            className={logoStyle}
                        />
                        <path
                            d="M26.8 21.56C27.27 20.44 27.93 19.5 28.55 18.47C28.03 19.5 27.56 20.68 26.8 21.56Z"
                            className={logoStyle}
                        />
                        <path
                            d="M23.55 28.67C23.68 28.74 23.14 31.19 23.04 31.35C22.72 31.83 23.22 29.64 23.5 28.72L23.55 28.67Z"
                            className={logoStyle}
                        />
                        <path
                            d="M35.29 22.08C35.84 22.28 32.59 23.07 32.87 22.75L35.29 22.08Z"
                            className={logoStyle}
                        />
                        <path
                            d="M30.71 21.66C27.34 23.7 27.38 23.2 30.35 21.66C30.42 21.62 30.64 21.7 30.71 21.66Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.55 18.47C28.89 17.81 29.1 17.07 29.63 16.51C29.48 17.26 28.93 17.84 28.55 18.47Z"
                            className={logoStyle}
                        />
                        <path
                            d="M27.05 33.4C27.17 33.55 27.4 34.27 27.41 34.38C27.53 35.47 27.06 34.73 27.05 33.4Z"
                            className={logoStyle}
                        />
                        <path
                            d="M36.94 21.66C37.1 21.8 36.82 21.93 36.73 21.97C35.55 22.43 34.64 22.18 36.94 21.66Z"
                            className={logoStyle}
                        />
                        <path
                            d="M20 27.84C20.4 27.6 20.91 27.08 21.44 27.07C21.05 27.47 20.47 27.6 20 27.84Z"
                            className={logoStyle}
                        />
                        <path
                            d="M15.68 30.21C15.62 30.24 14.84 30.96 14.44 30.98C14.62 30.58 15.34 30.41 15.68 30.21Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.73 32.17C22.71 33.75 22.03 33.89 22.68 32.22L22.73 32.17Z"
                            className={logoStyle}
                        />
                        <path
                            d="M27.72 30.21C27.5 29.81 27.08 29.49 27.05 28.97C27.35 29.14 27.59 29.97 27.72 30.21Z"
                            className={logoStyle}
                        />
                        <path
                            d="M21.54 30.52C21.54 30.52 21.59 30.07 22 29.59C22.27 29.7 21.62 30.39 21.54 30.52Z"
                            className={logoStyle}
                        />
                        <path
                            d="M32.51 22.8C33.21 22.82 32.26 23.23 31.94 23.06C32 22.96 32.48 22.8 32.51 22.8Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.39 26.19C28.86 25.94 29.46 26.79 28.49 26.4C28.45 26.38 28.29 26.25 28.39 26.19Z"
                            className={logoStyle}
                        />
                        <path
                            d="M28.13 30.93C27.98 30.68 27.86 30.47 27.72 30.21C27.85 30.45 27.99 30.67 28.13 30.93Z"
                            className={logoStyle}
                        />
                        <path
                            d="M21.85 20.22C21.98 20.42 22.4 20.69 22.31 21.04C22.04 20.84 21.99 20.49 21.85 20.22Z"
                            className={logoStyle}
                        />
                        <path
                            d="M16.14 22.59L16.81 22.85C16.63 22.99 15.97 22.88 16.14 22.59Z"
                            className={logoStyle}
                        />
                        <path
                            d="M19.0699 19.4C19.3199 19.62 19.7199 19.89 19.6399 20.02C19.1099 19.8 19.0999 19.43 19.0699 19.4Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.32 33.5C22.51 33.44 22.48 34.05 22.22 33.91C22.18 33.89 22.3 33.51 22.32 33.5Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.83 31.65C22.89 31.63 22.96 31.65 22.98 31.7C23.12 32.01 22.26 31.89 22.83 31.65Z"
                            className={logoStyle}
                        />
                        <path
                            d="M22.11 34.33C22.11 34.33 22.32 34.5 22.26 34.59C22.12 34.82 21.94 34.4 22.11 34.33Z"
                            className={logoStyle}
                        />
                        <path
                            d="M26.8 21.56C26.8 21.56 26.85 21.89 26.59 21.71C26.7 21.55 26.79 21.57 26.8 21.56Z"
                            className={logoStyle}
                        />
                        <path
                            d="M44.02 21.81L49.47 24.96L44.02 28.28C43.69 28.05 45.34 25.54 45.17 25.44C44.5 25.32 39.79 25.62 39.63 25.4C39.61 25.37 39.61 24.6 39.67 24.56C39.89 24.4 44.39 24.68 45.08 24.56C45.45 24.42 44.15 22.94 44.02 21.81Z"
                            className={logoStyle}
                        />
                        <path
                            d="M24.69 0L27.93 5.45C27.85 5.65 25.46 4.52 25.23 4.34L25.1 4.47C25.2 5.1 25.31 9.9 25.06 10.01C24.96 10.05 24.38 10.04 24.31 9.88C24.2 9.63 24.39 5.26 24.31 4.47L21.65 5.45L24.71 0L24.69 0Z"
                            className={logoStyle}
                        />
                        <path
                            d="M5.36 21.72C5.42 21.72 5.48 21.72 5.49 21.76L4.29 24.55C4.99 24.67 9.56 24.39 9.79 24.55C9.85 24.59 9.86 25.36 9.83 25.39C9.67 25.62 4.94 25.37 4.29 25.35C3.99 25.54 5.73 28.16 5.27 28.19L0 24.95C0.76 24.62 5.05 21.76 5.36 21.71V21.72Z"
                            className={logoStyle}
                        />
                        <path
                            d="M13.7 35.46C13.93 35.42 14.38 35.91 14.36 36.04C14.33 36.29 11.16 39.07 10.81 39.59L13.03 40.92L7.04999 42.65C7.66999 40.7 8.41999 38.78 8.77999 36.75C8.90999 36.5 10.05 38.71 10.07 39.01C10.6 38.65 13.46 35.51 13.7 35.46Z"
                            className={logoStyle}
                        />
                        <path
                            d="M7.14001 7.45001L13.04 9.18001L10.74 10.42C11.26 10.96 14.39 13.69 14.29 14.14C14.29 14.17 13.84 14.63 13.8 14.63C13.54 14.63 10.57 11.44 10.17 11L9.06002 13.26H8.88001L7.15001 7.45001H7.14001Z"
                            className={logoStyle}
                        />
                        <path
                            d="M35.68 35.37C35.93 35.37 38.73 38.65 39.31 38.92L40.6 36.66L42.33 42.56L36.43 40.92L38.73 39.59C38.28 39.19 35.1 36.21 35.1 35.96C35.1 35.92 35.64 35.38 35.68 35.38V35.37Z"
                            className={logoStyle}
                        />
                        <path
                            d="M42.15 7.45C42.24 7.45 42.33 7.42 42.37 7.49L40.6 13.16H40.42L39.31 10.99C38.91 11.43 35.93 14.62 35.68 14.62C35.64 14.62 35.11 14.08 35.1 14.04C35.08 13.78 38.36 10.92 38.73 10.41L36.34 9.08C37.28 9.08 41.85 7.44 42.15 7.44V7.45Z"
                            className={logoStyle}
                        />
                        <path
                            d="M24.42 39.89C24.52 39.85 25.1 39.86 25.17 40.02C25.28 40.28 25.08 44.81 25.17 45.61L27.83 44.55L24.77 50L21.62 44.64C21.65 44.15 24.17 45.81 24.28 45.62C24.36 44.93 24.12 40.03 24.41 39.9L24.42 39.89Z"
                            className={logoStyle}
                        />
                        <path
                            d="M37.98 24.52C37.79 23.74 37.17 23.06 36.39 22.96C35.72 22.88 32.37 23.34 29.78 23.71C29.27 23.79 28.78 23.86 28.36 23.92C27.99 23.98 27.66 24.03 27.39 24.07C27.28 24.09 27.17 24.1 27.09 24.12C26.97 24.05 27.12 23.89 27.27 23.75C27.3 23.72 27.33 23.7 27.36 23.67C27.51 23.53 27.82 23.3 28.21 23.01C28.48 22.81 28.8 22.58 29.14 22.33C30.77 21.15 33 19.55 33.91 18.62C35.18 17.32 35.07 16.15 34.41 15.45C34.38 15.41 34.34 15.38 34.3 15.34C33.71 14.81 32.77 14.62 31.96 14.98C31.42 15.22 29.49 17.73 27.87 19.85C27.62 20.17 27.39 20.49 27.16 20.78C26.65 21.45 26.2 22.04 25.89 22.41C25.8 22.52 25.73 22.61 25.66 22.68L25.53 22.55C25.55 22.48 25.57 22.4 25.58 22.31C26 20.37 26.87 14.19 26.77 13.33C26.67 12.52 26.02 11.96 25.27 11.75C24.93 11.66 24.57 11.63 24.24 11.69C22.09 12.05 22.79 15.08 23.04 17.41C23.22 19.05 23.59 20.69 23.8 22.33C23.81 22.43 23.83 22.54 23.84 22.64C23.77 22.57 23.68 22.49 23.59 22.39C23.25 22.03 22.8 21.45 22.29 20.78C22.18 20.64 22.07 20.49 21.95 20.34C21.91 20.28 21.87 20.23 21.82 20.17C21.8 20.15 21.79 20.13 21.77 20.11C20.06 17.84 17.91 14.95 16.96 14.79C16.27 14.68 15.61 14.9 15.15 15.33C15.09 15.38 15.04 15.44 14.99 15.5C14.62 15.93 14.43 16.51 14.52 17.14C14.69 18.38 18.58 21.05 20.91 22.81C20.99 22.87 21.08 22.94 21.15 23C21.55 23.31 21.89 23.58 22.15 23.81C22.25 23.9 22.33 23.98 22.41 24.05C22.31 24.05 22.2 24.03 22.08 24.02C21.8 23.99 21.47 23.95 21.1 23.9C20.69 23.84 20.22 23.78 19.73 23.71C17.17 23.34 13.89 22.85 13.06 22.95C12.16 23.06 11.63 23.73 11.48 24.5C11.42 24.82 11.42 25.16 11.48 25.48C11.64 26.25 12.16 26.91 13.06 27.02C14.04 27.14 19.98 26.2 22.03 25.9C22.12 25.89 22.2 25.87 22.28 25.86L22.41 25.99C22.34 26.05 22.24 26.13 22.13 26.21C21.74 26.51 21.15 26.95 20.47 27.46C20.33 27.56 20.19 27.67 20.05 27.77C17.74 29.49 14.67 31.82 14.51 32.63C14.36 33.39 14.6 34.09 15.06 34.56C15.09 34.59 15.11 34.61 15.14 34.64C15.59 35.05 16.23 35.27 16.94 35.15C17.84 35 20.09 32.03 21.83 29.72C21.83 29.72 21.89 29.64 21.91 29.61C22.51 28.81 23.05 28.09 23.44 27.62C23.56 27.47 23.67 27.35 23.76 27.25L23.89 27.38C23.86 27.48 23.84 27.6 23.81 27.74C23.37 29.77 22.56 35.83 22.65 36.6C22.76 37.5 23.43 38.03 24.2 38.19C24.52 38.25 24.86 38.25 25.18 38.19C25.95 38.03 26.62 37.5 26.73 36.61C26.77 36.28 26.22 31.6 26.11 30.76C25.96 29.61 25.63 28.35 25.58 27.73C25.55 27.33 25.63 27.19 25.93 27.48C25.95 27.49 25.97 27.52 26 27.56C26.17 27.76 26.54 28.28 27.03 28.94C27.12 29.07 27.22 29.2 27.32 29.34C28.8 31.36 30.99 34.35 31.64 34.79C32.57 35.42 33.59 35.22 34.23 34.61C34.28 34.57 34.32 34.52 34.36 34.47C34.9 33.85 35.08 32.91 34.52 32C34.15 31.41 31.68 29.54 29.61 27.97C29.38 27.8 29.15 27.63 28.94 27.46C28.27 26.95 27.67 26.5 27.25 26.17C27.11 26.06 26.99 25.96 26.9 25.88L27.03 25.75C27.14 25.78 27.25 25.8 27.37 25.82C30.29 26.44 33.29 26.65 36.25 26.99C37.2 26.71 37.71 26.17 37.9 25.57C38.02 25.21 38.02 24.83 37.93 24.47L37.98 24.52ZM24.8 26.74C23.81 26.74 23.01 25.94 23.01 24.95C23.01 23.96 23.81 23.16 24.8 23.16C25.79 23.16 26.59 23.96 26.59 24.95C26.59 25.94 25.79 26.74 24.8 26.74Z"
                            className={logoStyle}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_17">
                            <rect width="340.17" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>
        </motion.div>
    )
}
