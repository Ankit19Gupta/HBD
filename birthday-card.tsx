"use client";

import { useEffect, useState } from "react";
import { Heart, Cake, Gift, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BirthdayCard() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloons, setBalloons] = useState<
    { id: number; x: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Create random balloons
    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-4 overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
            />
          ))}
        </div>
      )}
      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${balloon.x}%`,
            animationDelay: `${balloon.delay}s`,
            color: `hsl(${Math.random() * 360}, 100%, 65%)`,
          }}
        >
          <div className="text-4xl">🎈</div>
        </div>
      ))}
      {/* // some lines are added */}
      <Card className="w-screen h-screen max-w-mds bg-white/80 backdrop-blur-sm border-2 border-pink-300 shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-pink-200 rounded-full opacity-70" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-purple-200 rounded-full opacity-70" />

        <CardContent className="p-6 relative z-10">
          <div className="flex justify-center mb-6">
            <Cake className="h-16 w-16 text-pink-500 animate-pulse" />
          </div>

          <h1 className="text-3xl font-bold text-center text-pink-600 mb-4 animate-bounce">
            Happy Birthday!
          </h1>

          <p className="text-center text-gray-700 mb-6 leading-relaxed">
            On this special day, I wish you all the happiness in the world. May
            your day be filled with laughter, love, and unforgettable moments!
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            <Gift className="h-8 w-8 text-purple-500 animate-bounce" />
            <PartyPopper className="h-8 w-8 text-yellow-500 animate-spin" />
          </div>

          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowConfetti(true)}
            >
              Celebrate!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Heart, Cake, Gift, PartyPopper } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function BirthdayCard() {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [balloons, setBalloons] = useState(
//     [] as { id: number; x: number; delay: number }[]
//   );

//   useEffect(() => {
//     // Create random balloons
//     const newBalloons = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 90 + 5, // Prevent balloons from sticking to edges
//       delay: Math.random() * 5,
//     }));
//     setBalloons(newBalloons);
//   }, []);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-4 overflow-hidden">
//       {/* Confetti */}
//       {showConfetti && (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {Array.from({ length: 100 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-confetti"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `-5%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
//                 width: `${Math.random() * 8 + 4}px`,
//                 height: `${Math.random() * 8 + 4}px`,
//               }}
//             />
//           ))}
//         </div>
//       )}
//       {/* Floating Balloons */}
//       {balloons.map((balloon) => (
//         <div
//           key={balloon.id}
//           className="absolute bottom-0 animate-float"
//           style={{
//             left: `${balloon.x}%`,
//             animationDelay: `${balloon.delay}s`,
//           }}
//         >
//           <div className="text-4xl">🎈</div>
//         </div>
//       ))}

//       {/* Birthday Card */}
//       <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-2 border-pink-300 shadow-xl relative overflow-hidden flex flex-col items-center justify-center p-6">
//         {/* Decorative Circles */}
//         <div className="absolute -right-12 -top-12 w-32 h-32 bg-pink-200 rounded-full opacity-70" />
//         <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-purple-200 rounded-full opacity-70" />

//         <CardContent className="relative z-10">
//           <div className="flex justify-center mb-4">
//             <Cake className="h-16 w-16 text-pink-500 animate-pulse" />
//           </div>

//           <h1 className="text-3xl font-bold text-center text-pink-600 mb-4 animate-bounce">
//             Happy Birthday!
//           </h1>

//           <p className="text-center text-gray-700 mb-6 leading-relaxed">
//             On this special day, I wish you all the happiness in the world. May
//             your day be filled with laughter, love, and unforgettable moments!
//           </p>

//           <div className="flex justify-center space-x-4 mb-6">
//             <Heart className="h-8 w-8 text-red-500 animate-pulse" />
//             <Gift className="h-8 w-8 text-purple-500 animate-bounce" />
//             <PartyPopper className="h-8 w-8 text-yellow-500 animate-wiggle" />
//           </div>

//           <div className="text-center">
//             <Button
//               className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//               onClick={() => setShowConfetti(true)}
//             >
//               Celebrate!
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
