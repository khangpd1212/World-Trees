import { Row, Col, Radio } from "antd";
import {
  CheckCircleFilled,
  MessageFilled,
  ShoppingCartOutlined,
  StarFilled,
  SmileFilled,
  FacebookFilled,
  InstagramFilled,
  SkypeFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setLayoutStatus } from "redux/layout";
import FormSearch from "components/Product/FormSearch";
import BreadCrumb from "components/Base/BreadCrumb";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "styles/detail.scss";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { detailProduct, selectProducts } from "redux/product";

export default function Detail() {
  const dispatch = useDispatch();
  dispatch(setLayoutStatus(true));
  const history = useHistory();
  const { id } = useParams();
  const { product } = useSelector(selectProducts);
  console.log(id);
  useEffect(() => {
    if (id) {
      dispatch(detailProduct(id));
    } else {
      history.push("/");
    }
  }, [dispatch, id, history]);
  console.log(product);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="detail">
      <BreadCrumb page="product" item="detail product" />
      <FormSearch />
      <Row className="pro">
        {/* hinh anh san pham */}
        <Col className="avtpro" xs={24} sm={12}>
          <img src={product.image[0]} alt="" />
          {/* hinh lien quan */}
          <Col className="image">
            <div className="imageCon">
              <img src="/images/sp1.png" alt="" />
            </div>
            <div className="imageCon">
              <img src="/images/sp1.png" alt="" />
            </div>
            <div className="imageCon">
              <img src="/images/sp1.png" alt="" />
            </div>
          </Col>
        </Col>
        {/* thong tin san pham */}
        <Col className="infor" xs={24} sm={12}>
          <div className="Category">
            <div className="hrCategory"></div>
            <p className="succulent">{product.product_name}</p>
          </div>
          <div className="New_collection">
            <div className="newnewCollect">
              <div className="hrNewCollect"></div>
            </div>
            <p className="price">
              $<span>{product.price}</span>
            </p>
          </div>
          {/* màu số lượng  */}
          <div className="color_quantity">
            <div className="color">
              <p>color</p>
              <Radio.Group defaultValue="a">
                <Radio.Button
                  className="color__item green"
                  value="a"
                ></Radio.Button>
                <Radio.Button
                  className="color__item purple"
                  value="b"
                ></Radio.Button>
                <Radio.Button
                  className="color__item yellow"
                  value="c"
                ></Radio.Button>
              </Radio.Group>
            </div>
            <span className="textQuantyti">quantity</span>
            <div className="quantity">
              <button className="btn1">-</button>
              <h3 className="btn2">1</h3>
              <button className="btn3">+</button>
            </div>
          </div>
          {/* chia sẻ  */}
          <div className="stock">
            <p>
              {" "}
              {<CheckCircleFilled className="iconV" />}
              {product.inventory} in stock
            </p>
            <p>
              SHARE NOW: <MessageFilled className="icon" />{" "}
              <FacebookFilled className="icon" />{" "}
              <InstagramFilled className="icon" />{" "}
              <SkypeFilled className="icon" />{" "}
              <TwitterCircleFilled className="icon" />{" "}
            </p>
          </div>
          <div className="footerInfor">
            <div>
              <button className="btn">
                {" "}
                <ShoppingCartOutlined className="Cart" />
                ADD TO CART
              </button>
              <button className="btn">BY NOW</button>
            </div>
          </div>
        </Col>
        {/* thong tin san pham  */}
        <Col className="textD" xs={24}>
          <div className="hrtext"></div>
          <span>{product.description}</span>
          <ul>
            <li>+ Dolor sit amet et dolore magna.</li>
            <li>+ Consectetur adipiscing elit, sed do eiusmod tempor.</li>
            <li>+ 1914 translation by H. Rackham.</li>
          </ul>
        </Col>
        <Col className="proCmt" xs={24}>
          <div className="hrCmt"></div>
        </Col>
        <Col className="boxStar" xs={24} sm={15}>
          <div className="contaistar">
            <div className="numberStar">
              {" "}
              <p>4.9/5</p>
            </div>
            <div className="btnStar">
              <button>ALL</button>
              <button>5 STAR (750)</button>
              <button>4 STAR (58)</button>
              <button>3 STAR (13)</button>
              <button>2 STAR (5)</button>
              <button>1 STAR (2)</button>
              <button>ALL COMMENT (616)</button>
            </div>
          </div>
          <div className="commnet">
            <div className="itemComment">
              <div className="avt_name">
                <div>
                  <SmileFilled className="avt" />
                </div>
                <div className="name">
                  <h3>tnu_yeulinhnhieu</h3>
                  <div className="star">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                </div>
              </div>
              <div className="textCommnet">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  accusantium, labore nam obcaecati asperiores nihil officiis
                  earum voluptate maiores sed?
                </h4>
              </div>
              <div className="hritemComment"></div>
            </div>
            <div className="itemComment">
              <div className="avt_name">
                <div>
                  <SmileFilled className="avt" />
                </div>
                <div className="name">
                  <h3>tnu_yeulinhnhieu</h3>
                  <div className="star">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                </div>
              </div>
              <div className="textCommnet">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  accusantium, labore nam obcaecati asperiores nihil officiis
                  earum voluptate maiores sed?
                </h4>
              </div>
              <div className="hritemComment"></div>
            </div>
            <div className="itemComment">
              <div className="avt_name">
                <div>
                  <SmileFilled className="avt" />
                </div>
                <div className="name">
                  <h3>tnu_yeulinhnhieu</h3>
                  <div className="star">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                </div>
              </div>
              <div className="textCommnet">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  accusantium, labore nam obcaecati asperiores nihil officiis
                  earum voluptate maiores sed?
                </h4>
              </div>
              <div className="hritemComment"></div>
            </div>
            <div className="itemComment">
              <div className="avt_name">
                <div>
                  <SmileFilled className="avt" />
                </div>
                <div className="name">
                  <h3>tnu_yeulinhnhieu</h3>
                  <div className="star">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                </div>
              </div>
              <div className="textCommnet">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  accusantium, labore nam obcaecati asperiores nihil officiis
                  earum voluptate maiores sed?
                </h4>
              </div>
              <div className="hritemComment"></div>
            </div>
          </div>
        </Col>
        <Col className="voucher" xs={24} sm={8}>
          <div>
            <p>SHOP DISCOUNT</p>
            <div className="voucherItem">
              <div className="voucherMain">
                <h4>15% off</h4>
                <p>maximum $5.00</p>
                <h5>20/09/2021-15/10/2021</h5>
              </div>
              <div className="voucherAdd">
                <button>SAVE</button>
              </div>
            </div>
            <div className="voucherItem">
              <div className="voucherMain">
                <h4>15% off</h4>
                <p>maximum $5.00</p>
                <h5>20/09/2021-15/10/2021</h5>
              </div>
              <div className="voucherAdd">
                <button>SAVE</button>
              </div>
            </div>
          </div>
          <div className="hotSelling">
            <p>HOT SELLING</p>
            <div className="img">
              <img src="./image/product3.pbg" alt="" />
            </div>
          </div>
        </Col>

        <Col className="aboveSlide">
          <div className="aboveSlide_Right"></div>
          <div className="aboveSlide_Mid">You Might Also Like</div>
          <div className="aboveSlide_Left"></div>
        </Col>
        <Col className="slidePro">
          <div>
            <Slider {...settings}>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
              <div className="itemPro">
                <img className="itemImg" src="../images/section3.png" alt="" />
                <div className="info">
                  <h4>name</h4>
                  <p>pice</p>
                </div>
              </div>
            </Slider>
          </div>
        </Col>
      </Row>
    </div>
  );
}
function onChange(a, b, c) {
  console.log(a, b, c);
}