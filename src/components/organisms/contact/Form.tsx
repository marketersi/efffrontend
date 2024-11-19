'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { POST_CONTACT } from '@/redux/kontakt/contactActions';

import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
import { toast } from 'react-toastify';
dotenv.config();

const ContactForm = () => {
  const { screenData } = useSelector((state) => state.contact);
  const { contact_us } = screenData || {};
  const { form } = contact_us || {};
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   dispatch({ type: POST_CONTACT, payload: data });
  //   reset();
  // };

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Marketersi',
      message: data.message,
      from_phone: data.telephone,
    };

    emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success(
            'Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku).'
          );
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Ups! Coś poszło nie tak. Spróbuj ponownie później.');
        }
      );
    reset();
  };

  return (
    <form action="" className="form_sect" onSubmit={handleSubmit(onSubmit)}>
      <p className="form_head_txt text-center">{form?.title}</p>
      <a href={`tel:${form?.number}`} className="form_number_content">
        {form?.number}
      </a>
      <a
        href={`mailto:${form?.mail}`}
        className="form_mail_content text-center"
      >
        {form?.mail}
      </a>
      <textarea
        required
        placeholder="Wiadomość"
        className="form_text_area"
        {...register('message', { required: true })}
      ></textarea>
      <div className=" small_forms d-sm-flex gap-1">
        <input
          required
          placeholder="Imię"
          className=" form_inputs"
          {...register('name', { required: true })}
        />
        <input
          required
          placeholder="Mail"
          className="form_inputs"
          type="email"
          {...register('email', { required: true })}
        />
        <input
          placeholder="Telefon"
          className="form_inputs"
          pattern="\d{7,15}"
          {...register('telephone')}
        />
      </div>

      <div className="btn_Image">
        <div className="btn">
          <button type="submit">{form?.button_text}</button>
        </div>
        <div className="sticker_Image">
          <svg
            width="66"
            height="80"
            viewBox="0 0 66 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33 67.5C33 67.5 55 56.5 55 40V18L33 12.5L11 18V40C11 56.5 33 67.5 33 67.5Z"
              fill="#E0E0E0"
              stroke="#E0E0E0"
              stroke-width="5.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M48.7597 32.0811L46.2548 29.5762C45.9114 29.2325 45.4937 29.0605 45.0026 29.0605C44.5112 29.0605 44.0935 29.2325 43.75 29.5762L31.6672 41.6772L26.2521 36.2437C25.9083 35.8998 25.4908 35.7281 24.9998 35.7281C24.5085 35.7281 24.091 35.8998 23.7472 36.2437L21.2423 38.7486C20.8984 39.0924 20.7266 39.51 20.7266 40.0013C20.7266 40.4921 20.8984 40.9101 21.2423 41.2538L27.9097 47.9211L30.4148 50.426C30.7584 50.77 31.176 50.9417 31.6672 50.9417C32.1582 50.9417 32.5758 50.7696 32.9197 50.426L35.4247 47.9211L48.7597 34.5862C49.1033 34.2423 49.2754 33.8248 49.2754 33.3335C49.2757 32.8425 49.1033 32.4249 48.7597 32.0811Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
