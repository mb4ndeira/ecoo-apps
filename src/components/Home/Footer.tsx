"use client";
import React, { PureComponent } from "react";
import Image from "next/image";
import logo from "@/assets/logo/dark.svg";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="mobile:static absolute bottom-0 mt-auto flex items-center mb-4">
        <Image src={logo} alt="Logo" width="112" height="37" className="mr-4" />
        <span className="text-base mobile:text-sm sm-mobile:text-xs">
          Versão 1.0.0 - Copyright © e-COO 2023.
          <br /> Todos os direitos reservados
        </span>
      </div>
    );
  }
}

export default Footer;
