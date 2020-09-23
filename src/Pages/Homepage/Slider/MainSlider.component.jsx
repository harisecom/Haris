import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './mainslider.style.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const MainSlider = () => {
	return(
		<AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
	interval={6000}
	organicArrows={false}
  >
	  <div className="slider-component slider1">
		<div className="slider">
			<div className="slider-text">
				<h1>Unlocking a <br/> whole new <span>wardrobe.</span> </h1>
				<p>For a limited time, select <br/>
				items are now up to 50% off! <br/> 
				Scoop up favorites from <br/> 
				brands like Thank You<br/> 
				Farmer, Nacific, Tony Moly,<br/> 
				and more!</p>
				<button className="slider-button">Shop Now</button>
			</div>
			<div className="slider-image">
				<img src="images/slider1.png" alt="Slider 1"/>
			</div>
		</div>
	  </div>


	  <div className="slider-component slider2">
		<div className="slider">
			<div className="slider-text">
				<h1>REFRESHING <br/> HYDRATION</h1>
				<p>The Cleansing Duo from<br/> 
				Then I Met You is a double<br/> 
				cleansing dream. Two<br/> 
				top-rated products paired<br/> 
				together in one simple,<br/> 
				effective set.</p>
				<button className="slider-button">Shop Now</button>
			</div>
			<div className="slider-image">
				<img src="images/slider2.png" alt="Slider 2"/>
			</div>
		</div>
	</div>

	<div className="slider-component slider3">
		<div className="slider">
			<div className="slider-text">
				<h1>GLOW FROM<br/> WITHIN</h1>
				<p>Get radiant skin with this<br/> 
				alcohol free milkytoner.<br/><br/>
				Fomulated with<br/>
				70% birch juice, it refines<br/> 
				pores and gently exfoliates<br/> 
				for a smooth-to-<br/>
				the-touch complexion</p>
				<button className="slider-button">Shop Now</button>
			</div>
			<div className="slider-image">
				<img src="images/slider3.png" alt="Slider 3"/>
			</div>
		</div>
	</div>
	{/* <div className="Slider2">
		<h1>SLider number 2</h1>
	</div>
	<div className="Slider3">
		<h1>SLider number 3</h1>
	</div> */}
  </AutoplaySlider>
	)
  
	}

export default MainSlider;