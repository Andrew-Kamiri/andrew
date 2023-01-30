import Navbar from "../../component/navbar/Navbar";
import "./Home.scss";
import imgtop from "../../asset/image/top.jpg";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { HiShoppingBag } from "react-icons/hi";
import { FcBusinesswoman } from "react-icons/fc";
import { AiFillExperiment } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
const Home = () => {
  const [status, setStatus] = useState(true);
  const data = [
    { title1: "All", key: 1, icon: <HiShoppingBag className="icon" /> },
    { title1: "Women's", key: 2, icon: <FcBusinesswoman className="icon" /> },
    { title1: "Men's", key: 3, icon: <AiFillExperiment className="icon" /> },
    { title1: "Kid's", key: 4, icon: <FaChild className="icon" /> },
    { title1: "Accesories", key: 5, icon: <FaGoodreads className="icon" /> },
  ];
  const style = {
    textDecoration: "none",
    color: "black",
  };

  // jsx
  const change = () => {
    setStatus(false);
  };
  console.log(status);
  return (
    <div className="home">
      <div className="nav">
        <Navbar />
      </div>

      <div className={status === true ? "slide" : "not"}>
        <div className="logo">
          <ImCancelCircle className="icon" onClick={change} />
          <h1>
            <span>F</span>ashion
          </h1>
        </div>
        <div className="component">
          {data.map((items) => (
            <ul key={items.key}>
              <div className="center">
                <li>
                  {items.icon}
                  {items.title1}
                </li>
              </div>
            </ul>
          ))}
        </div>
      </div>

      <div className="cont">
        <div className="top">
          <img src={imgtop} alt="" />
        </div>
        <div className="middle">
          <h1>NEW PRODUCT</h1>
          <ul>
            {data.map((items) => (
              <ul key={items.key}>
                <li>
                  <Link style={style}>{items.title1}</Link>
                </li>
              </ul>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
