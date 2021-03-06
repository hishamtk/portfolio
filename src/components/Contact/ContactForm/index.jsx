import React from 'react'
import axios from "axios"
import styled  from 'styled-components'
import variables from '../../../data/variables'

import {Formik , Form, FastField,ErrorMessage} from "formik"



import * as Yup from "yup"
import {Button } from "../../common"
import {Error,Center,InputField} from "./styles"


const ContactForm =() => {

    const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${variables.darkGrey};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  font-size:1rem;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
    font-size:1rem;
  }
`;


    return(

        <>

        <Formik
             initialValues={{
                    name: "",
                    email: "",
                    message: "",
                    success: false,
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Full name field is required"),
                    email: Yup.string()
                        .email("Invalid email")
                        .required("Email field is required"),
                    message: Yup.string().required("Message field is required"),
                    recaptcha:
                        process.env.NODE_ENV !== "development"
                            ? Yup.string().required("Robots are not welcome yet!")
                            : Yup.string(),
                })}
                onSubmit={async (
                    { name, email, message },
                    { setSubmitting, resetForm, setFieldValue }
                ) => {
                    try {
                        await axios({
                            method: "POST",
                            url:process.env.PORTFOLIO_FORMIUM_ENDPOINT,
                              
                            headers: {
                                "Content-Type": "application/json",
                            },
                            data: JSON.stringify({
                                name,
                                email,
                                message,
                            }),
                        });
                        setSubmitting(false);
                        setFieldValue("success", true);
                        setTimeout(() => resetForm(), 6000);
                    } catch (err) {
                        setSubmitting(false);
                        setFieldValue("success", false);
                        alert("Something went wrong, please try again!");
                    }
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <>

<Form>




          
                        <InputField>
                            <Input
                                as={FastField}
                                type="text"
                                name="name"
                                value={values.name}
                                component="input"
                                aria-label="name"
                                placeholder="Full name*"
                                error={touched.name && errors.name}
                            />
                            <ErrorMessage component={Error} name="name" />
                        </InputField>
                        <InputField>
                            <Input
                                id="email"
                                aria-label="email"
                                component="input"
                                as={FastField}
                                type="email"
                                name="email"
                                placeholder="Email*"
                                error={touched.email && errors.email}
                            />
                            <ErrorMessage component={Error} name="email" />
                        </InputField>
                        <InputField>
                            <Input
                                as={FastField}
                                component="textarea"
                                aria-label="message"
                                id="message"
                                rows="8"
                                type="text"
                                name="message"
                                placeholder="Message*"
                                error={touched.message && errors.message}
                            />
                            <ErrorMessage component={Error} name="message" />
                        </InputField>
                        
                        {values.success && (
                            <InputField>
                                <Center>
                                    <h2>
                                        Your message has been successfully sent, I will get back to you
                                        ASAP!
                                    </h2>
                                </Center>
                            </InputField>
                        )}
                        <Center>
                            <Button secondary type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Center>
                    </Form>
                    </>
                )}
            </Formik>
        
            </>


    )
}
  


    

export default ContactForm
