
import PropTypes from 'prop-types';
import { Option, Total } from "./Statistics.styled"
export const Statistics = ({good,neutral,bad, total,positivePercentage} ) => {
  return (
    <>
      {total ? (<><Option>Good: {good}</Option>
    <Option>Neutral: {neutral }</Option>
      <Option>Bad: {bad}</Option>
      <Total>Total: {total}</Total>
      <Total>Positive feedback: {positivePercentage}%</Total></>):(<Notification message="There is no feedback"/>)}
      
    </>
    
  )
  
}
const Notification = ({message}) => {
  return (
    <div>{message }</div>
   )
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,

}
 
Notification.propTypes = {
  message:PropTypes.string,
}