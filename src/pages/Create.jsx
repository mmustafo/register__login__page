import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useFirebase } from "../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

function Create() {
  const { addDocument } = useFirebase("salomat");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");
    const cookingimages = formData.get("image");

    await addDocument({
      title,
      cookingTime: `${cookingTime} minutes`,
      ingredients, 
      description,
      cookingimages,
    });
    Navigate("/");
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const trimmed = ingredientInput.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients((prev) => [...prev, trimmed]);
      setIngredientInput("");
    }
  };

  return (
    <section className="min-h-screen bg-[#fefaf4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
          Yangi ovqat uchun retseplar 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            name="title"
            type="text"
            label="Title"
            placeholder="Enter recipe title"
          />

          <FormInput
            name="image"
            type="text"
            label="Rasmini (url) sini kiriting Hojaka"
            placeholder="image url"
          />

          <FormInput
            name="cookingTime"
            type="number"
            label="Cooking Time (minutes)"
            placeholder="e.g. 30"
          />

         
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Ingredients</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="ingredient"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                placeholder="e.g. tomato"
                className="border px-4 py-2 rounded-lg flex-1"
              />
              <button
                type="button"
                onClick={addIngredient}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-lg"
              >
                Add
              </button>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          <FormTextArea
            name="description"
            label="Description"
            placeholder="Describe the steps"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Create;
