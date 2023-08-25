import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function FooterMobile() {
  return (
    <div>
      <Accordion
        disableGutters={true}
        sx={{
          borderRight: 0,
          borderLeft: 0,
          boxShadow: "none",
          padding: "0 2px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <p className="font-medium text-sm tracking-wide">HELP</p>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <ul className="space-y-4 text-slate-500">
            <li>FAQ</li>
            <li>Services</li>
            <li>Ordering</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>Sizing</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters={true}
        sx={{
          borderRight: 0,
          borderLeft: 0,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <p className="font-medium text-sm tracking-wide">MY ACCOUNT</p>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <ul className="space-y-4 text-slate-500">
            <li>Login</li>
            <li>Register</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters={true}
        sx={{
          borderRight: 0,
          borderLeft: 0,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <p className="font-medium text-sm tracking-wide">ABOUT US</p>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <ul className="space-y-4 text-slate-500">
            <li>Our Vision</li>
            <li>Investors</li>
            <li>Sponsors</li>
            <li>Athletes</li>
            <li>Elite Underground Origin</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters={true}
        sx={{
          borderRight: 0,
          borderLeft: 0,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <p className="font-medium text-sm tracking-wide">CONTACT US</p>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <ul className="space-y-4 text-slate-500">
            <li>Email Sign Up</li>
            <li>Contact Us</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterMobile;
