import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Popup from "reactjs-popup";
import { addToCart } from "../../actions/cart";

export default function MvServiceCard({ close, service, setIsBackDrop }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState();
  // const handleImage = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8000/api/servicesImage/${service._id}`
  //   );
  //   console.log("IMage ==> ", res);
  // };

  useEffect(() => {
    setImage(`http://localhost:8000/api/servicesImage/${service._id}`);
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(service._id));
    history.push("/cart");
  };
  const handleButton = () => {
    close();
    setIsBackDrop(false);
  };
  const goToCart = () => {
    history.push("/cart");
  };

  const handleBackdrop = () => {
    setIsBackDrop(true);
  };

  return (
    <div>
      <div className="mt-20 px-2 flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div
          className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
          data-movie-id="438631"
        >
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out mt-40 "></div>
          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
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
                    className="text-2xl font-bold text-sitetheme-blue"
                    data-unsp-sanitized="clean"
                  >
                    {service.name}{" "}
                  </h3>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity text-sitetheme-blue">
                      {service.time}{" "}
                    </div>
                    <div className="text-sm text-gray-700">Time:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release text-sitetheme-blue">
                      {service.location}{" "}
                    </div>
                    <div className="text-sm text-gray-700">Location:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release text-sitetheme-blue">
                      {service.price} LKR
                    </div>
                    <div className="text-sm text-gray-700">Price:</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-sitetheme-blue mb-2">
                    Description:
                  </div>
                  <p className="text-xs text-gray-700 mb-6">
                    {service.features.map((f) => (
                      <div>{f}</div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row relative pb-2 space-x-4 z-10">
            <div
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-sitetheme-blue"
              href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
              target="_blank"
              data-unsp-sanitized="clean"
            >
              <Popup
                trigger={
                  <button
                    onClick={() => {
                      return addToCartHandler();
                      handleBackdrop();
                    }}
                    className="text-sm text-white"
                  >
                    Add Item
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                      <button
                        className=" text-gray-300  absolute top-2 right-2"
                        onClick={() => {
                          close();
                          setIsBackDrop(false);
                        }}
                      >
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
                      {/* <!--content--> */}
                      <div className="">
                        {/* <!--body--> */}
                        <div className="text-center p-5 flex-auto justify-center">
                          <span className="w-16 h-16 flex items-center text-sitetheme-blue mx-auto mb-8">
                            <i class="far fa-check-circle fa-5x"></i>
                          </span>
                          <p className="text-sm text-gray-500 px-8">
                            A new item has been added to your Shopping Cart. You
                            {/* now have {cartItems.length} items in your Shopping */}
                            Cart.
                          </p>
                        </div>
                        {/* <!--footer--> */}
                        <div className="p-3  mt-2 text-center space-x-4 md:block">
                          <button
                            onClick={goToCart}
                            className="mb-2 md:mb-0 bg-sitetheme-blue border border-thbg-sitetheme-blue px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-white hover-text-sitetheme-blue hover-border-sitetheme-blue"
                          >
                            View Shopping Cart{" "}
                          </button>
                          <button
                            onClick={() => {
                              close();
                            }}
                            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-sitetheme-blue text-sitetheme-blue rounded-full hover:shadow-lg hover-bg-sitetheme-blue hover:text-white"
                          >
                            Contnue Shopping{" "}
                          </button>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="flex flex-row relative pb-10 space-x-4 z-10">
            <div
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-sitetheme-blue"
              href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
              target="_blank"
              data-unsp-sanitized="clean"
            >
              <div onClick={handleButton} className="text-sm text-white ">
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
