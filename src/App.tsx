import { useEffect } from "react";
import "./App.css";
import euge from "./assets/euge.png";

declare const confetti: any;

function App() {
  useEffect(() => {
    confetti.start();
  }, []);
  return (
    <div className="space-y-8 p-4">
      <h1 className="flex justify-center font-bold text-6xl mt-4">
        HAPPY BIRTHDAY EUGENIA 👩‍⚕️
      </h1>
      <div className="party-zone">
        <div className="flex justify-center items-center">
          <img src={euge} alt="euge" className="w-96 h-auto" />
          <div className="cake flex justify-center">🎂</div>
        </div>
        <h2 className="text-center text-4xl text-purple-700">
          You're EUGE now! 💪🏋️‍♀️ (always have been)
        </h2>
      </div>
      <p className="text-center text-3xl text-orange-900">
        Please enjoy these clips of your friends wishing you a HBD 😘
      </p>
      <div className="flex justify-center">
        {/* <div className="w-full max-w-2xl"> */}
        <iframe
          src="https://www.youtube.com/embed/Yrt50F3oIz0?si=oWUzRvg4s8s5Em2x"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-96 h-96"
        ></iframe>
        {/* </div> */}
      </div>
      <div className="flex justify-center">
        <button
          className="button"
          onClick={() => alert("YOU ARE AMAZING! 🌈✨")}
        >
          Click for a Birthday Surprise!
        </button>
        <button
          className="button"
          onClick={() =>
            (document.body.style.transform = `rotate(${
              Math.random() * 360
            }deg)`)
          }
        >
          Don't Click This One!
        </button>
      </div>

      <div className="party-zone">
        <h3 className="text-green-500">Fun Birthday Facts:</h3>
        <ul className="list-disc text-left text-base">
          <li>
            You share a birthday with exactly everyone else born on this day! 🤯
          </li>
          <li>You're now officially older than you've ever been before! 📈</li>
          <li>
            Studies have shown that Eugenia is very hot 🥵🔥🌶️ (source: dye)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
