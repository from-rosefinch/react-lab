const Child = ({count,onChange}) => {
  // console.log(count.count);
  console.log(count);
  // const handleClick = ()=>{
  //   count++;
  // }
  return (
    <div className="child">
      <div>child : {count}</div>
      {/* <button onClick={onChange}>
        자식에게 카운트 증가
      </button> */}
      <button onClick={onChange(count+1)}>
        자식에게 카운트 증가
      </button>
    </div>
  );
}

export default Child