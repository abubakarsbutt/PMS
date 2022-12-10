import React, { useEffect, useState } from "react";

import style from "./items.module.scss";

import { getAllUsers } from "../../api-services/auth";

const Items = ({ users, setUsers, setAllUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers({ setUsers, setLoading, setAllUsers });
  }, []);
  // console.log(users.users.forEach((user) => user.email));
  // const allUsers = users.users;
  // console.log(allUsers);
  return (
    <div className={style.container}>
      {loading ? (
        <>Loading...</>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>NO.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Account Status</th>
              <th>LAST ACTIVE</th>
              <th>SETTINGS</th>
            </tr>
            {users?.map(
              (
                { username, email, role, status, lastLogin, settings },
                index
              ) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{role}</td>
                  <td className={style.color}>{status}</td>
                  <td>{lastLogin.slice(0, 10)}</td>
                  <td>{settings}</td>
                </tr>
              )
            )}
            {/* {itemData.map(
            ({ NO, name, email, role, status, ACTIVE, settings }) => (
              <tr>
                <td>{NO}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td className={style.color}>{status}</td>
                <td>{ACTIVE}</td>
                <td>{settings}</td>
              </tr>
            )
          )} */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Items;

const itemData = [
  {
    NO: "1",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "2",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "3",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "CLOSED",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "4",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "5",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "OWNER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "6",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "ADMIN ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "7",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "PM ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "8",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "QA ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "9",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "10",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DESIGN ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "11",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "HOLD",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "12",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "13",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "OWNER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "14",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "ADMIN ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "15",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "PM ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "16",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "QA ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "17",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "ADMIN ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "18",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "PM ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "19",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "DEVELOPER ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
  {
    NO: "20",
    name: "XYZ123 ABC",
    email: "DEV1234567@XYZ.COM",
    role: "ADMIN ^",
    status: "ACTIVE",
    ACTIVE: "10-OCT-2022 ",
    settings: "...",
  },
];
