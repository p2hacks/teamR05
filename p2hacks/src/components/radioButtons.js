import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect, useSelector } from "react-redux";
import { editAnswer } from "../actions";
import { useDispatch } from "react-redux";

export default function RadioButtons(props) {
  const { num } = props;
  const fake = useSelector(state => state.question);
  const [value, setValue] = React.useState(String(fake.answers[num]));
  const dispatch = useDispatch();

  const handleChange = e => {
    const str_num = e.target.value;
    setValue(e.target.value);
    dispatch(editAnswer(num, Number(str_num)));
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label={num === 3 ? "~51" : num === 5 ? "女" : "そう"}
          labelPlacement="top"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label={num === 3 ? "40~50" : num === 5 ? null : "そうかもしれない"}
          labelPlacement="top"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label={num === 3 ? "31~40" : num === 5 ? "どちらでもない" : "わからない"}
          labelPlacement="top"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label={num === 3 ? "21~30" : num === 5 ? null : "そうではないかもしれない"}
          labelPlacement="top"
        />
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label={num === 3 ? "20~" : num === 5 ? "男" : "そうではない"}
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
