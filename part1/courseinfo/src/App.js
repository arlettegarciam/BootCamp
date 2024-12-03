const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //EJERCICIOS 1.1 Y 1.2

  const Header = ({course}) => <h1>{course}</h1>

  const Part = (props)=> <p> {props.part} {props.exercise}</p>

  const Content = (props) => {
    return <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  }

  const Total =(props) => <p> Number of exercises {Number(props.exercises1) + Number(props.exercises2)+ Number(props.exercises3)}</p> 
  
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total exercises1={exercises1} exercises2= {exercises2} exercises3={ exercises3}/>
    </div>
  )
}

export default App