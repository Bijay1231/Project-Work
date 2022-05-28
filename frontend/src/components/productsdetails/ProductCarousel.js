// import React from "react";
// import ReactDOM from "react-dom";
// import { Container } from "react-bootstrap";
// import InfiniteCarousel from "react-leaf-carousel";

// function ProductCarousel() {
//   return (
//     <div>
//       <Container>
//         <div className="m-4">
//           <InfiniteCarousel
//             breakpoints={[
//               {
//                 breakpoint: 500,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2,
//                 },
//               },
//               {
//                 breakpoint: 768,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                 },
//               },
//             ]}
//             dots={true}
//             showSides={true}
//             sidesOpacity={0.5}
//             sideSize={0.1}
//             slidesToScroll={4}
//             slidesToShow={4}
//             scrollOnDevice={true}
//           >
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//                 class="attachment-large size-large"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT5016_v3/primary/8_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT4722_v1/primary/7_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT5016_v3/primary/8_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6238/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT1505/primary/5_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/WL440/primary/4_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/WL440/primary/4_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6228/primary/2_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6307/primary/3_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6307/primary/3_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6109/primary/4_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6109/primary/4_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6109/primary/4_1.jpg"
//               />
//             </div>
//             <div>
//               <img
//                 alt=""
//                 src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/COM61/primary/3_1.jpg"
//               />
//             </div>
//           </InfiniteCarousel>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default ProductCarousel;
