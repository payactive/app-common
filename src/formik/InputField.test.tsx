import * as React from 'react'
import { render } from '@testing-library/react';
import InputField from './InputField';
import { Form, Formik } from 'formik';


test('renders all form fields', () => {

    render(
      <Formik
        onSubmit={()=>console.log("")}
        initialValues={{
          "email": "andreas.finke@gmail.com"
        }}
      >
        {() => (
          <Form>
            <InputField name="email" type="text" />
          </Form>
        )}
      </Formik>
    );

  });