import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useBuildingById = (url) => {
  const baseUrl = url;
  const [post, setPost] = useState([]);

  const getPost = async () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setPost(response.data);
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return post;
};
