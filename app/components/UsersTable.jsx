"use client";

import React, { useState } from "react";
import Searchbar from "./Searchbar";

const UsersTable = ({ users }) => {
  const [userQuery, setUserQuery] = useState("");
  const [userList, setUserList] = useState(users);

  let searchedUsers =
    users &&
    users.filter((user) =>
      user.username.toLowerCase().includes(userQuery.toLowerCase())
    );

  const handleSort = (sortType) => {
    const sortedUsers = searchedUsers.sort((a, b) => {
      if (sortType === "a-z") {
        return a.username.localeCompare(b.username);
      }
    });

    if (sortedUsers) {
      setUserList(sortedUsers);
    }
  };

  return (
    <section className="flex justify-center items-center py-20">
      <div>
        <Searchbar userQuery={userQuery} setUserQuery={setUserQuery} />
        <table className="border">
          <caption>Front-end web developer course 2021</caption>

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col" onClick={() => handleSort("a-z")}>
                Username
              </th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody className="mt-2">
            {userList.map((user) => (
              <tr key={user.id} className="gap-4  m-2">
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersTable;
