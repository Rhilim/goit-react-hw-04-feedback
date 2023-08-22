import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import { Wrapper } from './Feedback/Section.styled';
import { Statistics } from './Feedback/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClickGood = () => {
    setGood(prevState => good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(prevState => neutral + 1);
  };

  const handleClickBad = () => {
    setBad(prevState => bad + 1);
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };


  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Number((good / countTotalFeedback()) * 100).toFixed(0);
  };

  const allParamsAreZero = good === 0 && neutral === 0 && bad === 0;

  return (
    <Wrapper>
      <Section title="Please leave feedback" >
        <FeedbackOptions
          onLeaveFeedbackGood={handleClickGood}
          onLeaveFeedbackNeutral={handleClickNeutral}
          onLeaveFeedbackBad={handleClickBad}
        />
      </Section>

      <Section title="Statistics">
        {allParamsAreZero ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
};
