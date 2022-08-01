import React, {ChangeEvent, FC, useState} from "react";
import {Box, TextField} from "@mui/material";
import style from './EditableName.module.css'

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}

export const EditableName: FC<EditableSpanPropsType> = React.memo((
    {
        title, onChange
    }
) => {
    console.log('EditableName')
    let [newTitle, setNewTitle] = useState(title)
    let [edit, setEdit] = useState(false)

    const editOnHandler = () => {
        setEdit(true)
    }
    const editOffHandler = () => {
        setEdit(false)
        onChange(newTitle)
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    return (
        <div className={style.name}>
            {edit
                ?
                <Box
                    className={style.div}
                    sx={{
                        width: 350,
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        fullWidth id="fullWidth"
                        variant="standard"
                        label="Nickname"
                        margin="normal"
                        onChange={onChangeInputHandler}
                        autoFocus
                        value={newTitle}
                        onBlur={editOffHandler}
                    />
                </Box>

                : <div className={style.name} onDoubleClick={editOnHandler}> {title}</div>}
        </div>
    )
})