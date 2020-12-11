import * as React from 'react'
import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import SizedTextInputField from './SizedInputField';


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
          <SizedTextInputField className="formControl" value={values.values.email} name="email" max={50} type="email" />
        </Form>
      )}
    </Formik>
  );

});