/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import ArrowDown from '../../assets/svg/components/ArrowDown';
import ArrowUp from '../../assets/svg/components/ArrowUp';
import {COLORS} from '../../constants/theme';
import {Input} from '../Input';

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  tittle: string;
  control?: any;
  errors?: any;
}

const CommentCollapsible = ({
  isCollapsed,
  setIsCollapsed,
  tittle,
  control,
  errors,
}: // control,
// inputRequired,
// name,
Props) => {
  // const [comment, setComment] = useState('');

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
              color: COLORS.lightGray,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {tittle}
          </Text>
          {isCollapsed ? <ArrowDown /> : <ArrowUp />}
        </View>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <Collapsible collapsed={isCollapsed}>
          <View>
            <Input
              // onChangeText={text => setComment(text)}
              label="message"
              showLabel={false}
              control={control}
              name="message"
              placeholderColor={COLORS.lightGray}
              borderBottomColor={COLORS.lightGray}
              fontSize={15}
              textColor={COLORS.lightGray}
              type="text"
              placeholder="Escribe tu comentario"
              inputRequired
              numberOfLines={7}
              textVertical
            />
          </View>
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            {errors.message?.message}
          </Text>
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

export default CommentCollapsible;
