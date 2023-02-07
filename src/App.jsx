import "./App.css";
import DatePickers from "./Components/DatePicker";
import { useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { stardate, enddate } = data;
    const start = new Date(stardate).toISOString();
    const end = new Date(enddate).toISOString();
    alert(JSON.stringify({ startDate: start, endDate: end }));
  };
  return (
    <div className="App flex flex-col items-center">
      <div className="container w-[360px] mx-4">
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3  mx-4"
        >
          <DatePickers
            placeholder="start-date"
            name="stardate"
            rules={{ required: "required" }}
            control={control}
          />
          <DatePickers
            placeholder="end-date"
            name="enddate"
            rules={{ required: "required" }}
            control={control}
          />
          <input
            type="submit"
            className="h-10 bg-indigo-600 border m-auto border-indigo-600 cursor-pointer text-white rounded-lg w-20"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
