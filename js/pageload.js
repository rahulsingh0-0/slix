document.querySelector(".load-navbar").innerHTML = `<header>
<div class="header-bottom">
  <div class="content-margins">
    <div class="row">
      <div class="col-xs-3 col-sm-1">
        <a id="logo" href="index.html"
          ><img src="images/logo.png" alt=""
        /></a>
      </div>
      <div class="col-xs-9 col-sm-11 text-right">
        <div class="nav-wrapper">
          <div class="nav-close-layer"></div>
          <nav>
            <ul>
              <li class=" close-nav-container">
                <i
                  
                  class="ri-close-line  close-nav "
                ></i>
              </li>
              <li class="mt-5 home-tab mt-lg-0">
                <a href="/index.html">home</a>
              </li>
              <li class="">
                <a href="/about.html">about us</a>
              </li>
              <li class="megamenu-wrapper">
                <a href="/product.html">products</a>
                <!-- <div class="menu-toggle"></div>
                <div class="">
                  <div class="links">
                    <a class="active" href="products1.html"
                      >Products Landing 1</a
                    >
                    <a href="products2.html">Products Landing 2</a>
                    <a href="products3.html">Products Landing 3</a>
                    <a href="product.html">Product Detail</a>
                  </div>
                </div> -->
              </li>

              <li><a href="/contact.html">contact</a></li>
              <li><a href="/sustainability.html">Sustainablity</a></li>
            </ul>
          </nav>
        </div>

        <section class="col">
          <div class="hamburger-icon z-3">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
    </div>
    <div class="header-search-wrapper">
      <div class="header-search-content">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3"
            >
              <form>
                <div class="search-submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  <input type="submit" />
                </div>
                <input
                  class="simple-input style-1"
                  type="text"
                  value=""
                  placeholder="Enter keyword"
                />
              </form>
            </div>
          </div>
        </div>
        <div class="button-close"></div>
      </div>
    </div>
  </div>
</div>
</header>`;

document.querySelector(".footer").innerHTML = `<footer>
<div class="container">
  <div class="footer-top">
    <div class="row">
      <div class="col-sm-6 col-md-4 text-center col-xs-b30 col-md-b0">
        <h6 class="h6 light">Quick Contact</h6>
        <div class="empty-space col-xs-b20"></div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <div class="footer-contact">
            <i class="fa fa-mobile" aria-hidden="true"></i> contact us:
            <a href="tel:+35235551238745">+971 52 835 3817</a>
          </div>
          <div class="footer-contact">
            <i class="fa fa-envelope-o" aria-hidden="true"></i> email:
            <a href="mailto:office@exzo.com">sales@ukeagle.ae</a>
          </div>
          <div class="footer-contact">
            <i class="fa fa-map-marker" aria-hidden="true"></i> address:
            <a href="#">Post Box No 112356 Dubai UAE</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 text-center col-md-4 col-xs-b30 col-md-b0">
        <h6 class="h6 light">quick links</h6>
        <div class="empty-space col-xs-b20"></div>
        <div class="footer-column-links">
          <div>
           <a class="home-tab" href="index.html">home</a> 
            <a href="about.html">about us</a>
            <a href="/product.html">products</a>
            <!-- <a href="#">services</a> -->
            <!-- <a href="#">blog</a> -->
            <!-- <a href="#">gallery</a> -->
            <a href="contact.html">contact</a>
            <a href="sustainability.html">sustainablity</a>
          </div>
        </div>
      </div>
      <div class="clear visible-sm"></div>
      <div class="col-sm-6 text-center col-md-4 col-xs-b30 col-sm-b0">
        <h6 class="h6 light">some posts</h6>
        <div class="empty-space col-xs-b20"></div>
        <div class="follow">
          <a class="entry" href="#"><i class="fa fa-facebook"></i></a>
          <a class="entry" href="#"><i class="fa fa-twitter"></i></a>
          <a class="entry" href="#"><i class="fa fa-linkedin"></i></a>
          <a class="entry" href="#"
            ><i class="fa fa-google-plus"></i
          ></a>
          <a class="entry" href="#"
            ><i class="fa fa-pinterest-p"></i
          ></a>
        </div>
      </div>
      <!-- <div class="col-sm-6 col-md-3">
        <h6 class="h6 light">popular tags</h6>
        <div class="empty-space col-xs-b20"></div>
        <div class="tags clearfix">
          <a class="tag">headphoness</a>
          <a class="tag">accessories</a>
          <a class="tag">new</a>
          <a class="tag">wireless</a>
          <a class="tag">cables</a>
          <a class="tag">devices</a>
          <a class="tag">gadgets</a>
          <a class="tag">brands</a>
          <a class="tag">replacements</a>
          <a class="tag">cases</a>
          <a class="tag">cables</a>
          <a class="tag">professional</a>
        </div>
      </div> -->
    </div>
  </div>
  <div class="footer-bottom">
    <div class="row">
      <div class="col-lg-12 text-center col-xs-b20 col-lg-b0">
        <div class="copyright">
          2022 © All Rights Reserved By UK EAGLE/Slix
        </div>
        <!-- <div class="follow">
            <a class="entry" href="#"><i class="fa fa-facebook"></i></a>
            <a class="entry" href="#"><i class="fa fa-twitter"></i></a>
            <a class="entry" href="#"><i class="fa fa-linkedin"></i></a>
            <a class="entry" href="#"><i class="fa fa-google-plus"></i></a>
            <a class="entry" href="#"><i class="fa fa-pinterest-p"></i></a>
          </div> -->
      </div>
      <!-- <div class="col-lg-4 col-xs-text-center col-lg-text-right">
        <div class="footer-payment-icons">
          <a class="entry"><img src="images/thumbnail-4.jpg" alt="" /></a>
          <a class="entry"><img src="images/thumbnail-5.jpg" alt="" /></a>
          <a class="entry"><img src="images/thumbnail-6.jpg" alt="" /></a>
          <a class="entry"><img src="images/thumbnail-7.jpg" alt="" /></a>
          <a class="entry"><img src="images/thumbnail-8.jpg" alt="" /></a>
          <a class="entry"><img src="images/thumbnail-9.jpg" alt="" /></a>
        </div>
      </div> -->
    </div>
  </div>
</div>
</footer>`;

const homeTab = document.querySelectorAll(".home-tab");

window.addEventListener("load", () => {
  if (window.location.pathname.slice(1) == "index.html") {
    homeTab.forEach((value, index) => {
      value.style.display = "none";
    });
  }
});
