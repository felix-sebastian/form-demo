import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://randomuser.me/api/?results=50&nat=au&exc=login";

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(result => setUsers(result.data.results));
  }, [setUsers]);

  return users;
};
