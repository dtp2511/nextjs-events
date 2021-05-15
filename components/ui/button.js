import Link from "next/link";
import classes from "./button.module.css";

function renderLink(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

function renderButton(props) {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

const Button = (props) => {
  if (props.link) {
    return renderLink(props);
  }
  return renderButton(props);
};

export default Button;
