import { Container, makeStyles } from '@material-ui/core';
import { Form as FormikForm, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button, InputField } from '../input';
import FormikInputField from '../formik/FormikInputField';
import FormikSizedTextInputField from '../formik/FormikSizedInputField';
import SelectField from '../formik/SelectField';


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


export default function RegistrationForm() {

    const classes = useStyles()

    const schema =
        Yup.object().shape({
            firstName: Yup.string().max(20).required("First Name is required"),
            lastName: Yup.string().max(20).required("Last Name is required"),
            age: Yup.number().required("Age is required"),
            occupation: Yup.string().required("Occupation is required"),
        })

    const options = [
        {
            label: 'Freelancer',
            value: 'Freelancer',
        },
        {
            label: 'Employed',
            value: 'Employed',
        }
    ]

    const initialValues = {
        firstName: "",
        lastName: "",
        age: "",
        occupation: ""
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
                        <FormikSizedTextInputField max={30} value={values.firstName} fullWidth className={classes.input} icon='account_circle' name="firstName" label={'Vorname'} />
                        <FormikSizedTextInputField max={30} value={values.lastName} fullWidth className={classes.input} icon='account_circle' name="lastName" label={'Nachname'} />
                        <FormikInputField value={values.age} icon='date_range' type='number' fullWidth className={classes.input} name="age" label={'Alter'} />
                        <SelectField className={classes.input} icon=' ' value={values.occupation} fullWidth  name="occupation" label={'Beruf'} data={options} />
                        <Button type='submit' loading={false} disabled={false} label='Registrieren' name='submit' fullWidth>Anmelden</Button>
                    </FormikForm>
                )}
            </Formik>
        </Container>
    )
}
