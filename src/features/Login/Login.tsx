import React from 'react';
import style from './Login.module.css'
import {useFormik} from "formik";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup, FormHelperText,
    FormLabel,
    Grid,
    TextField
} from "@mui/material";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {loginTC} from "./login-reducer";
import {PATH} from "../../app/App";
import {FormikErrorType} from "../Registration/Registration";


export const Login = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            disabled: false,
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
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


            return errors;

        },
        onSubmit: values => {
            // alert(JSON.stringify(values))
            dispatch(loginTC(values.email, values.password, values.rememberMe))
        },
    });


    if (isLoggedIn) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <div className={style.loginBlock}>

            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <div className={style.title}>Sign in</div>
                            </FormLabel>
                            <FormGroup>

                                <TextField
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
                                <FormControlLabel
                                    label={'Remember me'}
                                    control={<Checkbox
                                        {...formik.getFieldProps('rememberMe')}
                                        checked={formik.values.rememberMe}
                                    />}
                                />

                                <NavLink to={'/forgot-password'} className={style.forgotPass}>
                                    <div>
                                        Forgot Password?
                                    </div>
                                </NavLink>

                                <Button
                                    disabled={!formik.isValid || !formik.dirty}
                                    type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    Sign In
                                </Button>
                            </FormGroup>

                            <div className={style.text}>
                                Don't have an account?
                            </div>
                            <NavLink to={'/sign-up'} className={style.signUp}>
                                <div>
                                    Sign Up
                                </div>
                            </NavLink>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>


        </div>
    );
};