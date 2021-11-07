import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div className={classes.hamburger} onClick={props.onClick}>
      <div className={classes.bars} />
      <div className={classes.bars} />
      <div className={classes.bars} />
    </div>
  );
};

export default Hamburger;
