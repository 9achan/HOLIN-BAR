import React from "react";
import QRCode from "qrcode.react";

const CouponPopup = ({ couponInfo, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{couponInfo.title}</h2>
        <QRCode value={couponInfo.code} size={128} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CouponPopup;
