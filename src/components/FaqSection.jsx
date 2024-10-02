import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { MdAddBox } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className="faq-card p-3"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
      }}
      onClick={() => toggleFAQ(index)}
    >
      <div
        className="faq-question d-flex justify-content-between align-items-center fw-semibold"
        style={{ fontSize: "18px" }}
      >
        {faq.question}
        <button className="faq-toggle btn btn-link">
          {faq.open ? (
            <MdIndeterminateCheckBox color="#01aa5a" size={30}/>
          ) : (
            <MdAddBox color="#6E6C8E" size={30}/>
          )}
        </button>
      </div>
      {faq.open && (
        <div className="faq-answer mt-3" style={{ color: "#808080" }}>
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How can I get a shipping cost estimate before placing an order?",
      answer: "You can use the shipping rate calculator on our website to get a cost estimate based on the weight, dimensions and destination of your item.",
      open: true,
     },
    {
      question: "How long does it take for goods to be delivered?",
      answer: "Delivery time depends on the destination and type of service chosen.",
      open: false,
     },
     {
      question: "What happens if I am not at home when the item is delivered?",
      answer: "If you are not at home during delivery, our courier will leave a notification and you can rearrange the delivery schedule or pick up your package at the nearest branch office.",
      open: false,
     },
    {
      question: "What if my package gets lost or damaged during delivery?",
      answer:
        "If your package gets lost or damaged during delivery, please contact our customer service immediately for assistance.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        faq.open = i === index ? !faq.open : false;
        return faq;
      })
    );
  };

  return (
    <section className="faq-section container-fluid pt-5 pb-5" id="faq-section">
      <div className="container-faq d-flex flex-column">
        <div className="header-rates d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-2">
            Frequently Asked <span>Question</span>
          </h2>
          <p>These are some frequently asked questions.</p>
        </div>
        <div className="body-rates p-3 p-sm-5 row mx-auto">
          {faqs.map((faq, index) => (
            <div className="col-12 col-lg-6 mb-3 " key={index}>
              <FAQ faq={faq} index={index} toggleFAQ={toggleFAQ} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
