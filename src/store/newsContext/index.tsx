import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {News} from '../../types/auth/news';

interface SavedNews {
  data: News[];
  savedNews: News[];
  addNews: (news: News) => void;
  removeNews: (id: string) => void;
  savedIcon: () => void;
  isSaved: boolean;
  isFavorite: boolean;
  favoriteNews: (id?: string) => void;
  handleFavoritePress: (id: string) => void;
  handleSavePress: (id: string) => void;
}

const defaultValue: SavedNews = {
  data: [],
  savedNews: [],
  addNews: () => {},
  removeNews: () => {},
  savedIcon: () => {},
  isSaved: false,
  isFavorite: false,
  favoriteNews: () => {},
  handleFavoritePress: () => {},
  handleSavePress: () => {},
};

export const NewsContext = createContext(defaultValue);

export const NewsProvider = ({children}: any) => {
  const [data, setData] = useState<News[]>([]);
  const [savedNews, setSavedNews] = useState<News[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.staging.security.stetamalo.cloud/notice',
        );
        const responseData = await response.json();
        const newsFavorite = responseData.items.map((item: any) => {
          return {
            ...item,
            isFavorite: false,
            isSave: false,
          };
        });
        setData(newsFavorite);
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  const handleFavoritePress = (id: string) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        }
        return item;
      });
    });
  };

  const handleSavePress = (id: string) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isSave: !item.isSave,
          };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    loadSavedNews();
  }, []);

  useEffect(() => {
    saveSavedNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedNews]);

  const savedIcon = () => {
    setIsSaved(!isSaved);
  };

  const favoriteNews = () => {
    setIsFavorite(!isFavorite);
  };

  const loadSavedNews = async () => {
    try {
      const storedSavedNews = await AsyncStorage.getItem('savedNews');
      if (storedSavedNews) {
        setSavedNews(JSON.parse(storedSavedNews));
      }
    } catch (error) {
      console.log('Error loading saved news:', error);
    }
  };

  const saveSavedNews = async () => {
    try {
      await AsyncStorage.setItem('savedNews', JSON.stringify(savedNews));
    } catch (error) {
      console.log('Error saving saved news:', error);
    }
  };

  const addNews = (news: News) => {
    setSavedNews([news, ...savedNews]);
  };

  const removeNews = (id: string) => {
    setSavedNews(savedNews.filter(news => news.id !== id));
  };

  console.log('savedNews', savedNews);

  return (
    <NewsContext.Provider
      value={{
        // functions
        addNews,
        removeNews,
        savedIcon,
        favoriteNews,
        handleFavoritePress,
        handleSavePress,
        //states
        data,
        savedNews,
        isSaved,
        isFavorite,
      }}>
      {children}
    </NewsContext.Provider>
  );
};
