import { useEffect, useState } from "react";

const EffectBasic = () => {
  // 언제 실행될지 조건 : 의존성 배열
  // 처음 마운트될 때 한번 실행
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("렌더링 후 항상 실행");
    //clean
    if (count >= 5) {
      return () => {
        alert("effect 종료");
      };
    }
  }, [count]); //count값이 바뀔때마다 실행
  return (
    <div>
      <p>count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default EffectBasic;
