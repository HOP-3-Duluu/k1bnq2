import React from 'react';
import {Image, Text, View} from 'react-native';
import {Pocket_svg} from '../../assets/pocket';
import {Share_svg} from '../../assets/share';
import {styles} from '../../styles/post_data';

export const Post_data = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 30
        }}>
        <View style={styles.text_area}>
          {props.photo === true ? (
            <View style={styles.post_with_image}>
              <View>
                <Text style={styles.header}>{props.title}</Text>
                <Text style={styles.data}>{props.text}</Text>
              </View>
              <Image
                style={{width: 118, height: 132, marginLeft: 20}}
                size="contain"
                // source={require(`../../assets/` + props.photo.url)}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.header}>{props.title}</Text>
              <Text style={styles.data}>{props.text}</Text>
            </View>
          )}
        </View>
        <View style={styles.bottom_data}>
          <View style={styles.row}>
            <Text style={styles.bottom_data.text}>{props.author}</Text>
            <Text style={styles.bottom_data.dot}>•</Text>
            <Text style={styles.bottom_data.text}>{props.time}</Text>
          </View>
          <View style={styles.image_row}>
            <Share_svg style={{marginRight: 34}} />
            <Pocket_svg />
          </View>
        </View>
      </View>
    </View>
  );
};
