import { useState } from "react";
// 클래스명을 styled.css클래스명 으로 해야 적용된다.
import styled from "./Box.module.css";
import PropTypes from "prop-types";

function Box({
  productNmae,
  address = "서울 동작구 흑석동",
  price,
  img = "img/ggang.png",
}) {
  // 하트 이미지 누르면 좋아요 증가하는 기능. ; state 이용
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className={styled.productModule}>
      <div className="productpPoto">
        <img className={styled.photo} src={img}></img>
      </div>
      <div className="product-name">{productNmae}</div>
      <div className="product-address">{address}</div>
      <div className="product-detail">
        <div className="product-price">{price}</div>
        <div className="product-like">
          {/* 리액트에서 이미지 넣을 때는 public폴더안에 img 폴더를만들어 안에 이미지파일을 넣는다. 그리고 img/파일명 으로 불러오면 된다. 추가로 image 가 아닌 img로 써야함. */}
          <img
            onClick={onClick}
            className="product-heart"
            src="img/like.png"
          ></img>
          <div className="like-num">{counter}</div>
        </div>
      </div>
    </div>
  );
}

export default Box;
