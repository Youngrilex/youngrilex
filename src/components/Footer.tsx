import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div>
        {"Copyright © "}
        <Link color="inherit" to="/page2">
          Youngrilex Artwork
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
    </div>
  );
};

export default Footer;
