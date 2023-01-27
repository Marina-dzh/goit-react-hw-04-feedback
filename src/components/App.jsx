
import { useState } from "react";
import { FeedbackOptions } from "./Feedback/feedback";
import { Statistics } from "./Statistics/statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
  
  
  const countTotalFeedback = () => {
    return good + bad + neutral
  }
  const countPositiveFeedbackPercentage =() => { 
    if
      (countTotalFeedback()) { return (good * 100 / countTotalFeedback()).toFixed(0) } else { return }
  }
  
  const onLeaveFeedback = (name) => {
    
    switch (name)
    {
      case "good":
       
        setGood(pS => pS + 1);
        break;
      case "neutral":
        
        setNeutral(pS => pS + 1);
        break;
      case "bad":

        setBad(pS => pS + 1);
        break;
      default:
        alert("Something went wrong, please reload page")
  }
  
}

    return (
      <div style={{
        height: '100vh',
        fontSize: 20,
        margin: 40,
      }}>
        <Section title="Please leave feedback">
<FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onLeaveFeedback} >
</FeedbackOptions></Section>
        
        <Section title="Statistacs">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={Number(countPositiveFeedbackPercentage())}></Statistics></Section>
      </div>
  );}
;

 const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);



