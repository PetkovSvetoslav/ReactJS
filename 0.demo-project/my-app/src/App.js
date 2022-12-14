import {Header} from './header';


function App() {
  return (
    <div className="App">
  
<Header/>
	<div id="about" className="layout_padding about_section">
		<div className="container">
			<div className="row">
		        <div className="col-md-6">
		        	<div><img src="images/cupcake-img.png" alt=""/></div>
		        </div>
		        <div className="col-md-6">
		        	<h1 className="about_text"><strong>About Den <span className="color">Shop</span></strong></h1>
		        	<p className="about_taital">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitationconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
		        	<button className="read_more"><a href="/">Read More</a></button>
		        </div>
			</div>
		</div>
	</div>

	<div id="products" className="layout_padding product_section ">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1 className="product_text"><strong><span className="den">Den</span>Products</strong></h1>
				</div>
			</div>
		    <div className="product_section_2 images">
			    <div className="row">
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img1.png" alt=""/></div>
			    		<h2 className="den_text croissants"><a href="/">Croissants Breakfast</a></h2>
			    	</div>
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img2.png" alt=""/></div>
			    		<h2 className="den_text"><a href="/">Roll Cake</a></h2>
			    	</div>
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img3.png" alt=""/></div>
			    		<h2 className="den_text"><a href="/">BreadFrench Toast</a></h2>
			    	</div>
			    
		    
		   
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img4.png"  alt=""/></div>
			    		<h2 className="den_text"><a href="/">Cup Cake</a></h2>
			    	</div>
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img5.png" alt=""/></div>
			    		<h2 className="den_text"><a href="/">Donut</a></h2>
			    	</div>
			    	<div className="col-sm-4">
			    		<div className="images"><img src="images/about-img6.png"alt=""/></div>
			    		<h2 className="den_text"><a href="/">Chocolate Cup Cake</a></h2>
			    	</div>
			    </div>
		    </div>
		</div>
	</div>
	<div id="gallery" className="layout_padding2 gallery_section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<div className="gallery_main">
					    <h1 className="gallery_taital"><strong><span className="our_text">Our</span> Gallery</strong></h1>
					</div>
				</div>
				<div className="col-sm-12 gallery_maain">
					<div className="row">
						<div className="col-sm-3 padding_0">
							<div className="gallery_blog">
								<img className="img-responive" src="images/gallery-img1.png" alt=""/>
								<div className="overlay">
									<h2>Breakfast Breads</h2>
								</div>
							</div>
						</div>
                        <div className="col-sm-3 padding_0">
							<div className="gallery_blog">
								<img className="img-responive" src="images/gallery-img2.png" alt=""/>
								<div className="overlay">
									<h2>Breakfast Breads</h2>
								</div>
							</div>
                        </div>
                        <div className="col-sm-3 padding_0">
							<div className="gallery_blog">
								<img className="img-responive" src="images/gallery-img3.png" alt=""/>
								<div className="overlay">
									<h2>Breakfast Breads</h2>
								</div>
							</div>
                        </div>
                        <div className="col-sm-3 padding_0">
							<div className="gallery_blog">
								<img className="img-responive" src="images/gallery-img4.png" alt=""/>
								<div className="overlay">
									<h2>Breakfast Breads</h2>
								</div>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="layout_padding gallery_section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="gallery_main">
					    <h1 className="gallery_taital"><strong><span className="our_text">Get in</span>Touch</strong></h1>
					</div>
				</div>
			</div>
			<div className="touch_main">
				<div className="row">
					<div className="col-md-6">
                    <div className="input_main">
                       <div className="container">
                          <form action="/action_page.php">
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="YOUR NAME" name="Name"/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="EMAIL" name="Email"/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="PHONE NUMBER" name="Email"/>
                            </div>
                            <div className="form-group">
                               <textarea className="massage-bt" placeholder="MASSAGE" rows="5" id="comment" name="text"></textarea>
                            </div>
                          </form> 
                       </div> 
                    </div>
                        <div className="send_btn">
                           <button type="button" className="main_bt"><a href="/">SEND</a></button>                  
                        </div>
			    </div>
					<div className="col-md-6">
						<div className="images">
							<img src="images/bread-img.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>	
	<div className="map_section">
		<div className="row">
			<div className="col-sm-12">
	
                     <div id="map">
                     </div>
                   </div>

		</div>
	</div>
    <div id="contact" className="contact_section">
    	<div className="container">	
    	<div className="contact-taital">
    		<div className="row">
    			<div className="col-sm-12">
    				<h1 className="contact_text"><strong>Contact Us</strong></h1>
    			</div>
    		</div>
    	</div>
    		<div className="row">	
    			<div className="col-sm-6 col-md-6 col-lg-3">
    				<h2 className="adderess_text">Adderess</h2>
    				<div className="image-icon"><img src="images/map-icon.png" alt=""/><span className="email_text">Gb road 123 london Uk </span></div>
    				<div className="image-icon"><img src="images/phone-icon.png" alt=""/><span className="email_text">(+71) 56982424536</span></div>
    				<div className="image-icon"><img src="images/email-icon.png" alt=""/><span className="email_text">bacerim@gmail.com</span></div>
    			</div>
    			<div className="col-sm-6 col-md-6 col-lg-3">
    				<h2 className="adderess_text">Useful Links</h2>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Bacerim Dictionary</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Help Links</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">bacerim Attitudes</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Call a Cutumer</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Help a Bacerim</span></div>
    			</div>
    			<div className="col-sm-6 col-md-6 col-lg-3">
    				<h2 className="adderess_text">Overview</h2>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Bacerim Dictionary</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">Help Links</span></div>
    				<div className="image-icon"><img src="images/bulit-icon.png" alt=""/><span className="email_text">bacerim Attitudes</span></div>
    				<div className="social_icon">
    					<ul>
    						<li><a href="/"><img src="images/fb-icon.png" alt=""/></a></li>
    						<li><a href="/"><img src="images/twitter-icon.png" alt=""/></a></li>
    						<li><a href="/"><img src="images/google-icon.png" alt=""/></a></li>
    						<li><a href="/"><img src="images/linkedin-icon.png" alt=""/></a></li>
    					</ul>
    				</div>
    			</div>
    			<div className="col-sm-6 col-md-6 col-lg-3">
    				<h2 className="adderess_text">Instagram</h2>
    				<div className="row">
    					<div className="col-md-6">
    						<div className="footer-img"><img src="images/footer-img1.png" alt=""/></div>
    					</div>
    					<div className="col-md-6">
    						<div className="footer-img"><img src="images/footer-img2.png" alt=""/></div>
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-md-6">
    						<div className="footer-img"><img src="images/footer-img2.png"  alt=""/></div>
    					</div>
    					<div className="col-md-6">
    						<div className="footer-img"><img src="images/footer-img3.png" alt=""/></div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="copyright_section">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-12">
    				<p className="copyright_taital">2022 All Rights Reserved. </p>
    			</div>
    		</div>
    	</div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/owl.carousel.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
      {/* <script>
      $(document).ready(function(){
      $(".fancybox").fancybox({
         openEffect: "none",
         closeEffect: "none"
         }),
         
         $(".zoom").hover(function(){
         
         $(this).addclassName('transition')
         }, function(){
         
         $(this).removeclassName('transition')
         })
         });
         </script>  */}

         {/* <script>
  function initMap() {
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 40.645037, lng: -73.880224}
          });

        var image = 'images/location_point.png';
          var beachMarker = new google.maps.Marker({
             position: {lat: 40.645037, lng: -73.880224},
             map: map,
             icon: image
          });
        }
        </script> */}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>

    </div>
  );
}

export default App;
