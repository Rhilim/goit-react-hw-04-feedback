import { FeedbackOptionsS } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => {
  
    return (
      <>
        <FeedbackOptionsS onClick={onLeaveFeedbackGood}> Good </FeedbackOptionsS>
        <FeedbackOptionsS onClick={onLeaveFeedbackNeutral}> Neutral </FeedbackOptionsS>
        <FeedbackOptionsS onClick={onLeaveFeedbackBad}> Bad </FeedbackOptionsS>
      </>
    );
  }


