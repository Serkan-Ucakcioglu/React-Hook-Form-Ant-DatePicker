import "./App.css";
import DatePickers from "./Components/DatePicker";
import { useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-[400px]"
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
  );
}

export default App;
