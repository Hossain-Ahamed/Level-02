import React from "react";
import UserAvatar from "../components/UserAvatar";
import WithBorder from "../components/WithBorder";

const UserWithBorder =  WithBorder(UserAvatar);

const GameResult = () => {

    const url = "https://lh3.googleusercontent.com/a/ACg8ocJ8l6DE5POkVUp1VWKCGfa8KEWHE0gcybAO41tIzV2REX_CmJY=s288-c-no"
  return (
    <div className="flex gap-3">
      <UserAvatar  imgURL={url}/>
      <UserWithBorder imgURL ={url} />
      <UserAvatar imgURL ={url}/>
      <UserAvatar  imgURL ={url}/>
    </div>
  );
};

export default GameResult;
