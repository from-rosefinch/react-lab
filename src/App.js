import'./app.css';
// import Card from "./day2/Card";
// import Parent from './day3/Parent';
// import ListWrap from './day3/ListWrap';
import Event from './day4/Event';

const App = ()=>{
  return(
    //화면에 보여지는 영역 : JSX
    // <div className="card-wrap">
    //   <Card file = 'day1' title='day1'/>
    //   <Card file = 'day2' title='day2'/>
    //   <Card file = 'day3' title='dat3'/>
    // </div>
    <div className='app'>
      {/* <Parent /> */}
      {/* <ListWrap /> */}
      <Event />
    </div>
    
  );
}
export default App;