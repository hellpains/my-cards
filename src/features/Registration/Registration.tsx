import React from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {Button, FormControl, FormGroup, FormHelperText, FormLabel, Grid, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {useFormik} from "formik";
import {registerTC} from "./register-reducer";
import style from './Register.module.css'
import {PATH} from "../../app/App";

export type FormikErrorType = {
    email?: null | string
    password?: null | string
    confirmPassword?: null | string
}

export const Registration = () => {
    const dispatch = useAppDispatch()
    const isRegistered = useAppSelector(state => state.registration.isRegistered)

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                confirmPassword: '',
            },
            validate: (values) => {
                const errors: FormikErrorType = {}
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 7) {
                    errors.password = 'Password must be more than 7 characters...';
                }

                if (!values.confirmPassword) {
                    errors.confirmPassword = 'Required';
                } else if (values.password.length < 7) {
                    errors.confirmPassword = 'Password must be more than 7 characters...';
                }

                if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = 'Passwords do not match';
                }


                return errors
            },
            onSubmit: values => {
                dispatch(registerTC({email: values.email, password: values.password}))
            },
        }
    );

    if (isRegistered) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={style.registerBlock}>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <div className={style.title}>Sign Up</div>
                            </FormLabel>

                            <FormGroup>
                                <TextField
                                    // onBlur={formik.touched}
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps('email')}
                                />

                                <FormHelperText style={{marginTop: '-10px'}} error variant="standard"
                                                id="component-error-text">
                                    {formik.touched.email && formik.errors.email ?
                                        <div>{formik.errors.email}</div> : null}
                                </FormHelperText>

                                <TextField
                                    // onFo={formik.touched}
                                    variant="standard"
                                    margin="normal"
                                    type="password"
                                    label="Password"
                                    {...formik.getFieldProps('password')}
                                />

                                <FormHelperText style={{marginTop: '-10px'}} error variant="standard"
                                                id="component-error-text">
                                    {formik.touched.password && formik.errors.password ?
                                        <div>{formik.errors.password}</div> : null}
                                </FormHelperText>

                                <TextField

                                    // onBlur={formik.touched}
                                    variant="standard"
                                    margin="normal"
                                    type="password"
                                    label="confirmPassword"
                                    {...formik.getFieldProps('confirmPassword')}
                                />

                                <FormHelperText style={{marginTop: '-10px'}} error variant="standard"
                                                id="component-error-text">
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                                        <div>{formik.errors.confirmPassword}</div> : null}
                                </FormHelperText>

                                <div className={style.button}>
                                    <Button
                                        type={'submit'}
                                        className={style.button}
                                        disabled={!formik.isValid || !formik.dirty}
                                        variant={'contained'}
                                        color={'primary'}>
                                        Sign Up
                                    </Button>
                                </div>
                            </FormGroup>

                            <div className={style.text}>
                                Don't have an account?
                            </div>
                            <NavLink to={PATH.LOGIN} className={style.signIn}>
                                <div>
                                    Sign In
                                </div>
                            </NavLink>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>


        </div>
    );
};

function useState(arg0: null): [any, any] {
    throw new Error('Function not implemented.');
}
