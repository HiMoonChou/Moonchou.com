import React, { Component } from "react";
import { FiArrowUpRight } from "react-icons/fi";

class Linkedin extends React.Component {
  render() {
    return (
      <a href="http://linkedin.com/in/meng-zhou-b54065164" className="hover:underline flex items-center">
        Linkedin
        <FiArrowUpRight className="text-lg" />
      </a>

    );
  }
}

export default Linkedin;
