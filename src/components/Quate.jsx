import React, { useState, useEffect } from "react";
import axios from "axios";
import rotate from "../assets/rotate.png";
import cookie from "../assets/cookie.png";

const Quate = () => {
  const [cookies, setCookies] = useState(false);
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Don't waste a Time you feel later",
  });

  const managecokkie = () => {
    setCookies(!cookies);
  };

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
    managecokkie();
  };

  loadQuotes();

  const text = `${quote.text}`;
  const tab = "Tab to Break"

  return (
    <main className="mx-auto flex flex-col justify-around items-center h-screen">
      <div className="flex justify-center py-4 mx-auto">
        <h2
          className={
        " text-white  font-semibold text-xl md:text-3xl md:font-bold  text-center py-5 max-w-[400px] md:max-w-[600px] lg:max-w-full xl:max-w-full"
          }
        >
          {cookies ? text : tab}
        </h2>
      </div>
      <div>
        <img
          src={cookie}
          alt="cookie_image"
          onClick={random}
          className={"h-64 w-56 md:w-72 md:h-72 -mt-5" + (cookies ? " translate-y-28" : "")  }
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex w-16 p-3 rounded-lg bg-green-500 ">
          <button type="button">
            <img
              src={rotate}
              alt="flip_icon"
              onClick={random}
              className={
                "mx-auto h-7 ml-1 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-10 xl:w-10 "
              }
            />
          </button>
        </div>
        <p className="text-white font-bold text-xl relative">One More</p>
      </div>
    </main>
  );
};

export default Quate;
