import PropTypes from 'prop-types';
import { Button } from "./feedback.styled";
export const FeedbackOptions = ( {options, onLeaveFeedback }) => {
    const keys = Object.keys(options)
  
  return (
    <div style={{
      display: "flex",
      gap: 10,
    }}> 
      {keys.map(option => (<Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>))}
    </div>
 );
 
  
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  option: PropTypes.oneOf(['good', 'neutral', 'bad'])
    
    

} 
