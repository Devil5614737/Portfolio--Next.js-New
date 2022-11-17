import React, { useRef } from "react";
import { Container } from "./Container";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34bfr0i",
        "template_km9isc6",
        form.current,
        "user_aFdDwylEm3OuZU7xFR8TL"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("submit successfully");
            document.getElementById("myForm").reset();
          }
        },
        (error) => {
          toast.error(error);
        }
      );
  };
  return (
    <section id="contact" className="p-2 mt-[5rem] bg-blue relative  py-[6rem]">
      <Container>
        <header>
          <h5 className="text-[3rem] font-bold mb-[.6rem]">Contact</h5>
        </header>

        <form
          id="myForm"
          onSubmit={sendEmail}
          ref={form}
          className="relative z-50 form mt-[6rem] md:w-[70%]"
        >
          <label htmlFor="name" className="text-[2.4rem] inlilne-block">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[8.9rem] text-[2rem] p-3 mb-[2rem]"
          />
          <label htmlFor="email" className="text-[2.4rem] inlilne-block mt">
            Email
          </label>
          <input
            required
            type="text"
            id="email"
            name="email"
            className="my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[8.9rem] text-[2rem] p-3"
          />
          <label
            name="message"
            htmlFor="message"
            className="text-[2.4rem] inlilne-block "
          >
            Message
          </label>
          <textarea
            required
            type="text"
            id="message"
            className="my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[17.9rem] text-[2rem] p-3 resize-none"
          />
          <button
            onClick={sendEmail}
            href="#!"
            className="cursor-pointer relative submit-btn text-[2.4rem] font-bold bg-pink-secondary px-[5rem] py-[1rem] inline-block mt-5 rounded-[8px] border-[3px] border-black "
          >
            Submit
          </button>
        </form>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1500,
            fontSize: "1.5rem",
          }}
        />
      </Container>
    </section>
  );
};
