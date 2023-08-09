import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    terms: false,
    gender: "",
  });
  //input change function
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ margin: "10px" }}>
          Form
        </Typography>
        <TextField
          name="name"
          placeholder="name"
          onChange={handleChange}
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
          value={inputs.name}
        />
        <TextField
          name="email"
          placeholder="email"
          onChange={handleChange}
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
          value={inputs.email}
        />
        <TextField
          name="password"
          placeholder="password"
          onChange={handleChange}
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
          value={inputs.password}
        />
        <br />

        <FormControl fullWidth>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            label="courses"
            value={inputs.courses}
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value={"mongodb"}>MongoDb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            defaultValue={"male"}
            onChange={handleChange}
          >
            <FormControlLabel value={"male"} label="Male" control={<Radio />} />
            <FormControlLabel value={"female"} label="Female" control={<Radio />} />
            <FormControlLabel value={"other"} label="Other" control={<Radio />} />
          </RadioGroup>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            required
            label="Required"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />

        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
