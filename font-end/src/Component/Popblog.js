import React from 'react'

function Popblog() {
    return (
        <>
            {/* <!-- Popular Blog --> */}
            <div id="popblog" class="filter">
                <div class="container">


                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">POPULAR BLOG</div>
                            <h2>Find Your Favorite Blog.</h2>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- Filter Button --> */}
                            <div class="button-group filters-button-group">
                                <a class="button is-checked" data-filter="*"><span>SHOW ALL</span></a>
                                <a class="button" data-filter=".design"><span>ATTRACTION</span></a>
                                <a class="button" data-filter=".development"><span>HOTEL</span></a>
                                <a class="button" data-filter=".food"><span>FOOD</span></a>
                                <a class="button" data-filter=".seo"><span>CAFE</span></a>
                            </div>

                            <div class="grid">
                                <div class="element-item development">
                                    <a class="popup-with-move-anim" href="#project-1"><div class="element-item-overlay"><span>Online Banking</span></div><img src="images/project-1.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item development">
                                    <a class="popup-with-move-anim" href="#project-2"><div class="element-item-overlay"><span>Classic Industry</span></div><img src="images/project-2.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design development marketing">
                                    <a class="popup-with-move-anim" href="#project-3"><div class="element-item-overlay"><span>BoomBap Audio</span></div><img src="images/project-3.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design development marketing">
                                    <a class="popup-with-move-anim" href="#project-4"><div class="element-item-overlay"><span>Van Moose</span></div><img src="images/project-4.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design development marketing seo">
                                    <a class="popup-with-move-anim" href="#project-5"><div class="element-item-overlay"><span>Joy Moments</span></div><img src="images/project-5.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design marketing seo">
                                    <a class="popup-with-move-anim" href="#project-6"><div class="element-item-overlay"><span>Spark Events</span></div><img src="images/project-6.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design marketing">
                                    <a class="popup-with-move-anim" href="#project-7"><div class="element-item-overlay"><span>Casual Wear</span></div><img src="images/project-7.jpg" alt="alternative"/></a>
                                </div>
                                <div class="element-item design marketing">
                                    <a class="popup-with-move-anim" href="#project-8"><div class="element-item-overlay"><span>Zazoo Apps</span></div><img src="images/project-8.jpg" alt="alternative"/></a>
                                </div>
                            </div> 
                            
                        </div> 
                    </div>
                </div> 
            </div> 
            {/* <!-- end of Poppular Blog --> */}

            {/* <!-- Lightbox --> */}
            <div id="project-8" class="lightbox-basic zoom-anim-dialog mfp-hide">
                <div class="row">
                    <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                    <div class="col-lg-8">
                        <img class="img-fluid" src="images/project-8.jpg" alt="alternative" />
                    </div> 
                    <div class="col-lg-4">
                        <h3>Zazoo Apps</h3>
                        
                        <h6>Strategy Development</h6>
                        <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                        <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                        <div class="testimonial-container">
                            <p class="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                            <p class="testimonial-author">General Manager</p>
                        </div>
                        <a class="btn-solid-reg" href="#your-link">DETAILS</a> <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
                 
        
                </div> 
            </div> 
            </div>
        </>
    )
}

export default Popblog
