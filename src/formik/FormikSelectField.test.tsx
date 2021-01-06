import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import * as React from 'react';
import SelectField from './FormikSelectField';


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
            <SelectField data={[{label: "foo", value: "foobar@gamil.com"}]} name="email" type="text" />
          </Form>
        )}
      </Formik>
    );

  });