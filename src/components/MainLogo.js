import React from "react";
import { motion } from "framer-motion";

const MainLogo = () => {
  return (
    <svg
      width="260"
      height="71"
      viewBox="0 0 260 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="239.369"
        cy="43.4458"
        r="1.25"
        fill="url(#paint0_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 12,
          },
        }}
      />
      <motion.circle
        cx="235.369"
        cy="43.4458"
        r="1.25"
        fill="url(#paint1_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 11.5,
          },
        }}
      />
      <motion.circle
        cx="231.369"
        cy="43.4458"
        r="1.25"
        fill="url(#paint2_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 11,
          },
        }}
      />
      <motion.circle
        cx="233.243"
        cy="23.2427"
        r="2"
        fill="url(#paint3_linear_ur)"
        // stroke="url(#paint3_linear_ur)"
        // strokeWidth="1"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 10,
          },
        }}
      />
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M170.484 20.0001C171.188 19.9962 171.805 20.154 172.471 20.435C173.158 20.7251 173.788 21.1495 174.194 21.7912C174.613 22.4542 174.714 23.2236 174.566 24.0355L174.561 24.063L174.554 24.0902C174.442 24.5579 174.271 24.9773 173.95 25.4089C173.347 26.2201 172.471 26.9111 171.588 27.397L176.386 29.5779L170.271 35.0815C169.476 35.8798 168.995 36.7847 169.816 37.8225C170.922 39.2199 173.378 38.2904 174.527 37.5242L174.561 37.5017C180.438 34.2369 186.225 30.3407 192.376 27.6222C194.37 26.7405 196.372 25.7895 198.612 25.8567C199.743 25.8906 200.724 26.0533 201.654 26.4255C203.453 27.1457 205.208 28.6804 206.193 30.3493C206.601 31.0396 206.869 31.7878 207.005 32.6518L208.393 32.3741L235.258 27.4398L230.366 34.6151C236.013 31.0801 241.681 27.5389 246.554 24.5072C247.022 24.2154 247.639 24.359 247.931 24.8279C248.223 25.2969 248.079 25.9135 247.61 26.2053C241.624 29.9302 234.435 34.4251 227.558 38.733L211.355 62.4971C208.573 65.279 204.466 67.3624 200.493 65.9297C196.084 64.34 194.878 59.3568 197.71 55.7936C200.378 52.4364 205.125 50.4472 208.72 48.1894C213.341 45.2871 219.587 41.3666 226.141 37.2604L230.906 30.2727L208.77 34.3384L207.003 34.6919C206.864 35.5987 206.584 36.4438 206.268 37.3025C204.311 41.7365 200.163 45.3297 195.137 45.6078C190.007 45.8917 185.184 42.1799 185.082 36.8754L185.08 36.783L185.095 36.6919C185.31 35.4064 185.535 34.4015 185.947 33.4642L175.602 39.2112C173.958 40.2978 172.175 40.8163 170.324 40.3224C168.173 39.7486 166.653 37.3783 167.671 35.2041C167.921 34.6701 168.331 34.193 168.874 33.6495L172.778 30.1346C170.625 29.1561 167.877 28.3968 166.139 26.727C165.461 26.0753 164.665 24.9545 165.148 23.6948L165.153 23.681L165.159 23.6674C165.422 23.038 165.711 22.4457 166.187 21.8991C166.666 21.3498 167.281 20.9049 168.121 20.4688L168.207 20.4243L168.299 20.397C169.111 20.1579 169.806 20.0038 170.484 20.0001ZM172.503 22.86C171.588 21.8991 170.03 21.7027 169 22C167.924 22.5723 166.355 24.1608 167.525 25.2847C169.148 27.1724 173.833 24.9634 172.503 22.86ZM187.966 33.8797C185.291 38.932 189.843 43.8977 195.027 43.6109C198.673 43.4091 202.152 40.9105 203.84 37.7297C204.094 37.2508 204.298 36.8127 204.439 36.4947C204.453 36.4628 204.466 36.4321 204.479 36.4027C204 36.7307 203.486 37.0436 202.996 37.2667C201.314 38.0305 200.051 38.5347 197.994 38.3523C193.477 37.9522 190.337 34.6974 191.945 30.0421C190.27 30.9064 188.86 32.1902 187.966 33.8797ZM198.17 36.3602C200.635 36.5786 206.395 34.6245 204.471 31.366C203.061 28.977 200.226 27.426 197.442 27.8812C191.85 28.7955 192.781 35.8826 198.17 36.3602ZM223.332 41.3816C218.224 44.5832 213.483 47.5594 209.784 49.883C206.486 51.9541 201.73 53.9501 199.275 57.038C197.316 59.5038 198.116 62.9467 201.171 64.0483C204.319 65.1832 207.62 63.3901 209.809 61.2148L223.332 41.3816Z"
        stroke="url(#paint4_linear_ur)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint4_linear_ur-none)",
        }}
        animate={{
          pathLength: 1,
          fill: "url(#paint4_linear_ur)",
          transition: {
            pathLength: { duration: 8, delay: 5 },
            fill: { delay: 13 },
          },
        }}
      />
      <motion.path
        d="M143.531 10.0008L143.504 10L143.476 10.0006C139.673 10.0913 136.282 11.0463 133.472 12.9169C130.66 14.79 128.488 17.5432 127.07 21.133C126.867 21.6467 127.119 22.2276 127.633 22.4305C128.147 22.6333 128.727 22.3814 128.93 21.8677C130.215 18.6139 132.144 16.2041 134.581 14.5816C137.015 12.9607 140.013 12.0879 143.497 12.0007C147.284 12.1214 151.657 13.32 154.508 15.546C155.923 16.6505 156.92 17.9723 157.338 19.5017C157.749 21.0077 157.632 22.8305 156.62 25.021C153.048 30.6609 146.883 32.5709 140.719 31.6202L145.892 21.4538C146.142 20.9616 145.946 20.3595 145.454 20.1091C144.961 19.8586 144.359 20.0547 144.109 20.5469L138.687 31.2034C137.575 30.9185 136.472 30.5427 135.394 30.0811C134.886 29.8637 134.298 30.099 134.081 30.6067C133.864 31.1144 134.099 31.7022 134.607 31.9196C135.633 32.359 136.689 32.7287 137.761 33.023L129.609 49.0469C129.359 49.5391 129.555 50.1412 130.047 50.3916C130.539 50.6421 131.141 50.4461 131.392 49.9538L139.772 33.482C146.762 34.7578 154.11 32.7796 158.347 26.0322L158.38 25.9798L158.406 25.9237C159.603 23.3625 159.829 21.0326 159.267 18.9745C158.707 16.9271 157.4 15.2659 155.739 13.9696C152.447 11.3994 147.603 10.1251 143.531 10.0008Z"
        stroke="url(#paint5_linear_ur)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint5_linear_ur-none)",
        }}
        animate={{
          pathLength: 1,
          fill: "url(#paint5_linear_ur)",
          transition: {
            pathLength: { duration: 5, delay: 5 },
            fill: { delay: 13 },
          },
        }}
      />
      <motion.path
        d="M86.6151 16.4251C86.5781 16.4518 86.5426 16.4816 86.5091 16.5145C86.4805 16.5424 86.4534 16.5725 86.4278 16.6049L82.299 21.8252C83.0754 22.5164 84.233 22.4089 84.8845 21.5852L86.2741 19.8282V47.9013H84.4389C83.9321 47.9013 83.5213 48.3372 83.5213 48.8748C83.5213 49.4125 83.9321 49.8483 84.4389 49.8483H89.9446C90.4514 49.8483 90.8622 49.4125 90.8622 48.8748C90.8622 48.3372 90.4514 47.9013 89.9446 47.9013H88.1094V17.7224C88.1094 17.6468 88.1013 17.5732 88.0859 17.5026C88.2138 17.2182 88.1503 16.8675 87.9123 16.6556L87.7206 16.4849C87.3988 16.1985 86.9461 16.1864 86.6151 16.4251Z"
        stroke="url(#paint6_linear_ur)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint6_linear_ur-none)",
        }}
        animate={{
          pathLength: 1,
          fill: "url(#paint6_linear_ur)",

          transition: {
            pathLength: { duration: 5 },
            fill: { delay: 7 },
          },
        }}
      />
      <motion.path
        d="M100.37 31.6816V18.6959H111.381C111.888 18.6959 112.299 18.2601 112.299 17.7224C112.299 17.1847 111.888 16.7489 111.381 16.7489H99.4523C98.9455 16.7489 98.5347 17.1847 98.5347 17.7224V33.2986C98.5347 33.8363 98.9455 34.2721 99.4523 34.2721C99.9464 34.2721 100.143 33.8324 100.544 33.6747C101.61 33.2559 102.757 33.1038 103.895 33.2363C105.338 33.4043 106.702 34.0226 107.814 35.013C108.926 36.0033 109.736 37.3213 110.142 38.8002C110.548 40.2791 110.532 41.8525 110.095 43.3215C109.658 44.7904 108.82 46.0889 107.688 47.0528C106.555 48.0167 105.179 48.6026 103.732 48.7365C102.286 48.8704 100.834 48.5463 99.5617 47.8051C98.5581 47.2207 97.7012 46.3977 97.055 45.4059C96.7669 44.9636 96.2173 44.7737 95.7678 45.0218C95.3182 45.27 95.1396 45.8611 95.4172 46.3109C96.2382 47.6411 97.3567 48.7421 98.6786 49.5119C100.27 50.4384 102.084 50.8436 103.892 50.6762C105.7 50.5088 107.42 49.7764 108.836 48.5715C110.252 47.3667 111.299 45.7435 111.845 43.9073C112.391 42.0712 112.412 40.1044 111.904 38.2558C111.397 36.4072 110.384 34.7597 108.994 33.5217C107.604 32.2838 105.899 31.5109 104.095 31.3009C102.836 31.1543 101.568 31.2864 100.37 31.6816Z"
        stroke="url(#paint7_linear_ur)"
        strokeWidth="1"
        initial={{
          pathLength: 0,
          fill: "url(#paint7_linear_ur-none)",
        }}
        animate={{
          pathLength: 1,
          fill: "url(#paint7_linear_ur)",
          transition: {
            pathLength: { duration: 5 },
            fill: { delay: 7 },
          },
        }}
      />
      <motion.ellipse
        cx="33.9808"
        cy="35"
        rx="10"
        ry="30"
        transform="rotate(-60 33.9808 35)"
        stroke="url(#paint8_linear_ur)"
        strokeWidth="2"
        initial={{
          strokeWidth: 0,
        }}
        animate={{
          strokeWidth: 2,
          transition: {
            duration: 5,
          },
        }}
      />
      <motion.circle
        cx="56.5"
        cy="48"
        r="2.5"
        fill="url(#paint14_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          cx: [56.5, 11.5, 56.5],
          cy: [48, 22, 48],
        }}
        transition={{
          scale: { duration: 1 },
          cx: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
          cy: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
        }}
      />
      <motion.ellipse
        cx="33.9808"
        cy="35"
        rx="10"
        ry="30"
        transform="rotate(60 33.9808 35)"
        stroke="url(#paint10_linear_ur)"
        strokeWidth="2"
        initial={{
          strokeWidth: 0,
        }}
        animate={{
          strokeWidth: 2,
          transition: {
            duration: 5,
          },
        }}
      />
      <motion.circle
        cx="11.5"
        cy="48"
        r="2.5"
        // transform="rotate(45 11.5 48.0355)"
        fill="url(#paint14_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          cx: [11.5, 56, 11.5],
          cy: [48, 22.5, 48],
        }}
        transition={{
          scale: { duration: 1 },
          cx: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
          cy: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
        }}
      />
      <motion.ellipse
        cx="34"
        cy="35"
        rx="10"
        ry="30"
        stroke="url(#paint12_linear_ur)"
        strokeWidth="2"
        initial={{
          strokeWidth: 0,
        }}
        animate={{
          strokeWidth: 2,
          transition: {
            duration: 5,
          },
        }}
      />
      <motion.circle
        cx="34"
        cy="9"
        r="2.5"
        fill="url(#paint14_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          cx: [34, 34, 34],
          cy: [9, 60.5, 9],
        }}
        transition={{
          scale: { duration: 1 },
          cx: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
          cy: { duration: 3, ease: "linear", repeat: Infinity, delay: 1 },
        }}
      />
      <motion.circle
        cx="34"
        cy="35"
        r="5"
        fill="url(#paint14_linear_ur)"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 2 },
          rotate: { duration: 5, ease: "linear", repeat: Infinity },
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_ur"
          x1="239.369"
          y1="42.1958"
          x2="239.369"
          y2="44.6958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="0.802083" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_ur"
          x1="235.369"
          y1="42.1958"
          x2="235.369"
          y2="44.6958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="0.802083" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_ur"
          x1="231.369"
          y1="42.1958"
          x2="231.369"
          y2="44.6958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="0.802083" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_ur"
          x1="233.243"
          y1="20.2427"
          x2="233.243"
          y2="26.2427"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_ur"
          x1="210.582"
          y1="14.1093"
          x2="206.543"
          y2="65.3702"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="0.722496" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_ur"
          x1="143.28"
          y1="10"
          x2="143.28"
          y2="50.5006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_ur"
          x1="97.299"
          y1="16.2571"
          x2="97.299"
          y2="50.713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_ur"
          x1="97.299"
          y1="16.2571"
          x2="97.299"
          y2="50.713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_ur"
          x1="33.9808"
          y1="4.99999"
          x2="33.9808"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>

        <linearGradient
          id="paint9_linear_ur"
          x1="56.415"
          y1="45.5849"
          x2="56.415"
          y2="50.5849"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_ur"
          x1="33.9808"
          y1="5.00001"
          x2="33.9808"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>

        <linearGradient
          id="paint11_linear_ur"
          x1="11.5"
          y1="45.5355"
          x2="11.5"
          y2="50.5355"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_ur"
          x1="34"
          y1="5"
          x2="34"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_ur"
          x1="34.0192"
          y1="6.5"
          x2="34.0192"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>

        <linearGradient
          id="paint14_linear_ur"
          x1="34"
          y1="30"
          x2="34"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8900" />
          <stop offset="1" stopColor="#164269" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MainLogo;
