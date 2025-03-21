"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BirthdayCard() {
  const [currentTime, setCurrentTime] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes} AM`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Show confetti after a short delay
    const confettiTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(confettiTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Content */}
      {/* added css  */}
      <div className="bg-white rounded-3xl overflow-hidden max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"> 
        {/* Birthday card content */} 
        {/* added  */}
        <div className="w-full h-full bg-pink-100">
          {/* Confetti */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-6"
                  initial={{
                    top: "-10%",
                    left: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    top: "100%",
                    rotate: Math.random() * 360 + 360,
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    ease: "linear",
                    delay: Math.random() * 3,
                  }}
                  style={{
                    clipPath: "polygon(50% 0, 100% 25%, 50% 100%, 0 25%)",
                  }}
                />
              ))}
            </div>
          )}

          {/* Grid background */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute left-0 right-0 h-px bg-pink-200"
                style={{ top: `${(i / 12) * 100}%` }}
              />
            ))}
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute top-0 bottom-0 w-px bg-pink-200"
                style={{ left: `${(i / 12) * 100}%` }}
              />
            ))}
          </div>

          {/* Bunting flags */}
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div className="relative w-64 h-10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink-300"></div>
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 bg-pink-400"
                  style={{
                    left: `${i * 30}px`,
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    transformOrigin: "top",
                    transform: "translateX(-50%)",
                  }}
                  animate={{
                    rotateZ: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sparkles */}
          <motion.div
            className="absolute top-20 left-10 text-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            ✦
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-12 text-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          >
            ✦
          </motion.div>

          {/* Party hat */}
          <motion.div
            className="absolute top-12 right-12 w-12 h-12"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <div
              className="w-full h-full bg-pink-400 relative"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            >
              <motion.div
                className="absolute top-1 right-1 text-lg"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ✦
              </motion.div>
            </div>
          </motion.div>

          {/* Happy Birthday text */}
          <motion.div
            className="absolute top-32 left-0 right-0 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-extrabold"
              style={{
                WebkitTextStroke: "2px #333",
                textShadow: "4px 4px 0 #333",
                color: "#ff6b81",
              }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Happy
            </motion.h1>
            <motion.h1
              className="text-5xl font-extrabold mt-2"
              style={{
                WebkitTextStroke: "2px #333",
                textShadow: "4px 4px 0 #333",
                color: "#ff6b81",
              }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.3,
              }}
            >
              Birthday
            </motion.h1>
          </motion.div>

          {/* Date */}
          <motion.div
            className="absolute top-[270px] left-0 right-0 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-pink-400 rounded-full px-8 py-2 flex items-center justify-between w-64">
              <span className="text-lg font-bold">26 March 2001</span>
              <motion.span
                className="text-xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                ★
              </motion.span>
            </div>
          </motion.div>

          {/* Button */}
          <motion.div
            className="absolute top-[270px] left-0 right-0 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          ></motion.div>

          {/* Profile picture */}
          <motion.div
            className="absolute top-[340px] left-0 right-0 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          >
            <motion.div
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="absolute overflow-hidden rounded-lg group">
                <Image
                  src="/m1.jpg"
                  alt="Zoomable Image"
                  width={1000} 
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-150 bottom-20 right-3 relative"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Balloon */}
          <motion.div
            className="absolute bottom-40 left-10"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              x: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <div className="w-16 h-20 bg-pink-300 rounded-full"></div>
            <div className="w-1 h-24 bg-gray-700 mx-auto"></div>
          </motion.div>

          {/* Birthday badge */}
          <motion.div
            className="absolute bottom-40 right-10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-xs font-bold text-white"
                  style={{
                    transform: "rotate(-30deg) translateY(-6px)",
                  }}
                >
                  HAPPY
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-xs font-bold text-white"
                  style={{
                    transform: "rotate(30deg) translateY(6px)",
                  }}
                >
                  BIRTHDAY
                </div>
              </div>
              <motion.div
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Name label */}
          <motion.div
            className="absolute bottom-20 left-0 right-0 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              className="bg-pink-400 rounded-full px-6 py-1 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Tanya Modi
            </motion.div>
          </motion.div>

          {/* Pink blobs */}
          <motion.div
            className="absolute bottom-10 right-10 w-20 h-20 bg-pink-300 rounded-full opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Creator credit */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-pink-500 font-semibold">Tanuaaaa😁</p>
            <p className="text-pink-500">@tanyamodi.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function BirthdayCard() {
//   const [currentTime, setCurrentTime] = useState("");
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     // Update time
//     const updateTime = () => {
//       const now = new Date();
//       const hours = now.getHours().toString().padStart(2, "0");
//       const minutes = now.getMinutes().toString().padStart(2, "0");
//       setCurrentTime(`${hours}:${minutes} AM`);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 60000);

//     // Show confetti after a short delay
//     const confettiTimer = setTimeout(() => {
//       setShowConfetti(true);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(confettiTimer);
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
//       {/* Container with max-width to prevent overflow */}
//       <div className="bg-white rounded-3xl overflow-hidden w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4">
//         {/* Birthday Card Content */}
//         <div className="relative w-full h-full bg-pink-100 rounded-lg overflow-hidden">
//           {/* Confetti */}
//           {showConfetti && (
//             <div className="absolute inset-0 pointer-events-none overflow-hidden">
//               {Array.from({ length: 50 }).map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-6"
//                   initial={{
//                     top: "-10%",
//                     left: `${Math.random() * 100}%`,
//                     backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
//                     rotate: Math.random() * 360,
//                   }}
//                   animate={{
//                     top: "100%",
//                     rotate: Math.random() * 360 + 360,
//                   }}
//                   transition={{
//                     duration: Math.random() * 3 + 2,
//                     ease: "linear",
//                     delay: Math.random() * 3,
//                   }}
//                   style={{
//                     clipPath: "polygon(50% 0, 100% 25%, 50% 100%, 0 25%)",
//                   }}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Happy Birthday text */}
//           <motion.div
//             className="absolute top-20 left-0 right-0 text-center"
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-4xl font-extrabold"
//               style={{
//                 WebkitTextStroke: "2px #333",
//                 textShadow: "4px 4px 0 #333",
//                 color: "#ff6b81",
//               }}
//               animate={{ scale: [1, 1.03, 1] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             >
//               Happy
//             </motion.h1>
//             <motion.h1
//               className="text-4xl font-extrabold mt-2"
//               style={{
//                 WebkitTextStroke: "2px #333",
//                 textShadow: "4px 4px 0 #333",
//                 color: "#ff6b81",
//               }}
//               animate={{ scale: [1, 1.03, 1] }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: 0.3,
//               }}
//             >
//               Birthday
//             </motion.h1>
//           </motion.div>

//           {/* Date */}
//           <motion.div
//             className="absolute top-[200px] left-0 right-0 flex justify-center"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <div className="bg-pink-400 rounded-full px-6 py-2 flex items-center justify-between w-56">
//               <span className="text-md font-bold">26 March 2001</span>
//               <motion.span
//                 className="text-lg"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "linear",
//                 }}
//               >
//                 ★
//               </motion.span>
//             </div>
//           </motion.div>

//           {/* Profile Picture */}
//           <motion.div
//             className="absolute top-[280px] left-0 right-0 flex justify-center"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
//           >
//             <motion.div
//               className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white"
//               animate={{ rotate: [0, 2, 0, -2, 0] }}
//               transition={{
//                 duration: 6,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "easeInOut",
//               }}
//             >
//               <Image
//                 src="/m1.jpg"
//                 alt="Zoomable Image"
//                 width={1000} // High resolution image
//                 height={600}
//                 className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-125"
//               />
//             </motion.div>
//           </motion.div>

//           {/* Name Label */}
//           <motion.div
//             className="absolute bottom-12 left-0 right-0 flex justify-center"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.9 }}
//           >
//             <motion.div
//               className="bg-pink-400 rounded-full px-4 py-1 text-md font-semibold"
//               whileHover={{ scale: 1.05 }}
//             >
//               Tanya Modi
//             </motion.div>
//           </motion.div>

//           {/* Creator Credit */}
//           <div className="absolute bottom-4 left-0 right-0 text-center">
//             <p className="text-pink-500 font-semibold text-sm">Tanuaaaa😁</p>
//             <p className="text-pink-500 text-xs">@tanyamodi.dev</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
