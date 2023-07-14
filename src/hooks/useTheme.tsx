import {useState, useEffect} from 'react';
import {getThemes} from '../sdk/panic';

interface ColorData {
  color1: string;
  color2: string;
  tenantId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

const useTheme = () => {
  const [colors, setColors] = useState<ColorData>();

  useEffect(() => {
    getColors();
  }, []);

  const getColors = async () => {
    const response = await getThemes();
    setColors(response);
  };

  const COLORS = {
    primary: colors ? colors.color2 : '#CE1126',
    seconsary: colors ? colors.color1 : '#002E67',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#4A4A4A',
    lightGray: '#9A9A9A',
    pink: '#cb11253d',
  };

  return COLORS;
};

export default useTheme;
