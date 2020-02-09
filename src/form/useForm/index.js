import { useState } from "react";
import useUsers from "./useUsers";
import { useHistory } from "react-router-dom";
import validate from "./validate";
import failed from "./failed";
import submit from "./submit";
import storeTypes from "../storeTypes";
import roles from "../roles";
import moment from "moment";

export default () => {
  const users = useUsers();
  const [storeType, setStoreType] = useState(null);
  const [metroDetails, setMetroDetails] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [date, setDate] = useState(new Date());
  const [victoria, setVictoria] = useState(0);
  const [suburb, setSuburb] = useState(null);
  const [hint, setHint] = useState(false);
  const history = useHistory();

  const attempt = () => {
    let validation = validate(
      storeType,
      user,
      metroDetails,
      role,
      date,
      victoria,
      suburb
    );

    if (validation === null) {
      history.push("/pending");

      submit(
        storeTypes[storeType],
        {
          id: users[user].id.value,
          title: users[user].name.title,
          firstName: users[user].name.first,
          lastName: users[user].name.last
        },
        metroDetails || undefined,
        roles[role],
        moment(date).format("DD/MM/YYYY"),
        victoria === 0 ? true : false,
        suburb || undefined
      ).then(() => {
        history.push("/success");

        window.setTimeout(
          () =>
            window.open(
              "https://webhook.site/#!/64461740-176d-4c96-987c-7c1d5038b081",
              "_blank"
            ),
          2000
        );
      });
    } else {
      alert(failed);
      setHint(true);
      history.push("/" + validation);
    }
  };

  return {
    storeType,
    setStoreType,
    users,
    user,
    setUser,
    metroDetails,
    setMetroDetails,
    role,
    setRole,
    date,
    setDate,
    victoria,
    setVictoria,
    suburb,
    setSuburb,
    submit: attempt,
    hint
  };
};
