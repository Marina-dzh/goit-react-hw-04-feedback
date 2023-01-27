import React, { Component } from "react";
import { FeedbackOptions } from "./Feedback/feedback";
import { Statistics } from "./Statistics/statistics";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
    bad: 0,
  
  }
  
countTotalFeedback = ({ good, neutral, bad } = this.state) => {
   return good+bad+neutral
  }
  countPositiveFeedbackPercentage = ({ good } = this.state) => { if
    (this.countTotalFeedback()) 
    {return (good * 100 / this.countTotalFeedback()).toFixed(0)} else {return}
  }
  
  onLeaveFeedback = (feedback) => {
    this.setState(prevState => {
      

      return {
        [feedback]: prevState[feedback] + 1
      }
    })
}
  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div style={{
        height: '100vh',
        fontSize: 20,
        margin: 40,
      }}>
        <Section title="Please leave feedback">
<FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={this.onLeaveFeedback} >
</FeedbackOptions></Section>
        
        
        <Section title="Statistacs">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={Number(this.countPositiveFeedbackPercentage())}></Statistics></Section>
      </div>
  );}
};

 const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);



