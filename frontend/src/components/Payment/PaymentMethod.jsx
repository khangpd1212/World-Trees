import { Radio, Space } from 'antd';
import { useState } from "react";
export default function PaymentMethod() {
    const [radio, setRadio] = useState(1)

    const onChangeRadio = (e) => {
        setRadio(e.target.value);
    }   
    return (
        <div className="method">
            <div className="method__top">
                <span className="method__top--title">
                    Payment method
                </span>
                <div className="method__top--wrapper">
                    <button className="method__top--btn">Creadit/Debit cart</button>
                    <button className="method__top--btn">Electronic Wallet</button>
                    <button className="method__top--btn">Cod</button>
                </div>
            </div>
            <hr />
            <div className="method__container">
                <Radio.Group onChange={onChangeRadio} value={radio}>
                    <Space direction="vertical">
                        <Radio value={1} className="method__wrapper" id="momo">
                            <label className="radio_flex" for="momo">
                                <img src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg" alt="" />
                                <div className="method__wrapper--title">
                                    <span className="method__wrapper--title_1">MOMO Wallet</span>
                                    <span>account balance: $289.054</span>
                                </div>
                            </label>
                        </Radio>
                        <Radio value={2} className="method__wrapper" id="bank">
                            <label className="radio_flex" for="bank">
                                <img src="https://appoda.com/wp-content/uploads/2015/10/340x340bb-80.png" alt="" />
                                <div className="method__wrapper--title">
                                    <span className="method__wrapper--title_1">Agribank</span>
                                    <span>*6877</span>
                                </div>
                            </label>
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
            <hr />
            <div className="method__bottom">
                <div className="method__bottom--content">
                    <div className="product__total title-submenu">
                        <span>Product total:</span>
                        <span>$28.00</span>
                    </div>
                    <div className="shipping__fee title-submenu">
                        <span>Shipping fee:</span>
                        <span>$5.00</span>
                    </div>
                    <div className="shop__voucher title-submenu">
                        <span>Shop Voucher:</span>
                        <span>-$4.20</span>
                    </div>
                    <div className="total__payment title-submenu">
                        <span className="total__title">Total Payment:</span>
                        <span className="total">$28.80</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="order__now">
                <div className="back__button">
                    <span>back</span>
                </div>
                <button className="order__button">Order now</button>

            </div>
        </div>
    )
}