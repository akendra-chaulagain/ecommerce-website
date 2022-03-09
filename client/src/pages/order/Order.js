import React from "react";
import { useSelector } from "react-redux";
import Login from "../login/Login";

const Order = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {/* if the user is nor register then first login page open after login order page will on */}
      {user ? (
        <>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            nobis similique? Expedita odio assumenda unde possimus distinctio
            laborum eaque perferendis nam! Odit aliquid assumenda pariatur minus
            impedit officiis obcaecati, laudantium eligendi expedita reiciendis
            tempora tenetur libero ipsam optio recusandae, corporis deleniti a
            vel nihil consectetur asperiores, eos sint eius quod!
          </h1>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default Order;
