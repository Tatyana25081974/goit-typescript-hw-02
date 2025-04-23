import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <PuffLoader color="#007bff" size={80} />
    </div>
  );
};

export default Loader;