// const base = "http://localhost:5000/";
const base = "https://asm02-backend.onrender.com/";

const API_URL_TRANSACTION_USER = base + "transactions/user/";
const API_URL_USER = base + "users/";
const API_URL_HOTEL_USER = base + "hotels/user/";
const API_URL_HOTEL_ADMIN = base + "hotels/admin/";

export const url_user_login = API_URL_USER + "user-login";

export const url_user_signup = API_URL_USER + "user-signup";

export const url_hotels = API_URL_HOTEL_ADMIN + "hotels/";

export const url_hotel = API_URL_HOTEL_ADMIN + "/";

export const url_hotels_top_rate = API_URL_HOTEL_USER + "top-rate";

export const url_hotels_search = API_URL_HOTEL_USER + "search";

export const url_hotel_not_booked_rooms =
  API_URL_HOTEL_USER + "not-booked-rooms?";

export const url_create_transaction = API_URL_TRANSACTION_USER + "create";

export const url_get_transaction = API_URL_TRANSACTION_USER;
