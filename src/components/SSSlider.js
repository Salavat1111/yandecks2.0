import React from 'react';
import './slider.css';
// import ImageSlider from '../components/imageSlider';
// import {SliderData} from '../components/SliderData';
import ImageSlider from './imageSlider';
import {SliderData} from './SliderData';
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Code goes here</h1>
//             </div>
//         )
//     }
// }

function SSSlider () {
    return <ImageSlider slides={SliderData} />;
        
    
}

export default SSSlider;