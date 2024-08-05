import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function DropDown ( props: { year: any; setYear: any; month: any; setMonth: any }) {
    const years = Array.from({ length: 2050 - 2024 + 1 }, (_, index) => 2024 + index);
    const months = Array.from({ length: 12 - 1 + 1 }, (_, index) => 1 + index);
   
    return (
      <>
      <div style ={{display: 'flex'}}>
      <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Year</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.year}
      label="year"
      onChange={(event) => props.setYear(event.target.value)}
    >
      {years.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                ))}
    </Select>
  </FormControl>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Month</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.month}
      label="month"
      onChange={(event) => { props.setMonth(event.target.value);}}
    >
     {months.map((month) => (
                    <MenuItem value={month}>{month}</MenuItem>
                ))}
    </Select>
  </FormControl>
  </div>
      </>
    )
  }