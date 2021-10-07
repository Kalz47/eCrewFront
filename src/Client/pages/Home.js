import React, { useState, useRef } from "react";
import ServicesHome from "./HomePage/ServicesHome";
import Welcome from "./HomePage/Welcome";
import Footer from "./HomePage/Footer";
import OurTeam from "./HomePage/OurTeam";

export default function Home() {
  const myRef = useRef(null);
  const [Location, setlocation] = useState("");
  // console.log(Location);

  return (
    <div>
      <Welcome Location={Location} setlocation={setlocation} myRef={myRef} />
      <ServicesHome Location={Location} ref={myRef} />
      <OurTeam />
      <Footer />
    </div>
  );
}
