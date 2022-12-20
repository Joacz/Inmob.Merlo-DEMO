import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useCategories = () => {
  const baseUrl = 'http://192.168.40.100:8080/api/categorias/';
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};
