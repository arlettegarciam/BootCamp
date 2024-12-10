const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //EJERCICIOS 1.1, 1.2, 1.3 ,1.4

  const Header = (props) => {
    return <h1>{props.course.name}</h1>
  } 

  const Part = (props)=> <p> {props.name} {props.exercises}</p>

  const Content = (props) => {
    return <div>
      <Part name={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part name={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part name={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </div>
  }

  const Total =(props) => <p> Number of exercises {Number(props.parts.parts[0].exercises) + Number(props.parts.parts[1].exercises) + Number(props.parts.parts[2].exercises)}</p> 
  
  return (
    <div>
      <Header course={course}/>
      <Content  parts={course} />
      <Total parts= {course}/>
    </div>
  )
}

export default App