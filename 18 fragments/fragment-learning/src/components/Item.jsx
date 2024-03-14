import styles from "./item.module.css";
const Item = ({ foodItem }) => {
  return (
    <li className={`${styles.kgitem} list-group-item `}>
      {/* <span className={"${styles.kgspan}"}>{foodItem}</span> */}
      <span className={styles.kgspan}>{foodItem}</span>
    </li>
  );
};
export default Item;
