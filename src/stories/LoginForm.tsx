import { Container, makeStyles } from '@material-ui/core';
import { Form as FormikForm, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikInputField from '../formik/FormikInputField';
import { Button } from '../input';


const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: "left",
        display: 'block',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    select: {
        textAlign: 'left',
        marginTop: theme.spacing(2),
    },
    input: {
        padding: theme.spacing(1)
    }
}));


export default function Form() {

    const classes = useStyles()

    const schema =
        Yup.object().shape({
            emailAddress: Yup.string().max(30).email().required("E-Mail Address is required"),
            password: Yup.string().max(30).required("Password is required"),
        })

    const initialValues = {
        emailAddress: "",
        password: "",
    };

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Container maxWidth='xs'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <FormikForm>
                        <FormikInputField value={values.emailAddress} fullWidth className={classes.input} icon='account_circle' required name="emailAddress" label={'E-Mail Adresse'} />
                        <FormikInputField value={values.password} fullWidth className={classes.input} icon='lock' type='password' required name="password" label={'Passwort'} />
                        <Button type='submit' loading={false} disabled={false} label='Anmelden' name='submit' fullWidth>Anmelden</Button>
                    </FormikForm>
                )}
            </Formik>


        </Container>
    )
}
