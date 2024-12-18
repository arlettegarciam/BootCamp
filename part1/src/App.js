import './App.css';
//
//EJERCICIOS 1.3-1.5
//
const Header =(props)=>{
  return <h1>{props.nombre} </h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  );
};

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Total number of exercises: {total}</p>;
};

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
  return (
    <div>
      <Header nombre = {course.name} />
      <Content parts = {course.parts}  />
      <Total parts = {course.parts} />
    </div>
  )
};

export default App;
