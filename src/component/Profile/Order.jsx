import React, { useEffect } from 'react';
import OrderCard from './OrderCard';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersOrder } from '../State/Order/Action';

const Order = () => {
  const { auth, order } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUsersOrder(auth.jwt));
    }
  }, [auth.jwt, dispatch]);

  useEffect(() => {
    if (!auth.jwt) {
      navigate("/login");
    }
  }, [auth.jwt, navigate]);

  if (!auth.jwt) {
    return null;
  }

  if (order.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src="/images/loading.gif" alt="loading" />
      </div>
    );
  }

  if (order.error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src="/images/error.gif" alt="error" />
      </div>
    );
  }

  if (order.orders?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="/images/empty.gif" alt="empty" />
        <h2 className="text-white text-lg mt-4">No orders found</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders?.map((order) =>
          order.items.map((item) => (
            <OrderCard key={item.id} order={order} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
