import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail,
        };

        setUser(userData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
      {user ? (
        <div className="col-lg-4">
          <div className="text-center card-box">
            <div className="member-card pt-2 pb-2">
              <div className="thumb-lg member-thumb mx-auto">
                <img
                  src={user.picture}
                  className="rounded-circle img-thumbnail"
                  alt="profile-image"
                />
              </div>
              <div className="">
                <h4>{user.name}</h4>
                <p className="text-muted">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RandomUser;
