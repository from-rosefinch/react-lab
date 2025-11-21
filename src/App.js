import'./app.css';
import Card from "./day2/Card";

const App = ()=>{
  return(
    //화면에 보여지는 영역 : JSX
    <div className="card-wrap">
      <Card file = 'day1' title='day1'/>
      <Card file = 'day2' title='day2'/>
      <Card file = 'day3' title='dat3'/>
    </div>
  );
}
export default App;