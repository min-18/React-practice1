import Box from "./Box";
import styles from "./App.module.css";

// npm i prop-types 명령어로 터미널에 설치해서 propTyes 사용

function App() {
  return (
    <div>
      <header className="top-cotainer">
        <img className="logo" src="img/carrot_market.png"></img>
      </header>
      <section className={styles.carrotSection}>
        <div className={styles.cotainer}>
          <div className={styles.title}>인기중고</div>
          <div className={styles.boxWrap}>
            <Box productNmae={"새우깡"} price={"10만원"} />
            <Box
              productNmae={"바나나킥"}
              price={"3만원"}
              img={"img/cow.jpeg"}
            />
            <Box
              productNmae={"바나나킥"}
              price={"3만원"}
              img={"img/cow.jpeg"}
            />
            <Box
              productNmae={"바나나킥"}
              price={"3만원"}
              img={"img/book.jpeg"}
            />
            <Box productNmae={"넛지"} price={"1만원"} img={"img/cow.jpeg"} />
            <Box productNmae={"넛지"} price={"1만원"} />
            <Box productNmae={"자전거"} price={"11만원"} />
            <Box productNmae={"넛지"} price={"1만원"} img={"img/book.jpeg"} />
            <Box productNmae={"넛지"} price={"1만원"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
