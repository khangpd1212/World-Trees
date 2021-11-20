import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCatalogs } from "redux/catalog";
import { fetchProducts } from "redux/product";
import "styles/admin.scss";
import { AddCategory, AddNew, AddProduct, CategoryAdmin, New, OrderAdmin, ProductAdmin, Dashboard, User } from "../../pages";
import LoginDesktop from "../../pages/Login/LoginDesktop";
import HeaderAdmin from "../Admin/HeaderAdmin";
import SideComponent from "../Admin/SideComponent";

const { Content } = Layout;

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCatalogs())
  }, [dispatch])

  useEffect(() => {
    if (!token) {
      setIsOpenLogin(true)
    }
  }, [token])

  return (
    <div className="root-admin">
      <Layout>
        <SideComponent isOpen={isOpen} />
        <Layout className="site-layout">
          <HeaderAdmin isOpen={isOpen} setIsOpen={setIsOpen} />
          <Content>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/admin/product" exact component={ProductAdmin} />
            <Route path="/admin/product/add" exact component={AddProduct} />
            <Route path="/admin/category" exact component={CategoryAdmin} />
            <Route path="/admin/category/add" exact component={AddCategory} />
            <Route path="/admin/new" exact component={New} />
            <Route path="/admin/users" exact component={User} />
            <Route path="/admin/new/add" exact component={AddNew} />
            <Route path="/admin/order" exact component={OrderAdmin} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
