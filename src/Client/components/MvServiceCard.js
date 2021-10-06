import React from "react";

export default function MvServiceCard() {
  return (
    <div>
      <div className="mt-20 px-2 flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div
          className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
          data-movie-id="438631"
        >
          <button className=" text-gray-300  absolute top-2 right-2">
            {" "}
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out "></div>
          <div
            className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
            // data-lity=""
            // href="https://www.youtube.com/embed/aSHs224Dge0"
          >
            <div className="poster__info align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  {/* <div
                    className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                    data-unsp-sanitized="clean"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                      Trailer
                    </div>
                  </div> */}
                  <h3
                    className="text-2xl font-bold text-white"
                    data-unsp-sanitized="clean"
                  >
                    Title
                  </h3>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity text-sitetheme-blue">
                      1 hour{" "}
                    </div>
                    <div className="text-sm text-gray-700">Time:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release text-sitetheme-blue">Dehiwala </div>
                    <div className="text-sm text-gray-700">Location:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release text-sitetheme-blue">123 LKR</div>
                    <div className="text-sm text-gray-700">Price:</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-sitetheme-blue mb-2">
                    Description:
                  </div>
                  <p className="text-xs text-gray-700 mb-6">
                    Paul Atreides, a brilliant and gifted young man born into a
                    great destiny beyond his understanding, must travel to the
                    most dangerous planet in the universe to ensure the future
                    of his family and his people. As malevolent forces explode
                    into conflict over the planet's exclusive supply of the most
                    precious resource in existence-a commodity capable of
                    unlocking humanity's greatest potential-only those who can
                    conquer their fear will survive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <img
              className="absolute inset-0 transform w-full -translate-y-4"
              src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
              style="filter: grayscale(0);"
            /> */}
          <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
            <div
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-sitetheme-blue"
              href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
              target="_blank"
              data-unsp-sanitized="clean"
            >
              <div className="text-sm text-white ml-2 ">Add Item</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
