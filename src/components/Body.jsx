import { useState } from "react";
import { Cascader } from "antd";

export default function Body(props) {
  const [form, setForm] = useState({});
  const [make, setMake] = useState();
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isModelDisabled, setIsModelDisabled] = useState(true);

  async function formSubmit(e) {
    e.preventDefault(); /// stops the page refresh
    try {
      const results = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(results);
      const data = await results.json();
      console.log(data);
      setForm({ make: "", model: "", year: "", service: "" });
    } catch (err) {
      console.error();
    }
  }
  const updateMake = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMake(event.target.value);
    setIsModelDisabled(false);
  };
  const updateModel = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setModel(event.target.value);
  };
  const updateYear = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setYear(event.target.value);
  };
  const updateServiceType = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setServiceType(event.target.value);
  };

  console.log({ make });

  const listOfMakes = [
    { value: "Honda", label: "Honda" }, /// into json file as an option
    { value: "Toyota", label: "Toyota" },
    { value: "Ford", label: "Ford" },
  ];

  const modelsByMake = {
    Honda: [
      { value: "accord", label: "accord" },
      { value: "odyssee", label: "odyssee" },
      { value: "civic", label: "civic" },
    ],
    Toyota: [
      { value: "Corolla", label: "Corolla" },
      { value: "Camry", label: "Camry" },
      { value: "Supra", label: "Supra" },
    ],
  };

  return (
    <>
      <h1 className="body">Book a service for your vehicle</h1>
      <div>
        <form className="body-form" onSubmit={formSubmit}>
          {/* <label>Make</label> */}
          <Cascader
            placeholder="Choose Make"
            defaultValue=""
            onChange={(value) => setMake(value)}
            options={listOfMakes}
          />
          {/* <select value={form.make} name="make" onChange={updateMake}>
            <option value="" selected>
              Choose Make
            </option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
          </select> */}
          <br />
          <label>Model</label>
          {make && (
            <Cascader
              placeholder="Choose Model"
              defaultValue=""
              options={modelsByMake[make]}
            />
          )}
          <select
            value={form.model}
            name="model"
            onChange={updateModel}
            disabled={isModelDisabled}
          >
            <option value="" selected>
              Choose Model
            </option>
            {make === "Honda" && <option value="Accord">Accord</option>}
            {make === "Toyota" && <option value="Corolla">Corolla</option>}
            {make === "Ford" && <option value="Escort">Escort</option>}
          </select>
          <label>Year</label>
          <select value={form.year} name="year" onChange={updateYear}>
            <option value="" selected>
              Choose Year
            </option>

            {Array.from({ length: 100 }, (_, i) => 2022 - i).map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}

            {/* <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option> */}
          </select>
          <label>Type of Service</label>
          <select
            value={form.service}
            name="service"
            onChange={updateServiceType}
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
