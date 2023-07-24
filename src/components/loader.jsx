import loader from "../assets/loader.svg";
import complete from "../assets/complete.svg";
import error from "../assets/error.svg";
function Loader({ status, size }) {
  return status === "loading" ? (
    <img
      src={loader}
      alt="isperaxlogogray8e6d311asvg1355"
      width={size}
      height={size}
    />
  ) : status === "complete" ? (
    <img
      src={complete}
      alt="isperaxlogogray8e6d311asvg1355"
      width={size}
      height={size}
    />
  ) : status === "error" ? (
    <img
      src={error}
      alt="isperaxlogogray8e6d311asvg1355"
      width={size}
      height={size}
    />
  ) : null;
}
export default Loader;
