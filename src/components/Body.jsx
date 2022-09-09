import { useState } from "react";
import { Cascader, Input, Form, Button } from "antd";
import { Modal } from "antd";
import React from "react";

export default function Body(props) {
  const [form, setForm] = useState({});

  async function formSubmit(e) {
    e.preventDefault(); /// stops the page refresh
    try {
      const results = await fetch("http://localhost:5000/newVehicle", {
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
    handleOk();
  }
  const updateMake = (value) => {
    setForm({ ...form, make: value[0] });

    console.log(form);
    console.log(value);
  };
  const updateModel = (value) => {
    setForm({ ...form, model: value[0] });

    console.log(form);
    console.log(value);
  };
  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const listOfMakes = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "Honda", label: "Honda" }, /// into json file as an option
    { value: "Ford", label: "Ford" },
    { value: "Lexus", label: "Lexus" },
    { value: "Mercedes", label: "Mercedes" },
    { value: "Toyota", label: "Toyota" },
  ];

  const modelsByMake = {
    Honda: [
      { value: "Accord", label: "Accord" },
      { value: "Civic", label: "Civic" },
      { value: "CR-X", label: "CR-X" },
      { value: "Odyssee", label: "Odyssee" },
      { value: "NSX", label: "NSX" },
      { value: "S2000", label: "S2000" },
      { value: "Prelude", label: "Prelude" },
    ],
    Toyota: [
      { value: "Corolla", label: "Corolla" },
      { value: "Camry", label: "Camry" },
      { value: "4Runner", label: "4Runner" },
      { value: "RAV4", label: "RAV4" },
      { value: "Landcruiser", label: "Landcruiser" },
      { value: "Supra", label: "Supra" },
    ],
    Ford: [
      { value: "Edge", label: "Edge" },
      { value: "F150", label: "F150" },
      { value: "Fusion", label: "Fusion" },
      { value: "Impala", label: "Impala" },
      { value: "Malibu", label: "Malibu" },
      { value: "Mustang", label: "Mustang" },
    ],
    Audi: [
      { value: "A3", label: "A3" },
      { value: "A4", label: "A4" },
      { value: "A6", label: "A6" },
      { value: "A8", label: "A8" },
      { value: "Q3", label: "Q3" },
      { value: "Q5", label: "Q5" },
      { value: "Q8", label: "Q8" },
    ],
    Lexus: [
      { value: "IS200", label: "IS200" },
      { value: "IS350", label: "Impala" },
      { value: "LSF", label: "LSF" },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log({ isModalOpen });
  return (
    <>
      <h1>This is body components</h1>
      <Button type="primary" onClick={showModal}>
        Book a Service
      </Button>
      <Modal
        title="Book a Service"
        show={isModalOpen}
        onOk={formSubmit}
        onCancel={handleCancel}
        visible={isModalOpen}
      >
        <Form onSubmit={(formSubmit)}>
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
              placeholder="Email"
              // className="input-name"
              onChange={updateForm}
              value={form.Email}
              name="Email"
            />
          <Input
            required
            placeholder="Address"
            // className="input-name"
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

          <label>Type of Service</label>
          <select value={form.serviceType} name="service" onChange={updateForm}>
            <option value="">Choose Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Repair">Tire Repair</option>
            <option value="Diagnosis">Diagnosis</option>
            <option value="Routine Maintenance">Routine Maintenance</option>
          </select>
        </Form>
      </Modal>
    </>
  );
}
