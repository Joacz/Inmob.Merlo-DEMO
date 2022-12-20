import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useBuildings = (url) => {
  const baseUrl = url;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setPosts(response.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts;
};
