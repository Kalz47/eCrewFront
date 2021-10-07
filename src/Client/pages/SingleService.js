import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ProductLogo from "../images/services/SingleService/productLogos/wella.png";
import ProductLogo1 from "../images/services/SingleService/productLogos/dreamron.jpg";
import ProductLogo2 from "../images/services/SingleService/productLogos/4ever.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";
import { useHistory } from "react-router";
import SingleServiceCard from "../components/Card/SingleServiceCard";
import placeholderimage from "../images/logo.png";
import Popup from "reactjs-popup";

export default function SingleService({ close, service, setIsBackDrop }) {
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
  }, [service._id]);

  const addToCartHandler = () => {
    dispatch(addToCart(service._id));
    history.push("/cart");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const handleBackdrop = () => {
    setIsBackDrop(true);
  };

  return (
    <>
      <div className="lg:w-4/5 mx-auto w-80 flex flex-wrap bg-white rounded overflow-hidden shadow-lg pin-r pin-y relative backdrop-filter backdrop-blur">
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
        {image ? (
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
        ) : (
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={placeholderimage}
          />
        )}

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {service.name} {service._id}
        </h2> */}
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 sm:font-sm">
            {service.name}{" "}
          </h1>

          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-sitetheme-blue"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-sitetheme-blue"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-sitetheme-blue"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-sitetheme-blue"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-sitetheme-blue"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-sitetheme-blue">
              {" "}
              Time : {service.time}
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-sitetheme-blue">
              {" "}
              Location : {service.location}
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s ">
              <a className="text-sitetheme-blue">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-sitetheme-blue">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-sitetheme-blue">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed w-screen">
            {service.features.map((m) => (
              <li>{m}</li>
            ))}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <img className=" ml-1  w-auto h-8" src={ProductLogo} />
              <img className=" ml-1  w-auto h-8" src={ProductLogo1} />
              <img className=" ml-1  w-auto h-8" src={ProductLogo2} />
            </div>
          </div>
          <div className="flex justify-around ">
            <div>
              <span className="title-font font-medium text-2xl text-gray-900 item">
                {service.price} LKR{" "}
              </span>
            </div>
            <div>
              {/* code start */}

              <Popup
                trigger={
                  <button
                    onClick={() => {
                      addToCartHandler();
                      handleBackdrop();
                    }}
                    className="flex w-40 justify-center py-3 px-6  rounded-full bg-sitetheme-blue text-white  hover:bg-white hover-text-sitetheme-blue border hover-border-sitetheme-blue"
                  >
                    Add
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

              {/* code stop */}
            </div>
          </div>
          <div className="m-12 h-36 flex flex-row">
            <SingleServiceCard /> <SingleServiceCard /> <SingleServiceCard />
          </div>
          <div className="w-full mt-10 mr-10 flex justify-center">
            {service.video == "" ||
            service.video == undefined ||
            service.video == null ? null : (
              <div className="">
                <ReactPlayer width="90%" height="90%" url={service.video} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
