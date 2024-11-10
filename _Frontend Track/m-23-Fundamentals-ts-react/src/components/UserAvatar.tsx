import React from "react";

const UserAvatar = ({ imgURL }: {imgURL :string}) => {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src={imgURL}
        alt="Rounded avatar"
      ></img>
    </div>
  );
};

export default UserAvatar;
