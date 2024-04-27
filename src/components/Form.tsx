import { useState, ChangeEvent, Dispatch, FormEvent } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityAction } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityAction>;
};

const INITIAL_FORM: Activity = {
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumber = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;

    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity(INITIAL_FORM);
  };

  return (
    <form
      className=" space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          name="category"
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          value={activity.calories}
          onChange={handleChange}
        >
          {categories.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="Ej. Comida, Saltar la cuerda."
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="Ej. 300."
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-700 hover:bg-gray-800 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg disabled:opacity-10 disabled:cursor-default"
        value={`Guardar ${activity.category === 1 ? "comida" : "ejercicio"}`}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
