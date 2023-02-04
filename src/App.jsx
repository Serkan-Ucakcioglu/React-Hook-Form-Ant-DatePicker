import "./App.css";
import DatePickers from "./Components/DatePicker";
import { useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <DatePickers
          placeholder="start-date"
          name="stardate"
          rules={{ required: true }}
          control={control}
        />
        <DatePickers
          placeholder="end-date"
          name="enddate"
          rules={{ required: true }}
          control={control}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
