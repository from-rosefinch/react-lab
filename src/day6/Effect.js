import EffectBasic from "./EffectBasic"
import Timer from "./Timer"
import LayoutEffect from "./LayoutEffect"

//리엑트는 화면에 그려주면 끝!
//부가적인 효과(사이드 이펙트)
//이걸 관리해주는 훅이 useEffect임

const Effect = () => {
  return (
    // <EffectBasic />
    // <Timer />
    <LayoutEffect />
  )
}

export default Effect