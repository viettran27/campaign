import { TextField } from "@mui/material";
import { useCallback } from "react";

const Input = ({
  type,
  value,
  name,
  error,
  helperText,
  label,
  style,
  onChange,
}) => {
  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      const lastValue = type === "number" && value ? Number(value) : value;
      onChange(name, lastValue);
    },

    //eslint-disable-next-line
    [name, onChange]
  );

  return (
    <TextField
      type={type}
      value={value}
      name={name}
      error={error}
      helperText={error && helperText}
      label={label}
      variant="standard"
      inputProps={{ style: { fontSize: 14 } }}
      InputLabelProps={{ style: { fontSize: 14 } }}
      sx={{ width: "100%", ...style }}
      onChange={handleChange}
    />
  );
};

export default Input;
