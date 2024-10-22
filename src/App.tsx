import { useEffect } from "react";
import euge from "./assets/euge.png";

declare const confetti: any;

function App() {
  useEffect(() => {
    confetti.start();
  }, []);
  return (
    <div className="space-y-8 p-4">
      <h1 className="flex justify-center font-bold text-6xl">
        HAPPY BIRTHDAY EUGENIA 👩‍⚕️
      </h1>
      <div className="flex justify-center">
        <img src={euge} alt="" />
      </div>
      <p className="flex justify-center">
        please enjoy these clips of your friends wishing you a hbd 😘
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/Yrt50F3oIz0?si=oWUzRvg4s8s5Em2x"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-h-96"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
