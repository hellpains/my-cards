import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {useFormik} from "formik";
import style from './ForgotPassword.module.css'
import {Button, FormControl, FormGroup, Grid, FormLabel, TextField} from '@mui/material';
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from '../../app/App';
import {forgotPasswordTC} from "./forgotReducer";

export const ForgotPassword = () => {
    const dispatch = useAppDispatch()
    const isCheckEmail = useAppSelector(state => state.forgot.isCheckEmail)

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            dispatch(forgotPasswordTC(values.email))
        },
    });


    if (isCheckEmail) {
        return <Navigate to={PATH.CHECK_EMAIL}/>
    }

    return (
        <div className={style.forgotBlock}>

            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <div className={style.title}>Forgot your password?</div>
                            </FormLabel>
                            <FormGroup>

                                <TextField
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps('email')}
                                />

                                <div className={style.forgot__text}>
                                    Enter your email address and we will send you further instructions
                                </div>


                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Send Instructions
                                </Button>
                            </FormGroup>

                            <div className={style.text}>
                                Did you remember your password?
                            </div>
                            <NavLink to={PATH.LOGIN} className={style.login}>
                                <div>
                                    Try logging in
                                </div>
                            </NavLink>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
