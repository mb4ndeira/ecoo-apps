"use client";
import React, { PureComponent } from "react";
import Image from "next/image";
import logo from "../../assets/logo/dark.svg";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="fixed bottom-0 mt-10 flex items-center p-4 md:mx-auto lg:ml-28 mb-4 md:col-span-2">
        <Image src={logo} alt="Logo" width="112" height="37" className="mr-4" />
        <span>
          Versão 1.0.0 - Copyright © e-COO 2023.
          <br /> Todos os direitos reservados
        </span>
      </div>
    );
  }
}

export default Footer;
