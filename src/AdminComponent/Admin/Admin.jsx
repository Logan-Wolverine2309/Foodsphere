import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AdminSideBar } from './AdminSideBar';
import { RestaurantDashboard } from '../Dashboard/Dashboard';
import { Orders } from '../Orders/Orders';
import { Menu } from '../Menu/Menu';
import FoodCategory from '../FoodCategory/FoodCategory';
import Ingredients from '../Ingredients/Ingredients';
import { Events } from '../Events/Events';
import RestaurantDetails from './RestaurantDetails';
import CreateMenuForm from '../Menu/CreateMenuForm';

import { getRestaurantCategory } from '../../component/State/Restaurant/Action';
import { fetchRestaurantsOrder } from '../../component/State/RestaurantOrder/Action';

export const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant } = useSelector(state => state.restaurant);
  const restaurantId = restaurant?.usersRestaurant?.id;

  useEffect(() => {
    if (!restaurantId) return;

    dispatch(getRestaurantCategory({ jwt, restaurantId }));
    dispatch(fetchRestaurantsOrder({ jwt, restaurantId }));
  }, [restaurantId, dispatch, jwt]);

  return (
    <div className="lg:flex min-h-screen">
      <aside className="lg:w-[20%]">
        <AdminSideBar />
      </aside>

      <main className="lg:w-[80%] w-full p-4">
        <Routes>
          <Route path="/" element={<RestaurantDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category" element={<FoodCategory />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/event" element={<Events />} />
          <Route path="/details" element={<RestaurantDetails />} />
          <Route path="/add-menu" element={<CreateMenuForm />} />
        </Routes>
      </main>
    </div>
  );
};
