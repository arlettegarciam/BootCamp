const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  //EJERCICIOS 1.1, 1.2, 1.3 

  const Header = (props) => {
    return <h1>{props.course}</h1>
  } 

  const Part = (props)=> <p> {props.name} {props.exercises}</p>

  const Content = (props) => {
    return <div>
      <Part name={props.part1.name} exercises={props.part1.exercises}/>
      <Part name={props.part2.name} exercises={props.part2.exercises}/>
      <Part name={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  }

  const Total =(props) => <p> Number of exercises {Number(props.exercises1) + Number(props.exercises2)+ Number(props.exercises3)}</p> 
  
  return (
    <div>
      <Header course={course}/>
      <Content  part1={part1} part2={part2} part3={part3}/>
      <Total exercises1= {part1.exercises} exercises2= {part2.exercises} exercises3={ part3.exercises}/>
    </div>
  )
}

export default App