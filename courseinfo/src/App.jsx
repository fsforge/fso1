const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.ppart} {props.pex}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part ppart={props.part} pex={props.exercise}/>
    </>
  )
}

const Footer = (props) => {
  return (
    <p>
      Number of exercises {props.ex}
    </p>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Footer ex={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
