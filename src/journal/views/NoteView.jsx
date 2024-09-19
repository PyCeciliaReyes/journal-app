import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useMemo } from "react";


export const NoteView = () => {
    const { active:note } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className="animate__animated animate__fadeIn animate__faster">
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa un titulo"
                    label="Titulo"
                    sx={{border:'none', mb: 1}}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            {/* galeria de imagenes */}
            <ImageGallery />
        </Grid>
  )
}


