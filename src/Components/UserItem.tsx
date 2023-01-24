import React, { FC } from "react";
import { IUser } from "../Types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: "2px solid red" }}>
      {user.id}. {user.name} проживает в городе {user.address.city}
    </div>
  );
};

export default UserItem;
