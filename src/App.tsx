import { useReducer } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { activityReducer, initialState } from "./reducers/activityReducer";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <>
      <Header />

      <section className="bg-lime-500 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch}/>
        </div>
      </section>
    </>
  );
}

export default App;
