import { useState } from "react";


export default function Body(props) {
  const [form, setForm] = useState({});


  async function formSubmit(e) {
    e.preventDefault(); /// stops the page refresh
    try {
    const results = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    console.log(results);
      const data = await results.json();
      console.log(data);
      setForm({make:"", model:"", year:"",})
    } catch (err) {
      console.error()
    }
    
  }
  const updateForm = (event) => {
     setForm({ ...form, [event.target.name]: event.target.value });
};



  return (
    <>
      <h1 className="body">Book a service for your vehicle</h1>
      <div>
        <form className="body-form" onSubmit={formSubmit}>
          <label>Make</label>
          <select value={form.make} name="make" onChange={updateForm}>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
          </select>
          <br />
          <label>Model</label>
          <select value={form.model} name="model" onChange={updateForm}>
            <option value="Acoord">Accord</option>
            <option value="Corolla">Corolla</option>
            <option value="Escort">Escort</option>
          </select>
          <label>year</label>
          <select value={form.year} name="year" onChange={updateForm}>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
