import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../Types/types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserItemPage: React.FC = () => {
  interface IUserItemPageParams {
    id: string;
  }

  const [user, setUser] = useState<IUser | null>(null);

  console.log(user);

  const params = useParams();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser>(
        " https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <h1>страница пользователя {user?.name} </h1>
      <h2>{user?.email} </h2>
      <button>
        {" "}
        <Link to={"/userpage"}>назад</Link>
      </button>
    </div>
  );
};

export default UserItemPage;
