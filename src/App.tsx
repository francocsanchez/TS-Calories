import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <section className="bg-lime-500 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
