import PropTypes from "prop-types";
import styles from "./Button.module.css"; //01.css import

function Button({text}) {
    return (
        <button className={styles.btn}>{text}</button>
        /* 02. {styles.btn}와 같은 형식으로 class를 붙여주면, 
        스타일은 그대로 사용할수있고, class를 랜덤으로 다르게 붙여준다. */
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button; 