import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";

function Create() {
  return (
    <section className="min-h-screen bg-[#fefaf4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
          Yangi ovqat uchun retseplar 🍽️
        </h2>

        <form className="space-y-6">
          <FormInput
            name="title"
            type="text"
            label="Title"
            placeholder="Enter recipe title"
          />

          <FormInput
            name="cookingTime"
            type="number"
            label="Cooking Time "
            placeholder="e.g. 30"
          />

          <FormInput
            name="ingredients"
            type="text"
            label="Ingredients"
            placeholder="e.g. tomato, egg, onion"
          />

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
