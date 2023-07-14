/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import ArrowDown from '../../assets/svg/components/ArrowDown';
import ArrowUp from '../../assets/svg/components/ArrowUp';
import {COLORS} from '../../constants/theme';
import DatePicker from 'react-native-date-picker';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {addDays, format} from 'date-fns';

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  tittle: string;
  control?: any;
  setValue?: any;
  name?: string;
}

const DatePickerCollapsible = ({
  isCollapsed,
  setIsCollapsed,
  tittle,
  setValue,
  name,
}: Props) => {
  const defaultDate = new Date(1900, 1, 1);

  const [date, setDate] = useState<any>(defaultDate);

  console.log(date);

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setValue(name, newDate);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={{
          paddingVertical: 10,
          marginBottom: 0,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: '#686868',
              fontSize: 15,
            }}>
            {tittle}
          </Text>

          {isCollapsed ? <ArrowDown /> : <ArrowUp />}
        </View>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <Collapsible collapsed={isCollapsed}>
          <View style={styles.dateContainer}>
            <DatePicker
              date={date}
              onDateChange={handleDateChange}
              mode="date"
              androidVariant="nativeAndroid"
              textColor={COLORS.lightGray}
              locale="es"
            />

            <Text />
          </View>
        </Collapsible>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ECECEC',
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 2,
  },
  title: {
    color: '#686868',
    fontSize: 15,
  },
  options: {
    fontSize: 15,
    color: '#686868',
    padding: 10,
  },
  comments: {
    color: COLORS.lightGray,
    padding: 5,
  },
});

export default DatePickerCollapsible;
