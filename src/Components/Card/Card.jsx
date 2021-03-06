import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
import moment from 'moment';
const Card = (props) => {
  const {item} = props;
  const time = moment(moment().format(), 'YYYYMMDD').fromNow();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item.urlToImage}} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.date}>
            <Text style={styles.small}>{item.siteName}</Text>
            <Text style={styles.small}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  card: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: colors.grayText,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#F9FAFC',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    height: 80,
    width: 80,
  },
  content: {
    marginLeft: 10,
    width: '70%',
  },
  title: {
    flex: 1,
    fontWeight: '500',
    fontSize: fonts.sm,
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  small: {
    fontSize: 12,
  },
});
export default Card;
