import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import FormikInputField from './FormikInputField';


test('renders all form fields', () => {

  render(
    <Formik
      onSubmit={() => console.log("")}
      initialValues={{
        "email": "andreas.finke@gmail.com"
      }}
    >
      {() => (
        <Form>
          <FormikInputField className={'formControl'} name="email" type="text" />
        </Form>
      )}
    </Formik>
  );

});