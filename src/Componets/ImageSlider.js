import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageSlider = () => {

  const images = [
    "https://wallpapers.com/images/hd/laundry-pictures-qcx0qf9i48ay1yvc.jpg",
    "https://www.hubtech.org/wp-content/uploads/2021/12/Professional-Laundry-Services.jpg",
    "https://speedqueen.com/wp-content/uploads/2020/10/SQH-NOV-BLOGS-940x500-SMELLS-FINAL.jpg",
    "https://t3.ftcdn.net/jpg/03/61/48/14/360_F_361481424_g1yn0Tm5TR2tI3FClqvvPNfRS5I2tcaQ.jpg",
    "https://media.istockphoto.com/id/1092103792/photo/woman-with-ironed-clothes-in-the-laundry.jpg?s=612x612&w=0&k=20&c=E9FG7CbFDHYdftteGTRh7MXOkX2YyFJa2nQzlpMEAWY=",
    "https://www.businesslist.co.cm/img/cm/m/1682444299-94-aesthetic-laundry-services.jpg",
    "https://embassycleaners.com/wp-content/uploads/2019/04/dry-cleaning-vs-laundry.jpeg"
  ]
  
  return (
    <View style={{ marginTop: 7 }}>

      <SliderBox images={images}
        autoplay
        circleLoop
        dotColor={'#13274F'}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 15,
          marginHorizontal:2,
          padding: 0,
          margin: 0
        }}
        activeOpacity={0.5}
        sliderBoxHeight={windowHeight - 600}
        ImageComponentStyle={{ borderRadius: 15, width: windowWidth - 20, marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />

    </View>
  )
}

export default ImageSlider;

const styles = StyleSheet.create({})