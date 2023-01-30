import "./Card.scss";
import img1 from "../../asset/image/bag.jpg";
import img2 from "../../asset/image/dress.jpg";
import img3 from "../../asset/image/hat.jpg";
import img4 from "../../asset/image/hood.jpg";
import img5 from "../../asset/image/jeans.jpg";
import img6 from "../../asset/image/trouse.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="cont">
        <div className="item1">
          <img src={img1} alt="" />
          <div className="wrapper">
            <div>
              <h1>Yellow women wallet</h1>
              <p>$690</p>
            </div>
          </div>
        </div>

        <div className="item1">
          <img src={img2} alt="" />
          <div className="wrapper">
            <div>
              <h1>Red dress</h1>
              <p>$50</p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img src={img3} alt="" />
          <div className="wrapper">
            <div>
              <h1>Black hat</h1>
              <p>$62</p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img src={img4} alt="" />
          <div className="wrapper">
            <div>
              <h1>Yellow top</h1>
              <p>$76</p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img src={img5} alt="" />
          <div className="wrapper">
            <div>
              <h1>Men jeans</h1>
              <p>$33</p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img src={img6} alt="" />
          <div className="wrapper">
            <div>
              <h1>men black trouser</h1>
              <p>$563</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
