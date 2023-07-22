import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../index";
import { useState } from "react";

const NewForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const docRef = await addDoc(
        collection(firestore, "fakestore-test-products"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1>NewForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Imágen</label>
          <input type="text" id="image" name="image" onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewForm;
