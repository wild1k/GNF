import React, { useState, useEffect } from "react";
import EventCard from "./../components/UserProfile/EventCard";
import "../index";
import API from "../utils/API"
import UserInfo from "../components/UserProfile/UserProfile";

function MyAccount() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      // console.log(res.data.user);
      setCurrentUser(res.data.user);
    });
  }, []);

  return (
    <>
     
  {currentUser? <h1>Welcome {currentUser.first_name}! Here are your events coming up:</h1>:null} 
   
      <UserInfo currentUser={currentUser}/>
      {/* <Button /> */}

     
      <EventCard/>
    </>
  );
}

export default MyAccount;
