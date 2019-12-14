import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const Pre = props => {
  const movePage = () => {
    return dispatch(push("/PreSent"));
  };
  const dispatch = useDispatch();

  return (
    <form method="post">
      <p>
        <input type="email" name="email"></input>
      </p>
      <p>
        <input type="text"></input>
      </p>
      <p>
        <input type="submit" onClick={movePage} value="é€�ä¿¡ã�™ã‚‹"></input>
      </p>
    </form>
  );
};

export default Pre;
