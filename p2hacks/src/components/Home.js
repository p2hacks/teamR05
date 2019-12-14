import React from 'react';
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
export default function Home({match}) {
    const id=match.params.id
    const dispatch = useDispatch();
    const movetoQuestion = () => {
        dispatch(push(`${match.url.split("/").slice(0, -1).join("/")}/question`))
    }
    return (
        <div>
            <p>
                アンケートにご協力お願いします。
            </p>
            <button onClick={movetoQuestion}>開始する</button>
        </div>
    );
}
