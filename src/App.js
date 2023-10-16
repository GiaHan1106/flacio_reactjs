import "./App.css";

function App() {
    const divStyle = {
        backgroundImage: 'url("./img/banner-2.jpg")',
    };
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href=" ">Home</a>
                        </li>
                        <li>
                            <a href=" ">About Us</a>
                        </li>
                        <li>
                            <a href=" ">Product</a>
                            <ul className="submenu">
                                <li>
                                    <a href=" ">Desk Tree</a>
                                </li>
                                <li>
                                    <a href=" ">Balcony Tree</a>
                                </li>
                                <li>
                                    <a href=" ">Office Tree</a>
                                </li>
                                <li>
                                    <a href=" ">Wedding Flowers</a>
                                </li>
                                <li>
                                    <a href=" ">Birthday Flowers</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=" ">Service</a>
                        </li>
                        <li>
                            <a href=" ">Blog</a>
                        </li>
                        <li>
                            <a href=" ">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="iconmenu">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="slide">
                <img src="./img/banner.jpg" alt="" />
                <div className="text">
                    <p>SALE UP TO 30% OFF</p>
                    <h3>
                        Give the Gift <span>Greenery</span>
                    </h3>
                    <button className="btn-1">
                        <span> Discover</span>
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="col">
                    <img src="./img/cate/cate-1.jpg" alt="" />
                    <h3>Air Purifying</h3>
                </div>
                <div className="col">
                    <img src="./img/cate/cate-2.jpg" alt="" />
                    <h3>Air Purifying</h3>
                </div>
                <div className="col">
                    <img src="./img/cate/cate-3.jpg" alt="" />
                    <h3>Herd Seeds</h3>
                </div>
                <div className="col">
                    <img src="./img/cate/cate-4.jpg" alt="" />
                    <h3>Indoor Plants</h3>
                </div>
                <div className="col">
                    <img src="./img/cate/cate-5.jpg" alt="" />
                    <h3>Plan Bundle</h3>
                </div>
                <div className="col">
                    <img src="./img/cate/cate-6.jpg" alt="" />
                    <h3>Maintenance</h3>
                </div>
            </div>
             
            <div className="priceproduct">
                <div className="top">
                    <h2>Most popular product</h2>
                    <p>Meet our most lovable plants</p>
                    <button className="btn-1">
                        <span> Shop Best Sellers</span>
                    </button>
                </div>
                <div className="bot">
                    <div className="col2">
                        <div className="thumb">
                            <img src="./img/product/product-1.jpg" alt="" />
                            <p className="discount">-40%</p>
                        </div>
                        <h3>Grey Star Calathea</h3>
                        <p className="price">
                            <span>$150.00</span>$90.00
                        </p>
                    </div>
                    <div className="col2">
                        <div className="thumb">
                            <img src="./img/product/product-2.jpg" alt="" />
                            <p className="discount">-40%</p>
                        </div>
                        <h3>Pine Tree</h3>
                        <p className="price">
                            <span>$150.00</span>$90.00
                        </p>
                    </div>
                    <div className="col2">
                        <div className="thumb">
                            <img src="./img/product/product-3.jpg" alt="" />
                            <p className="discount">-40%</p>
                        </div>
                        <h3>Devil's Ivy</h3>
                        <p className="price">
                            <span>$150.00</span>$90.00
                        </p>
                    </div>
                    <div className="col2">
                        <div className="thumb">
                            <img src="./img/product/product-4.jpg" alt="" />
                            <p className="discount">-40%</p>
                        </div>
                        <h3>Philippine Evergreen</h3>
                        <p className="price">
                            <span>$150.00</span>$90.00
                        </p>
                    </div>
                </div>
            </div>
            <div className="discover" style={divStyle}>
                <div className="top">
                    <div className="text">
                        <a href=" ">
                            <i className="fa-solid fa-circle-plus"></i>
                        </a>
                        <h3>Discover Our Favorites</h3>
                        <p>Seed some happiness with our top picks for smart grow lights, gardening kits, accessories and more.</p>
                        <button className="btn-1">
                            <span>Shop All</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cate">
                <div className="col3">
                    <img src="./img/banner-3.jpg" alt="" />
                    <div className="text">
                        <h3>Pots & accessories</h3>
                    </div>
                </div>
                <div className="col3">
                    <img src="./img/banner-4.jpg" alt="" />
                    <div className="text">
                        <h3>Pots & accessories</h3>
                    </div>
                </div>
                <div className="col3">
                    <img src="./img/banner-5.jpg" alt="" />
                    <div className="text">
                        <h3>Pots & accessories</h3>
                    </div>
                </div>
            </div>
            <div className="feedback">
                <div className="left">
                    <img src="./img/feedback.jpg" alt="" />
                </div>
                <div className="right">
                    <div className="icon">
                        <a href=" " className="quotes">
                            <i className="fa-solid fa-quote-left"></i>
                        </a>
                        <a href=" " className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </a>
                    </div>
                    <h3>Very happy with flacio; plan arrived in excellent condition, were healthy...</h3>
                    <p>Ann Smith</p>
                </div>
            </div>
            <div className="lastpicture">
                <div className="left">
                    <div className="thumb">
                        <img src="./img/ig/ig-1.jpg" alt="" />
                        <div className="social">
                            <a href=" ">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="col">
                        <div className="thumb">
                            <img src="./img/ig/ig-2.jpg" alt="" />
                            <div className="social">
                                <a href=" ">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="thumb">
                            <img src="./img/ig/ig-3.jpg" alt="" />
                            <div className="social">
                                <a href=" ">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="thumb">
                            <img src="./img/ig/ig-4.jpg" alt="" />
                            <div className="social">
                                <a href=" ">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="thumb">
                            <img src="./img/ig/ig-5.jpg" alt="" />
                            <div class="social">
                                <a href=" ">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="top">
                    <div class="content">
                        <div class="logo">
                            <img src="./img/logo.png" alt="" />
                        </div>
                        <div class="text">
                            <h4>- Creative Photo Studio</h4>
                            <p>
                                Sed non auctor magna. Nunc eu ultrices orci. Donec commodo ligula in massa ultricies volutpat. Fusce vel cursus lectus. Cras commodo odio mi, eu cursus nibh iaculis ut.
                            </p>
                        </div>
                        <div class="social">
                            <a href=" ">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href=" ">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href=" ">
                                <i class="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href=" ">
                                <i class="fa-solid fa-p"></i>
                            </a>
                            <a href=" ">
                                <i class="fa-solid fa-volleyball"></i>
                            </a>
                            <a href=" ">
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                            <div class="input">
                                <input type="text" placeholder="Subscribe, Enter your email address... " />
                                <i class="fa-solid fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bot">
                    <div class="box">
                        <div class="left">
                            <p>flacio 2023 code by L.GiaHan / All rights reserved</p>
                        </div>
                        <div class="right">
                            <ul>
                                <li>
                                    <a href=" ">Home</a>
                                </li>
                                <li>
                                    <a href=" ">About us</a>
                                </li>
                                <li>
                                    <a href=" ">Product</a>
                                </li>
                                <li>
                                    <a href=" ">Service</a>
                                </li>
                                <li>
                                    <a href=" ">Blog</a>
                                </li>
                                <li>
                                    <a href=" ">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
