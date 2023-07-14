import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants/theme';

const BornDatePicker = () => {
  const defaultDate = new Date(1990, 0, 1); // 1 de enero de 1990
  const [date, setDate] = useState(defaultDate);

  const handleDateChange = (newDate: any) => {
    const formattedDate = newDate.toLocaleDateString('es-ES');
    setDate(formattedDate);
  };

  return (
    <View>
      <DatePicker
        date={date}
        onDateChange={handleDateChange}
        mode="date"
        androidVariant="nativeAndroid"
        textColor={COLORS.lightGray}
        locale="es"
      />
    </View>
  );
};

export default BornDatePicker;
