import React, { useEffect, useState } from "react";
import Cards_StaffList from "./Cards_StaffList";

const URL = "https://api.github.com/users";
function StaffList() {
  const [userList, setUserList] = useState([]);

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUserList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {userList.map((item) => {
        return (
          <Cards_StaffList
            title={item.login}
            imageURL={item.avatar_url}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default StaffList;
