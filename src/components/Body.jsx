import { useState } from "react";
import { Cascader, Input } from "antd";
import React from "react";
export default function Body(props) {
  const [form, setForm] = useState({});
  // const [make, setMake] = useState("");
  // const [model, setModel] = useState("");
  // const [year, setYear] = useState("");
  // const [serviceType, setServiceType] = useState();
  // const [customerName, setCustomerName] = useState();
  // const [customerLastName, setCustomerLastName] = useState();
  // const [isModelDisabled, setIsModelDisabled] = useState(true);

  async function formSubmit(e) {
    e.preventDefault(); /// stops the page refresh
    try {
      const results = await fetch( "http://localhost:5000/newVehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(results);
      const data = await results.json();
      console.log(data);
      setForm({});
    } catch (err) {
      console.error();
    }
  }
  const updateMake = (value) => {
    setForm({ ...form, make: value[0] });
    // setMake(event.target.value);
    console.log(form);
    console.log(value);
  };
  const updateModel = (value) => {
    setForm({ ...form, model: value[0] });
    // setModel(event.target.value);
    console.log(form);
    console.log(value);
  };
  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    // setYear(event.target.value);
  };
  // const updateServiceType = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   // setServiceType(event.target.value);
  // };
  // const updateCustomerLastName = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   // setCustomerLastName(event.target.value);
  // };
  // const updateCustomerName = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   // setCustomerName(event.target.value);
  // };

  // console.log({ make });

  const listOfMakes = [
    { value: "Honda", label: "Honda" }, /// into json file as an option
    { value: "Toyota", label: "Toyota" },
    { value: "Ford", label: "Ford" },
  ];

  const modelsByMake = {
    Honda: [
      { value: "Accord", label: "Accord" },
      { value: "Odyssee", label: "Odyssee" },
      { value: "Civic", label: "Civic" },
    ],
    Toyota: [
      { value: "Corolla", label: "Corolla" },
      { value: "Camry", label: "Camry" },
      { value: "Supra", label: "Supra" },
    ],
    Ford: [
      { value: "Malibu", label: "Malibu" },
      { value: "Impala", label: "Impala" },
      { value: "Mustang", label: "Mustang" },
    ],
  };

  return (
    <>
      <h1 className="body">Book a service for your vehicle</h1>
      <div>
        <form className="body-form" onSubmit={formSubmit}>
          <label>Customer Information</label>
          <br />
          <Input
            required
            placeholder="First Name"
            className="input-name"
            onChange={updateForm}
            value={form.firstName}
            name="FirstName"
            
          />
          <Input
            required
            placeholder="Last Name"
            className="input-name"
            onChange={updateForm}
            value={form.lastName}
            name="LastName"
          />
          <Input
            required
            placeholder="Address"
            className="input-name"
            onChange={updateForm}
            value={form.Address}
            name="Address"
          />
          <br />
          <label>Vehicle Information</label>
          <br />
          <Cascader
            placeholder="Choose Make"
            defaultValue=""
            onChange={updateMake}
            value={form.make}
            options={listOfMakes}
          />
          <br />

          {form.make && (
            <Cascader
              placeholder="Choose Model"
              defaultValue=""
              options={modelsByMake[form.make]}
              value={form.model}
              onChange={updateModel}
            />
          )}
          <br />
          <label>Year</label>
          <select value={form.year} name="year" onChange={updateForm}>
            {Array.from({ length: 100 }, (_, i) => 2022 - i).map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>

          {/* <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option> */}

          <label>Type of Service</label>
          <select
            value={form.serviceType}
            name="service"
            onChange={updateForm}
          >
            <option value="" selected>
              Choose Service
            </option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Repair">Tire Repair</option>
            <option value="Diagnosis">Diagnosis</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
