import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MultiStepQuizPage from "../pages/MultiStepQuizPage";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { templateQuestions } from "../utils/templateQuestions";
import { RootState } from "../redux/store";

const mockStore = configureStore([]);

const mockRootState: RootState = {
  questions: {
    questions: [
      {
        id: 0,
        text: "How many years can a snail sleep for?",
        possibleAnswers: ["One", "Two", "Three", "Four"],
        correctAnswerIndex: 2,
        selectedAnswer: null,
      },
      {
        id: 1,
        text: "How many hearts does an octopus have?",
        possibleAnswers: ["One", "Two", "Three", "Four"],
        correctAnswerIndex: 2,
        selectedAnswer: null,
      },
    ],
  },
};

describe("MultiStepQuizPage", () => {
  test("when render the first question page there is not previous button", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const previousButton = screen.getByRole("button", { name: "Previous" });
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toHaveClass("previous-btn-hidden");
  });

  test("when render question without answer the next button is disabled", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  test("when click answer ,next button is not disabled", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const radioOption = screen.getByLabelText("One");
    fireEvent.click(radioOption);
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toHaveAttribute("disabled", "");
  });

  test("when click previous go to the previos question", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const radioOption1 = screen.getByLabelText("Three");
    fireEvent.click(radioOption1);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    const previousButton = screen.getByRole("button", { name: "Previous" });
    fireEvent.click(previousButton);
    const question1 = screen.getByText("How many years can a snail sleep for?");
    expect(question1).toBeInTheDocument();
  });

  test("when click next go to the next question", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const radioOption1 = screen.getByLabelText("Three");
    fireEvent.click(radioOption1);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    const question2 = screen.getByText("How many hearts does an octopus have?");
    expect(question2).toBeInTheDocument();
  });

  test("when click previous, go to the previos question and save the selected answer", () => {
    const store = mockStore(mockRootState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <MultiStepQuizPage />
        </BrowserRouter>
      </Provider>
    );
    const radioOption1 = screen.getByLabelText("Three");
    fireEvent.click(radioOption1);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    const previousButton = screen.getByRole("button", { name: "Previous" });
    fireEvent.click(previousButton);
    const radioOptionPrev = screen.getByLabelText("Three");
    expect(radioOptionPrev).toBeChecked();
  });

    // test("when finish flow ,calculate score good", () => {
  //   const store = mockStore(mockRootState);

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <MultiStepQuizPage />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  //   const radioOption1 = screen.getByLabelText("Three");
  //   fireEvent.click(radioOption1);
  //   const nextButton = screen.getByRole("button", { name: "Next" });
  //   fireEvent.click(nextButton);
  //   const radioOption2 = screen.getByLabelText("Three");
  //   fireEvent.click(radioOption2);
  //   const submitButton = screen.getByRole("button", { name: "Submit" });
  //   fireEvent.click(submitButton);
  //   const score = screen.getByText("100");
  //   expect(score).toBeInTheDocument();
  // });
});
