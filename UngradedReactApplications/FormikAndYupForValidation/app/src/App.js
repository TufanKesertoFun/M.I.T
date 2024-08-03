import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const App = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form values:", values);

        // After submitting the form, you can reset form state or perform other actions
        // For example, you might want to reset the form fields
        // resetForm();

        // Don't forget to call setSubmitting(false) to indicate that submission has finished
        setSubmitting(false);
    };

    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{ fieldName: "" }} // Define initial form values
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="fieldName" />
                        <ErrorMessage name="fieldName" component="div" />
                        {/* Add more form fields as needed */}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;