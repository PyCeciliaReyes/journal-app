import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [ (value) => value.length >=6, 'El password debe de tener mas de 6 letras.'],
  displayName: [ (value) => value.length >=1 , 'El nombre es obligatorio.'],
}


export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [ formSubmitted, setFormSubmitted ] =useState(false);

  const { 
      email, password, onInputChange, displayName, formState,
      emailValid, passwordValid, displayNameValid, isFormValid, 
    } = useForm(formData, formValidations);

  // console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    //console.log(formState)
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Crear cuenta'>
          <form onSubmit={onSubmit} >
            <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Nombre'
                    type="text"
                    placeholder="Nombre completo"
                    fullWidth
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                    error = {!!displayNameValid && formSubmitted}
                    helperText = {displayNameValid}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Correo'
                    type="email"
                    placeholder="correo@google.com"
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    error={!!emailValid && formSubmitted}
                    helperText={emailValid}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Contraseña'
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    error={!!passwordValid && formSubmitted}
                    helperText={passwordValid}
                  />
              </Grid>
              <Grid container spacing={2} sx={{mb:2, mt: 1}}>
                  <Grid item xs={12} >
                      <Button type='submit' variant="contained" fullWidth>Crear cuenta</Button>
                  </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                  <Link component={ RouterLink } color="inherit" to="/auth/login">
                    Ingresar
                  </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  
  )
}
