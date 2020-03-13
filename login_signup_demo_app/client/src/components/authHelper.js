import { signout } from "./apiHelper/profileHelper";
const auth = {
  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (sessionStorage.getItem("jwt"))
      return JSON.parse(sessionStorage.getItem("jwt"));
    else return false;
  },
  isHotelManager() {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("userrole") === "hotelmanager") return true;
    else return false;
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  },
  signout(cb) {
    if (typeof window !== "undefined") sessionStorage.removeItem("jwt");
    cb();
    localStorage.removeItem("id");
    signout().then(data => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  }
};
export default auth;
