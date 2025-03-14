import { useState } from 'react'

const Statistics = (props) => {
  if (props.all.length == 0) {
    return (
      <tr>No feedback given!</tr>
    )
  }
  if (props.pos == 0) {
    return (
      <tr>No positives so far!</tr>
    )
  }
  return (
    <>
      <StatisticsLine text="Avg" value={props.sumEval/props.all.length} />
      <StatisticsLine text="Positive" value={(props.pos/(props.all.length))*100} />
    </>
  )
}

const Button = ( { onClick, text} ) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ( {text, value} ) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clickEval, setClickEval] = useState([])
  const [sumEval, setSumEval] = useState(0)

  const handleClickGood = () => {
    setGood(good +1)
    setClickEval(clickEval.concat(1))
    setSumEval(sumEval+1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral +1)
    setClickEval(clickEval.concat(0))
  }
  const handleClickBad = () => {
    setBad(bad +1)
    setClickEval(clickEval.concat(-1))
    setSumEval(sumEval-1)
  }

  return (
    <>
      <h1>Give feedback</h1>
        <Button onClick={handleClickGood} text='Good' />
        <Button onClick={handleClickNeutral} text='Neutral' />
        <Button onClick={handleClickBad} text='Bad' />
      <h1>Statistics</h1>   
      <table><tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <Statistics sumEval={sumEval} pos={good} all={clickEval}/>
      </tbody></table>
    </>
  )
}

export default App