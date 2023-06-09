import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.div}>
      <li className={classes.li}>
        <div>
          <h1>{props.name}</h1>
          <img src={props.image} alt="" />
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </div>
  );
};
export default MealItem;
