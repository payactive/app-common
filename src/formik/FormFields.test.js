import { render } from '@testing-library/react';
import InputField from './InputField';
import SizedTextInputField from './SizedTextInputField';
import SelectField from './SelectField';
import { Form, Formik } from 'formik';
import CheckboxField from './CheckboxField';

test('renders all form fields', () => {

  render(
    <Formik
      initialValues={{
        "A": "A",
        "B": "B",
        "C": "C"
      }}
    >
      {({values}) => (
        <Form>
          <InputField name="A" />
          <SizedTextInputField value={values["B"]} maxLength={10} name="B" />
          <SelectField name="C"/>
          <CheckboxField name="D" />
        </Form>
      )}
    </Formik>
  );
});
