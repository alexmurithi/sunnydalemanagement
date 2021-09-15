import React from "react";
import { Typography, Box } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { NavLink } from "react-router-dom";
import FacebookIcon from "../../Assets/svg/SocialMedia/facebook.svg";
import InstagramIcon from "../../Assets/svg/SocialMedia/instagram.svg";
import TwitterIcon from "../../Assets/svg/SocialMedia/twitter.svg";
import LinkedInIcon from "../../Assets/svg/SocialMedia/linkedin.svg";
const ContactInformation = () => {
  return (
    <>
      <Typography variant={"h4"} gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="caption">
        Fill up the form and our team will respond to you as soon as possible
      </Typography>
      <Box display="flex" flexDirection="column" pt={4}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          py={1}
          justifyContent={"space-between"}
        >
          <PhoneIcon />
          <Typography variant={"h6"}>+254712293003</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          py={1}
          justifyContent={"space-between"}
        >
          <EmailIcon />
          <Typography variant={"h6"}>sunnydalemanagement@gmail.com</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          py={1}
          justifyContent={"space-between"}
        >
          <LocationOnIcon />
          <Typography variant="h6">Meru & Thika</Typography>
        </Box>
      </Box>

      <Box pt={4} display={"flex"} justifyContent={"space-between"}>
        <NavLink to="">
          <img src={FacebookIcon} alt="Sunnydale | Facebook" height={30} />
        </NavLink>
        <NavLink to={""}>
          <img src={InstagramIcon} alt="Sunnydale | Instagram" height={30} />
        </NavLink>
        <NavLink to={""}>
          <img src={TwitterIcon} alt="Sunnydale | Instagram" height={30} />
        </NavLink>
        <NavLink to="">
          {" "}
          <img src={LinkedInIcon} alt="Sunnydale | Instagram" height={30} />
        </NavLink>
      </Box>
    </>
  );
};
export default React.memo(ContactInformation);
