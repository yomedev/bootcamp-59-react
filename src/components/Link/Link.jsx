import styles from "./Link.module.css";

const Link = ({ href = "/home", alt = "home", label = "Home" }) => {
  return (
    <a className={styles.link} href={href} alt={alt}>
      {label}
    </a>
  );
};

export default Link;
