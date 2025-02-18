import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "../tresci.css";
import { SEND_ME_A_QUOTE } from "@/redux/tresci/salescontentAction";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
import { toast } from "react-toastify";
dotenv.config();

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { isFormSubmitted } = useSelector((state) => state.sales);

  const dispatch = useDispatch();
  const router = useRouter();

  // const onSubmit = (data) => {
  //   dispatch({ type: SEND_ME_A_QUOTE, payload: data });
  //   reset();
  // };

  const onSubmit = (data) => {
    console.log("Submitted form data:", data);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Marketersi",
      message: data.message,
      from_phone: data.phone,
    };

    emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!", emailjs);
          toast.success(
            "Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą w ciągu 24 godzin w dniach roboczych (od poniedziałku do piątku)."
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Ups! Coś poszło nie tak. Spróbuj ponownie później.");
        }
      );
    reset();
  };

  useEffect(() => {
    if (isFormSubmitted) {
      router.push("/dziekujemy");
    }
  }, [isFormSubmitted, router]);

  return (
    <>
      <div className="sendQuote sentquote-form">
        <h2>
          Wypełnij i otrzymaj ofertę dopasowaną do Ciebie. Całkowicie bez
          zobowiązań.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputLayout">
            <input
              required
              placeholder="Twoje imię"
              {...register("name", { required: true })}
            />
            <input
              required
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <input
              placeholder="Nr telefonu"
            //  pattern="\d{7,15}"
              {...register("phone")}
              Nr telefonu
            />
          </div>
          <textarea
            {...register("message")}
            placeholder="Opowiedz nam o swoim projekcie. Czego potrzebujesz? Zajmiemy się resztą!"
          />

          <div className="d-flex wrapper-btn justify-content-between align-items-center">
            <button
              type="submit"
              className="mi-btn download-catalog-button projects-opinion-button copywriter-blue-background copywriter-new-btn copywriter-standard-mt-10 send-offer-button js--triggerAnimation"
            >
              Prześlijcie mi niezobowiązującą ofertę
            </button>
            {/* <img
              src="https://images.prismic.io/marketersi/ZfL0JUmNsf2sHk-N_Group1.png?auto=format,compress"
              alt=""
            /> */}

            <img
              src="https://images.prismic.io/marketersi/Z5xxjpbqstJ9-Emr_NEWSHIELDGRAPHIC.png?auto=format,compress"
              alt="shield"
              className="sheildPng"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
