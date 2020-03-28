import React from "react";
import ReactFlagsSelect from "react-flags-select";
//import css module
import "react-flags-select/css/react-flags-select.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ReactFlagsSelect defaultCountry="US" />

      <div>Choose your country and find out more about staying safe</div>
    </footer>
  );
}
