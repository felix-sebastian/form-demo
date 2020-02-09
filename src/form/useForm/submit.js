import axios from "axios";

export default (storeType, user, metroDetails, role, date, victoria, suburb) =>
  axios.post("https://webhook.site/64461740-176d-4c96-987c-7c1d5038b081", {
    storeType,
    user,
    metroDetails,
    role,
    date,
    victoria,
    suburb
  });
