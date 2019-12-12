import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect, useSelector } from "react-redux";
import { changeAnswer } from "../actions";
import { useDispatch } from "react-redux";

export default function RadioButtons(props) {
  console.log(props);
  const { num } = props;
  //console.log(num);
  const fake = useSelector(state => state.question);
  const [value, setValue] = React.useState(String(fake.answer[num]));
  //console.log("num:" + num + "check:" + fake.answer[num - 1]);
  //console.log("num:" + num + "check:" + fake.answer[num]);
  const dispatch = useDispatch();

  const handleChange = e => {
    //console.log("acted");
    console.log("test_ansnum", e.target.value);
    setValue(e.target.value);
    dispatch(changeAnswer(e.target.value, num));
  };
  console.log(fake.answer);
  //console.log(this.props);

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
          value="1"
          control={<Radio color="primary" />}
          label="そう"
          labelPlacement="top"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="そうかもしれない"
          labelPlacement="top"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="わからない"
          labelPlacement="top"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="そうではないかもしれない"
          labelPlacement="top"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label="そうではない"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
