import React from 'react';
import style from './Login.module.css'
import {useFormik} from "formik";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@mui/material";
import {NavLink} from "react-router-dom";


export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
            // dispatch(loginTC(values))
        },
    });

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
                                {/*{formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}
                                <Box sx={{
                                        width: 330,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField
                                        variant="standard"
                                        margin="normal"
                                        type="password"
                                        label="Password"
                                        {...formik.getFieldProps('password')}
                                    />
                                </Box>
                                {/*{formik.errors.password ? <div>{formik.errors.password}</div> : null}*/}
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

                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Sign In
                                </Button>
                            </FormGroup>

                            <NavLink to={'/sign-up'} className={style.text}>
                                Don't have an account?
                            </NavLink>
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