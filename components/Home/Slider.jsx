// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   Dimensions,
//   ActivityIndicator,
//   Text,
// } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../config/firebaseConfig";
// import Carousel from "react-native-reanimated-carousel";

// const { width: screenWidth } = Dimensions.get("screen");

// const Slider = () => {
//   const [sliderList, setSliderList] = useState([]);
//   const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

//   useEffect(() => {
//     const GetSliders = async () => {
//       try {
//         console.log("Fetching sliders...");
//         const Snapshot = await getDocs(collection(db, "Sliders"));
//         const sliders = Snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             ...data,
//             imageUrl: data.imageUrl || "https://via.placeholder.com/150", // Hình mặc định nếu thiếu
//           };
//         });
//         setSliderList(sliders);
//       } catch (error) {
//         console.error("Error fetching sliders:", error);
//       } finally {
//         setLoading(false); // Tắt trạng thái tải
//       }
//     };

//     GetSliders();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading sliders...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.sliderContainer}>
//       {sliderList.length > 0 ? (
//         <Carousel
//           loop
//           autoPlay
//           autoPlayInterval={3000} // Chuyển slide mỗi 3 giây
//           data={sliderList}
//           width={screenWidth * 0.9} // Chiều rộng slider (90% màn hình)
//           height={150} // Chiều cao cố định (bằng khung bản đồ)
//           mode="parallax"
//           renderItem={({ item }) => (
//             <View style={styles.sliderItem}>
//               <Image
//                 source={{ uri: item.imageUrl }}
//                 style={styles.sliderImage}
//                 resizeMode="cover"
//               />
//             </View>
//           )}
//         />
//       ) : (
//         <Text style={styles.noDataText}>No sliders available</Text>
//       )}
//     </View>
//   );
// };

// export default Slider;

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sliderContainer: {
//     marginTop: 20, // Cách trên một khoảng
//     alignSelf: "center", // Canh giữa slider
//     width: screenWidth * 0.9, // Chiều rộng slider
//     height: 150, // Chiều cao khớp với bản đồ
//     borderRadius: 15, // Bo góc khung slider
//     overflow: "hidden", // Bo góc cho ảnh
//   },
//   sliderItem: {
//     width: "100%",
//     height: "100%",
//   },
//   sliderImage: {
//     width: "100%",
//     height: "100%",
//   },
//   noDataText: {
//     textAlign: "center",
//     fontSize: 16,
//     color: "#888",
//   },
// });
