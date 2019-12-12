import React from 'react';
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
export default function Home() {
    const dispatch = useDispatch();
    const movetoQuestion = () => {
        return( dispatch(push("/Question"))
        )}
    return (
        <div>
            <p>
                アンケートにご協力お願いします。
            </p>
            <button onClick={movetoQuestion}>開始する</button>
        </div>
  );
}
