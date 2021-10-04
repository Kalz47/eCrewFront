import { SUCCESS_COUPON, FAILED_COUPON, PORT } from "./type";
import axios from "axios";

export const getCouponByName = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}coupon/${name}`);

    console.log("RES", res);

    dispatch({
      type: SUCCESS_COUPON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FAILED_COUPON,
    });
  }
};
