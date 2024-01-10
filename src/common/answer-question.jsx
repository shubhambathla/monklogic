import React,{useState} from "react";
import answer_question_data_web_dev from "../data/answer-question-data-web-dev";
import answer_question_data_content_creation from "../data/answer-question-data-content-creation";
import answer_question_data_crypto_solutions from "../data/answer-question-data-crypto-solutions";
import answer_question_data_website_designing from "../data/answer-question-data-web-desgning";
import answer_question_data_cloud_services from "../data/answer-question-data-cloud-services";
import answer_question_data_digital_marketing from "../data/answer-question-data-digital-marketing";


const AnswerQuestionWebDev = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_web_dev.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AnswerQuestionCryptoSolutions = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_crypto_solutions.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const AnswerQuestionContentCreation = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_content_creation.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const AnswerQuestionWebDesigning = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_website_designing.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AnswerQuestionCloudServices = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_cloud_services.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AnswerQuestionDigitalMarketing = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data_digital_marketing.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestionWebDev;
export {AnswerQuestionCryptoSolutions, AnswerQuestionContentCreation,AnswerQuestionWebDesigning, AnswerQuestionCloudServices, AnswerQuestionDigitalMarketing };

