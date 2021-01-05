import * as React from 'react'
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import FormikSizedTextInputField from './FormikSizedInputField';


test('renders all form fields', () => {

  render(
    <Formik
      onSubmit={() => console.log("Submit")}
      initialValues={{
        "email": "andreas.finke@gmail.com"
      }}
    >
      {(values) => (
        <Form>
          <FormikSizedTextInputField className="formControl" value={values.values.email} name="email" max={50} type="email" />
        </Form>
      )}
    </Formik>
  );

});