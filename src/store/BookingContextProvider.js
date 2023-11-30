import { useState } from "react";
import BookingContext from "./booking-context";

const BookingContextProvider = (props) => {
  const [searchFields, setSearchFields] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        searchFields,
        setSearchFields,
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
        showBookingForm,
        setShowBookingForm,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
