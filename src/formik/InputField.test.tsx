import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import InputField from './InputField';


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
          <InputField className={'formControl'} name="email" type="text" />
        </Form>
      )}
    </Formik>
  );

});