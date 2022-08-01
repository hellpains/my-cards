import React from 'react';
import style from './SetNewPassword.module.css'
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

import {useFormik} from "formik";
import {useAppDispatch} from "../../../app/store";
import {setNewPasswordTC} from "./newPasswordReducer";
import { PATH } from '../../../app/App';

export const SetNewPassword = () => {
    const navigate=useNavigate()
    const dispatch = useAppDispatch()
    const {token} = useParams()

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: values => {
            dispatch(setNewPasswordTC(values.password,token))
            navigate(PATH.LOGIN)
        },
    });


    return (
        <div className={style.setBlock}>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <div className={style.title}>Create new password</div>
                            </FormLabel>
                            <FormGroup>

                                <TextField
                                    className={style.input}
                                    variant="standard"
                                    label="Password"
                                    margin="normal"
                                    {...formik.getFieldProps('password')}
                                />

                                <div className={style.text}>
                                    Create new password and we will send you further instructions to email
                                </div>


                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Create new password
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>


        </div>
    );
};
