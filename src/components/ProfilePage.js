import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = "https://api.github.com/users";
function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const newProfile = data.find((item) => item.id === parseInt(id));
    setProfile(newProfile);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(useParams());
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-img-top">
            <img src={profile.avatar_url} className="img-fluid" />
          </div>
          <h5 className="card-title">{profile.login}</h5>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
