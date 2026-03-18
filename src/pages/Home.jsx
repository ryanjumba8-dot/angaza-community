import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import your 12 images
import img1 from "../assets/Angaza bkgnd5.jpeg";
import img2 from "../assets/Angaza bkgrnd1.jpeg";
import img3 from "../assets/Angaza bkgrnd2.jpeg";
import img4 from "../assets/Angaza bkgrnd4.jpeg";
import img5 from "../assets/Angaza bkgrnd6.jpeg";
import img6 from "../assets/Angaza bkngrnd3.jpeg";
import img7 from "../assets/Angaza7.jpeg";
import img8 from "../assets/Angaza8.jpeg";
import img9 from "../assets/Angaza9.jpeg";
import img10 from "../assets/angaza10.jpeg";
import img11 from "../assets/Angaza11.jpeg";
import img12 from "../assets/Angaza12.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 500); // small delay before switching image
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Youth. Transforming Communities.
        </h2>

        <p className="mb-8 text-lg">
          Angaza Community is dedicated to empowering young people 
          through mentorship, outreach programs, and community impact initiatives.
        </p>

        <Link
          to="/volunteer"
          className="bg-green-600 px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}