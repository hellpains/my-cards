import React from 'react';
import {Button} from "@mui/material";
import {PATH} from "../../../app/App";
import {NavLink} from "react-router-dom";

export const SignIn = () => {
    return (

        <NavLink to={PATH.LOGIN} >
            <Button type={'submit'} variant={'contained'} color={'primary'}>
                Sign In
            </Button>
        </NavLink>
    );
};
