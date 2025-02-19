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
  console.log(props.part)
  console.log(props.exercise)
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
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  // console.log(part1.name)
  // console.log(part1.exercises)

  return (
    <div>
      <Header course={course}/>
      <Content part={part1.name} exercise={part1.exercises}/>
      <Content part={part2.name} exercise={part2.exercises}/>
      <Content part={part3.name} exercise={part3.exercises}/>
      <Footer ex={part1.exercises+part2.exercises+part3.exercises}/> 
    </div>
  )
}

export default App
