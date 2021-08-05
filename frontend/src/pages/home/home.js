// import "./home.css";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/navbar/navbar";
// import axios from "axios";

// const Home = () => {
  
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5003/project/")
//       .then((response) => {
//         console.log(response.data);
//         setProjects([...response.data]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//         {projects.map((item, index) => (
//           <div className="container"  key={index}> 
//               <div className="card-column column-0">
//                 <div className="card card-color-0">
//                   <div className="border"></div>
//                   <img
//                     src={`http://localhost:5003/projects/uploads/${item.image}`}
//                   />
//                   <h1>xc cx d </h1>
//                 </div>
//               </div>
//               </div>
//         ))}

//         <div id="cover" className="cover"></div>

//         <div id="open-content" className="open-content">
//           <a href="#" id="close-content" className="close-content">
//             <span className="x-1"></span>
//             <span className="x-2"></span>
//           </a>
//           <img id="open-content-image" src="" />
//           <div className="text" id="open-content-text"></div>
//         </div>
     
//     </div>
//   );
// };
// export default Home;
//import React from 'react';
import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'normalize.css/normalize.css';
import './slider-animations.css';
import './sliders.css';
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
export default class Sliders extends Component {

	constructor(props) {
	  super(props);
	  this.state = { Sliders: [] };
	}
  
	componentDidMount() {
	  axios
		.get("http://localhost:5003/project/")
		.then((response) => {
		     console.log(response.data)
			this.setState({ Sliders: response.data });
		})
		.catch((error) => {
		  console.log(error);
		});
		
	}
  
	render() {
		return (
	<div > 
		 <Navbar />
		<Slider autoplay={3000} className="slider-wrapper" >
		{this.state.Sliders &&
            this.state.Sliders.map((item, index) => (
				
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('http://localhost:5003/projects/uploads/${item.image}') no-repeat center center` }}
					
				>
				
					<div className="inner">
						<h1 style={{fontSize:"4em"}}>{item.title}</h1>
						<p style={{fontSize:"2em"}}>{item.description}</p>
						<a href="/projects"> 	<button style={{fontSize:"1.5em",backgroundColor:"gray"}}>{item.button}</button></a>
					</div>
					
				</div>
			))}
		</Slider>
	</div>
 );
}
}