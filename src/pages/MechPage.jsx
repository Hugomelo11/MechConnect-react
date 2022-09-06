import { useEffect, useState } from "react";
import React from "react";
import Vehicle from "../components/Vehicle";

export default function MechPage() {
  // const WorkList = ()=>{
  const [allVehicles, setAllVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((response) => response.json())
      .then((data) => setAllVehicles(data));
  }, []);

  return (
    <>
      {allVehicles.map((vehicle) => {
        return <Vehicle vehicle={vehicle} />;
      })}
    </>
  );
}
