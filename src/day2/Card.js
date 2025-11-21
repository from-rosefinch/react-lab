import './card.css';
const Card = ({file, title}) => {
  // const {file} = file;
  // const {title} = title;
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={`/images/${file}.png`} alt='day1이미지'/>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export default Card;