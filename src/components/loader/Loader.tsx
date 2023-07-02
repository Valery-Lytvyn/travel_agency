import { PulseLoader } from "react-spinners";
import "./loader.scss";

function Loader() {
  return (
    <div>
      <PulseLoader className="loader" size={26} />
    </div>
  );
}

export default Loader;
