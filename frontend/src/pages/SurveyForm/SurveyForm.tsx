import styles from "./SurveyForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import questions from "../../assets/form_questions";
import { useState } from "react";

type Inputs = {
  [key: string]: string | string[];
};

export const SurveyForm = () => {
  const [currentSection, setCurrentSection] = useState<
    "required" | "informative"
  >("required");
  const [currentPage, setCurrentPage] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const questionsPerPage = 5;
  const currentQuestions =
    currentSection === "required"
      ? questions.required_questions
      : questions.informative_questions;

  const totalPages = Math.ceil(currentQuestions.length / questionsPerPage);
  const startIndex = currentPage * questionsPerPage;
  const displayedQuestions = currentQuestions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousSection = () => {
    if (currentSection === "informative") {
      setCurrentSection("required");
      setCurrentPage(
        Math.ceil(questions.required_questions.length / questionsPerPage) - 1
      );
      scrollToTop();
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      currentSection === "required" &&
      currentPage ===
        Math.ceil(questions.required_questions.length / questionsPerPage) - 1
    ) {
      setCurrentSection("informative");
      setCurrentPage(0);
      scrollToTop();
    } else if (
      currentSection === "informative" &&
      currentPage ===
        Math.ceil(questions.informative_questions.length / questionsPerPage) - 1
    ) {
      console.log("Final submission:", data);
    } else {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case "radio":
        return (
          <div className={styles.questionItem}>
            <p className={styles.questionText}>{question.question}</p>
            {question.option_array.map((option: string) => (
              <div key={option} className={styles.radioOption}>
                <input
                  type="radio"
                  {...register(`question_${question.id}`)}
                  value={option}
                  id={`${question.id}_${option}`}
                />
                <label htmlFor={`${question.id}_${option}`}>{option}</label>
              </div>
            ))}
            {question.other && (
              <div className={styles.otherOption}>
                <input
                  type="text"
                  {...register(`question_${question.id}_other`)}
                  placeholder="Other (please specify)"
                />
              </div>
            )}
          </div>
        );

      case "checkbox":
        return (
          <div className={styles.questionItem}>
            <p className={styles.questionText}>{question.question}</p>
            {question.option_array.map((option: string) => (
              <div key={option} className={styles.checkboxOption}>
                <input
                  type="checkbox"
                  {...register(`question_${question.id}`)}
                  value={option}
                  id={`${question.id}_${option}`}
                />
                <label htmlFor={`${question.id}_${option}`}>{option}</label>
              </div>
            ))}
            {question.other && (
              <div className={styles.otherOption}>
                <input
                  type="text"
                  {...register(`question_${question.id}_other`)}
                  placeholder="Other (please specify)"
                />
              </div>
            )}
          </div>
        );

      case "textbox":
        return (
          <div className={styles.questionItem}>
            <p className={styles.questionText}>{question.question}</p>
            <textarea
              {...register(`question_${question.id}`)}
              className={styles.textArea}
            />
          </div>
        );
    }
  };

  return (
    <div className={styles.surveyForm}>
      <h2 className={styles.sectionTitle}>
        {currentSection === "required"
          ? "Required Questions"
          : "Additional Information"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {displayedQuestions.map((question) => (
          <div key={question.id} className={styles.questionContainer}>
            {renderQuestion(question)}
          </div>
        ))}

        <div className={styles.navigation}>
          {(currentPage > 0 || currentSection === "informative") && (
            <button
              type="button"
              onClick={() => {
                currentPage > 0
                  ? setCurrentPage((prev) => {
                      scrollToTop();
                      return prev - 1;
                    })
                  : handlePreviousSection();
              }}
              className={styles.navButton}
            >
              Previous
            </button>
          )}
          <button type="submit" className={styles.navButton}>
            {currentSection === "informative" && currentPage === totalPages - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};
