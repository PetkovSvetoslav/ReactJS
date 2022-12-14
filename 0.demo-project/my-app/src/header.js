export const Header = () => {
    return (
        <header>
		<div className="layout_padding banner_section_start">
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo"><a href="#home"><img src="images/logo.png" alt=""/></a> 
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className="menu-area">
                        <div className="limit-box">
                           <nav className="main-menu">
                              <ul className="menu-area-main">
                                 <li className="active"><a href="#home">Home</a></li>
                                 <li><a href="#about">About</a></li>
                                 <li><a href="#products">products</a></li>
                                 <li><a href="#gallery">gallery</a></li>
                                 <li><a href="#contact">Contact Us</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                 </div>
               </div>
            </div>
         </div>
	<div className="layout_padding banner_section">
		<div className="container">
           <div id="main_slider" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row ">
				<div className="col-md-6 taital">
					<h1 className="taital">Quality<strong className="banner_taital">Products with breads sweet Den</strong></h1>
                     <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
				</div>
				<div className="col-md-6">
					<div className="banner-image"><img src="images/banner-image.png" alt=""/></div>
				</div>
				<div className="banner_bt">
				<button className="bt_main"><a href="/">Read More</a></button>
				</div>
			</div>
    </div>
    <div className="carousel-item">
      <div className="row ">
				<div className="col-md-6 taital">
					<h1>Quality<strong className="banner_taital">Products with breads sweet Den</strong></h1>
                     <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
				</div>
				<div className="col-md-6">
					<div className="banner-image"><img src="images/banner-image.png" alt=""/></div>
				</div>
				<div className="banner_bt">
				<button className="bt_main"><a href="/">Read More</a></button>
				</div>
			</div>
    </div>
    <div className="carousel-item">
     <div className="row ">
				<div className="col-md-6 taital">
					<h1>Quality<strong className="banner_taital">Products with breads sweet Den</strong></h1>
                     <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
				</div>
				<div className="col-md-6">
					<div className="banner-image"><img src="/my-app/public/images/banner-image.png" alt=""/></div>
				</div>
				<div className="banner_bt">
				<button className="bt_main"><a href="/">Read More</a></button>
				</div>
			</div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left"></i></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-angle-right"></i></span>
    <span className="sr-only">Next</span>
  </a>
</div>
			
		</div>
	</div>
    </div>
	</header>
    );
}