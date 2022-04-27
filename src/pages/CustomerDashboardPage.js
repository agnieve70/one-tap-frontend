import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function CustomerDashboardPage() {
  const [askHelp, setAskHelp] = useState(false);
  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  let myLocation;

  function showPosition(position) {
    myLocation = [position.coords.longitude, position.coords.latitude];
    console.log(myLocation);
  }

  const handleTap = (type_of_concern) => {
    setAskHelp(true);
    Toast.fire({
      icon: "info",
      title: "Your Location was sent!",
      text: `Please wait for the rescue, it won't be longer`,
    });
  };

  const handleCancelTap = () => {
    setAskHelp(false);
    Toast.fire({
      icon: "info",
      title: "Cancelling . . .",
    });
  };

  return (
    <div className="container">
      <center>
        <img
          className="text-center mt-5 mb-3"
          width={100}
          src="./logo.png"
          alt="logo"
        />
      </center>
      <h1 className="text-danger text-center">ONE TAP</h1>
      <h6 className="text-center text-muted mb-5">Always ready to Help</h6>
      <div class="d-grid gap-2">
        {askHelp ? (
          <>
            {" "}
            <button
              onClick={() => handleCancelTap()}
              class="btn btn-danger rounded-pill py-3 mb-4"
              type="button"
            >
              CANCEL
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleTap("general_concern")}
              class="btn btn-success rounded-pill py-3 mb-4"
              type="button"
            >
              GENERAL CONCERN
            </button>
            <button
              onClick={() => handleTap("serious_concern")}
              class="btn btn-danger rounded-pill py-3"
              type="button"
            >
              SERIOUS CONCERN
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomerDashboardPage;
