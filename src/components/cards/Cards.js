import 'bootstrap/dist/css/bootstrap.css';
import './CardsStyle.css';

function Cards(props) {
  return (
    <div class="card" style={{width: "18rem", margin:"5px", backgroundColor:"#1b1b1b",color:'#fff'}}>
      <img class="card-img-top" src={props.details.image} alt="Card cap" />
      <div class="card-body">
        <h5 class="card-title">{props.details.title}</h5>
        <p class="card-text">
          {props.details.content}
        </p>
        <a href={props.details.href} className="navigate">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Cards;