import React from 'react';
import {ContainerLayout  } from '../common';
// import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={ContainerLayout} id="contact">
    <Details>
      <ContactForm />
    </Details>
    {/* <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail> */}
  </Wrapper>
);
