import React from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const service_id = "service_w3wabsf";
  const temp = "template_aapthcg";
  const pub_key = "RG0WJMmudrE6aYEwf";
  const handelSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      form_email: e.target.email.value,
      message: e.target.message.value,
      to_name: "Eftakharul Islam",
    };
    emailjs.send(service_id, temp, templateParams, pub_key).then(
      (result) => {
        e.target.reset();
      },
      (error) => {}
    );
  };

  return (
    <>
      <form
        onSubmit={handelSubmit}
        id="contact"
        className="pb-20 flex text-white flex-col gap-3 mt-20 w-11/12 mx-auto lg:w-4/5"
      >
        <h1 className="text-2xl font-bold text-center">Contact</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded-lg clear-start bg-transparent "
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 rounded-lg bg-transparent"
        ></textarea>
        <button
          type="submit"
          className="border border-orange-700 hover:bg-orange-800 text-white py-1 rounded-lg"
        >
          Submit
        </button>
      </form>
      <hr />
      <p className="py-3 text-center text-white text-lg">
        All Rights Reserved By Eftakharul Islam
      </p>
    </>
  );
}
