import { Box, Icon, makeStyles } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { ReactElement } from 'react';
import * as Yup from 'yup';
import { AnyObject } from 'yup/lib/object';
import { Button } from '../input';
import FormikInputField from './FormikInputField';

interface Submit {
    label: string
    icon?: string
    justifyContent?: 'left' | 'center' | 'right'
    fullWidth?: boolean
}

interface Field {
    name: string
    label: string
    icon?: string
    initialValue?: string
    validation?: AnyObject
    fullWidth?: boolean
}

interface Props {
    fields: Field[]
    submit: Submit
    onSubmit: ((values: {}, formikHelpers: FormikHelpers<{}>) => void | Promise<any>) & (() => void)
    fullWidth?: boolean
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: "left",
        display: 'block',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    submit: {
        padding: theme.spacing(1),
    },
    input: {
        padding: theme.spacing(1)
    }
}));

export default function FormikForm({ fields, submit, onSubmit, fullWidth = false }: Props): ReactElement {

    const classes = useStyles()

    let fieldValidations = {}
    fields.filter(field => field.validation).forEach(field => fieldValidations[field.name] = field.validation)
    const validations = Yup.object().shape(fieldValidations)

    let fieldInitialValues = {}
    fields.forEach(field => fieldInitialValues[field.name] = field.initialValue || '')

    console.log(fields)

    return (
        <Formik
            initialValues={fieldInitialValues}
            onSubmit={onSubmit}
            validationSchema={validations}
        >
            <Form>
                {fields.map((field) => (
                    <>
                        <FormikInputField
                            name={field.name}
                            label={field.label}
                            fullWidth={field.fullWidth === undefined ? fullWidth : field.fullWidth}
                            icon={field.icon}
                            className={classes.input}
                        />
                    </>
                ))}
                <Box className={classes.submit} display='flex' justifyContent={submit.justifyContent || 'center'}>
                    <Button
                        startIcon={submit.icon ? <Icon>{submit.icon}</Icon> : null}
                        type='submit'
                        name='submit'
                        fullWidth={submit.fullWidth === undefined ? fullWidth : submit.fullWidth}
                        label={submit.label}
                    />
                </Box>
            </Form>
        </Formik>
    )
}

export type { Props as FormikFormProps };

