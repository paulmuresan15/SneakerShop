import { IoPersonCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

function RegisterIcon() {
  return (
    <div>
      <IconContext.Provider value={{ className: "navbarIcon" }}>
        {" "}
        <IoPersonCircle />{" "}
      </IconContext.Provider>
    </div>
  );
}

export default RegisterIcon;
