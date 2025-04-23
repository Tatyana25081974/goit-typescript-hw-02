import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.btnContainer}>
      <button onClick={onClick} className={styles.loadMoreButton}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn