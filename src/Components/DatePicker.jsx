import React from "react";
import { useController } from "react-hook-form";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function DatePickers(props) {
  const { field, fieldState } = useController(props);
  return (
    <div className="flex flex-col">
      <DatePicker
        placeholder={props.placeholder}
        status={fieldState.error ? "error" : undefined}
        ref={field.ref}
        name={field.name}
        onBlur={field.onBlur}
        value={field.value ? dayjs(field.value) : null}
        onChange={(date) => {
          field.onChange(date ? date.valueOf() : null);
        }}
      />
      <span className="text-red-500 text-left">
        {fieldState?.error?.message}
      </span>
    </div>
  );
}

export default DatePickers;
