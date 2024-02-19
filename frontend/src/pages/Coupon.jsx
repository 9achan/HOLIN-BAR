import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CouponPage = () => {
  const [couponId, setCouponId] = useState(null);

  useEffect(() => {
    // 在這裡發送請求以獲取會員的優惠券ID
    async function fetchCouponId() {
      try {
        const response = await axios.get('http://localhost:5501/coupons');
        const data = response.data;
        // 假設返回的數據是一個包含多個優惠券的數組，這裡只取第一個優惠券的ID
        if (data && data.length > 0) {
          setCouponId(data[0].id);
        } else {
          // 如果沒有優惠券，設置為空值
          setCouponId(null);
        }
      } catch (error) {
        console.error('獲取優惠券ID失敗：', error);
      }
    }

    fetchCouponId();
  }, []);

  return (
    <div>
      <h1>會員優惠券</h1>
      {couponId ? (
        <p>你的優惠券ID是：{couponId}</p>
      ) : (
        <p>抱歉，目前沒有可用的優惠券。</p>
      )}
    </div>
  );
};

export default CouponPage;
