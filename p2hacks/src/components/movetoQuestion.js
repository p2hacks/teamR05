import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

export default function End() {
    const dispatch = useDispatch();
    return dispatch(push("/End"));
}