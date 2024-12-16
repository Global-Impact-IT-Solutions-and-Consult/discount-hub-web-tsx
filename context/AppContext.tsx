"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { error } from "../helpers/Alert";

const AppContext = createContext<any>(null);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://dolphin-app-2irch.ondigitalocean.app";
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [topbarName, setTopbarName] = useState("Welcome!");

  // HERO SECTION
  const [leftHero, setLeftHero] = useState([]);

  // PRODUCTS
  const [allProducts, setAllProducts] = useState([]);
  const [oneProductId, setOneProductId] = useState();
  const [oneProduct, setOneProduct] = useState([]);

  // CATEGORIES
  const [allCategories, setAllCategories] = useState([]);
  const [oneCategory, setOneCategory] = useState([]);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/product`, {
        headers: {
          "content-type": "application/json",
        },
      });
      // console.log("🚀 ~ getAllProducts ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setAllProducts(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getAllProducts ~ err:", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  const getOneProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/product/${oneProductId}`, {
        headers: {
          "content-type": "application/json",
        },
      });
      // console.log("🚀 ~ getOneProduct ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setOneProduct(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getOneProduct ~ err: ", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  // CATEGORIES
  // Fetch left hero categories
  const getAllCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseURL}/product/categories/product-count`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ getAllCategories ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setAllCategories(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getAllCategories ~ err:", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("3dik4n.init");
      // fetchServices();
      // getLeftHeroCategories();
      // getAllProducts();
      getAllProducts();
      getAllCategories();
    }
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (oneProductId) {
      getOneProduct();
    }
  }, [oneProductId]);

  return (
    <AppContext.Provider
      value={{
        baseURL,
        user,
        loading,
        topbarName,
        setLoading,

        // HERO SECTION
        leftHero,
        setLeftHero,
        // getLeftHeroCategories,

        // PRODUCTS
        oneProduct,
        allProducts,
        oneProductId,
        setOneProduct,
        getOneProduct,
        setAllProducts,
        getAllProducts,
        setOneProductId,

        // CATEGORIES
        oneCategory,
        allCategories,
        setOneCategory,
        getAllCategories,
        setAllCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
