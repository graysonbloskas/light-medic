import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
import formId from '../config';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import '../App.css';

type FormState = {
  email: string;
  name: string;
  message: string;
  address: string;
  budget: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};

function ContactPage() {
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = '6LcEL1QcAAAAAE6PkTRYWnI0N9Cuo1YQDyor616e';
  const recaptchaRef = useRef<any>();

  const initialFormState = {
    email: '',
    name: '',
    message: '',
    address: '',
    budget: '',
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setRecaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      'g-recaptcha-response': recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: 'font-bold text-lg my-2 bg-gradient-to-r from-green-300 to-green-400 text-white',
        text: 'Thanks, We will be in touch shortly',
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset()
    } catch (error) {
      console.log(error);
      setMessage({
        class: 'bg-red-500',
        text: 'Sorry, there was an issue. Please try again',
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string);
  };
  return (
    <div className='flex flex-col bg-white pb-20 form'>
      <div className='w-2/3 m-auto p-8 shadow-lg '>
        <h1 className='text-4xl font-bold flex items-center contact-title'>
          <i className='fas fa-paper-plane mr-3'> </i>
          <span> Get a Quote Today!</span>
        </h1>
        {message && (
          <div className={`my-4 text-white w-full p-4 ${message.class}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm} className='flex flex-col'>
          <div className='my-2 flex flex-col'>
            <label htmlFor='name'>Full Name</label>
            <input
              onChange={updateFormControl}
              type='text'
              className='border-2 p-2'
              id='name'
              value={formState.name}
              required
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={updateFormControl}
              type='email'
              className='border-2 p-2'
              id='email'
              value={formState.email}
              required
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='address'>Address</label>
            <input
              onChange={updateFormControl}
              type='text'
              className='border-2 p-2'
              id='address'
              value={formState.address}
              required
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='budget'>Budget ($)</label>
            <input
              onChange={updateFormControl}
              type='text'
              className='border-2 p-2'
              id='budget'
              value={formState.budget}
              required
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='message'>Specific Design in Mind?</label>
            <textarea
              id='message'
              className='border-2 p-2'
              onChange={updateFormControl}
              value={formState.message}
            ></textarea>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
            className='recap'
          ></ReCAPTCHA>

          <button
            disabled={submitting}
            className='font-bold text-lg my-2 bg-gradient-to-r from-green-300 to-green-400  text-white w-full p-2 hover:from-green-600 hover:to-green-600 transition-colors duration-200 '
          >
            {submitting ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
