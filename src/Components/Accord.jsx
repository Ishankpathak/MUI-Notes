import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

const Accord = () => {
  const courses = ["react", "nodejs", "mern", "nextjs", "UI"];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography typography={"h6"}>What is Mern Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            omnis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* auto complete */}
      <h3>Auto Complete</h3>
      <Autocomplete
        sx={{ width: 200, marginBottom: "10vh" }}
        options={courses}
        renderInput={(params) => (
          <TextField {...params} label="Select a course" />
        )}
      />
    </div>
  );
};

export default Accord;
