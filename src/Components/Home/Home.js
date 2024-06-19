import React, { useEffect } from "react";
import goImage from "../../Assets/p-go.png";
import hHome from "../../Assets/h-lines.png";
import l1 from "../../Assets/l1.png";
import Talent from "../Talent/Talent";
import Testimony from "../Testimony/Testimony";
import Steps from "../Steps/Steps";
import Journey from "../Journey/Journey";
import Why from "../Why/Why";
import Home2 from "./Home2";

export default function Home() {


  return (
    <>
      <section className="text-gray-600 body-font pb-2">
        <Home2 />
      </section>

      <section className="text-gray-600 body-font pb-2">
        <Talent />
      </section>
      
      <section className="body-font pb-2">
        <Testimony />
      </section>

      <section className="body-font pb-4">
        <Journey />
      </section>

      <section className="body-font pb-4">
        <Why />
      </section>

    </>
  );
}
