import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import homebanner2 from '../assets/home_banner2.jpg';
import category_1 from '../assets/pr-1-category.png';
import category_2 from '../assets/pr-2-category.png';
import category_3 from '../assets/pr-3-category.png';
import category_4 from '../assets/pr-4-category.png';
import trend_01 from '../assets/trend_01.jpg';
import trend_02 from '../assets/trend_02.jpg';
import trend_03 from '../assets/trend_03.jpg';
import feature_01 from '../assets/feature_01.jpg';
import feature_02 from '../assets/feature_02.jpg';
import feature_03 from '../assets/feature_03.jpg';
import {GiBigDiamondRing,GiNecklaceDisplay,GiClockwork} from 'react-icons/gi';
import {FaRegGem,FaRing} from 'react-icons/fa';
import {IoIosClock} from 'react-icons/io';
import {TbDiscount2} from 'react-icons/tb';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';


const Home = () => {
  return (
    <section className='home'>



      <div className="home_banner2">
        <div className="home_banner2_container">
          <div className='home_banner2_container_child_one'>
            <span>Jewelry design with love</span>
            <h1>High-End Jewelry Items</h1>
            <ul>
              <li className='main_btnone'><Link to={'/'}>Buy Now</Link></li>
              <li className='main_btntwo'><Link to={'/'}>Explore Now</Link></li>
            </ul>
          </div>

          <div className='home_banner2_container_child_two'>
            <div>
              <img src={homebanner2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------tile--------------------------------- */}







      <div className="tile">
        <div className="tile-img">

        
            <div className="tile-content">
              <div className="content-one">
                <span>Buy Now</span>
                <h1>Rare Collections.</h1>
              </div>

              <div className="content-two">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam
                   aliquip ex ea <br /> commodo consequat you have to understand this.</p>

                   <button>Shop Now</button>
              </div>
            </div>

        </div>
      </div>



{/* ---------------------------------trending collections---------------------- */}





<div className="trending">
  <div className="trending-container">

    <div className="container-one">
      <div className="trend-logo">
        <img src={logo1} alt="" />
      </div>
      <span>Avail Our Offer</span>
      <h2>Trending Collections</h2>
    </div>

    <div className="container-two">
      <Link to={'#'}>View More {" "} <BsArrowRightShort/></Link>
    </div>

    <div className="container-three">
      <div className="container-three-cihld-one  container-three-child">
        <div className="container-content-box">
          <div className="image-box">
            <Link to={'#'}> <img src={trend_01} alt="" /></Link>
          </div>
          <div className="content-box">
            <h3>Wedding Ring</h3>
            <p>Machine Design ,24 Carat</p>
            <span>₹ 50599/10gm</span>
          </div>
        </div>
      </div>
      <div className="container-three-child-two  container-three-child">
      <div className="container-content-box">
          <div className="image-box">
          <Link to={'#'}> <img src={trend_02} alt="" /></Link>
          </div>
          <div className="content-box">
            <h3>Gold Necklace</h3>
            <p>Machine Design ,24 Carat</p>
            <span>₹ 50599/10gm</span>
          </div>
        </div>
      </div>
      <div className="container-three-child-three  container-three-child">
      <div className="container-content-box">
          <div className="image-box">
          <Link to={'#'}> <img src={trend_03} alt="" /></Link>
          </div>
          <div className="content-box">
            <h3>Barry Gold Bangle</h3>
            <p>Machine Design ,24 Carat</p>
            <span>₹ 50599/10gm</span>
          </div>
        </div>
      </div>
      <div className="container-three-child-four  container-three-child">
      <div className="container-content-box">
          <div className="image-box">
          <Link to={'#'}> <img src={trend_01} alt="" /></Link>
          </div>
          <div className="content-box">
            <h3>Gold Earring</h3>
            <p>Machine Design ,24 Carat</p>
            <span>₹ 50599/10gm</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>












{/* --------------------------Colletction start------------------- */}

      <div className="collection">

        <div className="collection_container">

        <div className="collection_head">
          <div className="collection_head_div">
            <div className="collection_head_icon">
              <img src={logo1} alt="" />
            </div>
            <span>Avail Our Offer</span>
            <h2>Collection Arrived</h2>
          </div>
        </div>

        <div className="collection_items">
          <div className="collection_category container_one">
            <div className="collection_category_intro">
              <div className="title">
                <div className="icon">
                  <GiBigDiamondRing/>
                </div>
                <h4 className='text-white'>New Rings</h4>
                <div className="display-on-hover">
                  <p>Get your wedding ring 
                    for him or her
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="collection_category container_two">
          <div className="collection_category_intro">
              <div className="title">
                <div className="icon">
                  <FaRing/>
                </div>
                <h4 className='text-white'>Copper Bangle</h4>
                <div className="display-on-hover">
                  <p>Get your wedding ring 
                    for him or her
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="collection_category container_three">
          <div className="collection_category_intro">
              <div className="title">
                <div className="icon">
                  <GiNecklaceDisplay/>
                </div>
                <h4 className='text-white'>Big Necklace</h4>
                <div className="display-on-hover">
                  <p>Get your wedding ring 
                    for him or her
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="collection_category container_four">
          <div className="collection_category_intro">
              <div className="title">
                <div className="icon">
                  <FaRegGem/>
                </div>
                <h4 className='text-white'>Crystal Jewelry</h4>
                <div className="display-on-hover">
                  <p>Get your wedding ring 
                    for him or her
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>







      <div className="category-section">
        <div className="category">

          <div className="category-one category-container">
            <div className="category-one-child-one">
              <img src={category_1} alt="" />
            </div>
            <div className="category-one-child-two">
              <div className="category-type">
                <h2>Diamond's Haven</h2>
                <button>View details</button>
              </div>
            </div>
          </div>

          <div className="category-two category-container">
          <div className="category-two-child-one">
          <img src={category_2} alt="" />
          </div>
            <div className="category-two-child-two">
            <div className="category-type">
            <h2>Best Summer Sale</h2>
                <button>View details</button>
            </div>
            </div>
          </div>

          <div className="category-three category-container">
          <div className="category-three-child-one">
          <div className="category-type">
            <h2>Necklaces</h2>
                <button>View details</button>
            </div>
          </div>
            <div className="category-three-child-two">
            <img src={category_3} alt="" />
            </div>
          </div>

          <div className="category-four category-container">
          <div className="category-four-child-one">
          <div className="category-type">
            <h2>Diamond Chain</h2>
                <button>View details</button>
            </div>
          </div>
            <div className="category-four-child-two">
            <img src={category_4} alt="" />
            
            </div>
          </div>

        </div>
      </div>










      <div className="banner">
        <div className="banner-btn">
            <AiOutlinePlayCircle/>
          

        </div>
      </div>

















      <div className="feature">
        <div className="feature-core-section">
          <div className="feature-core-one">
            <div className="core-feature-child-one">
              <img src={logo1} alt="" />
            </div>
            <span>avail our offer</span>
              <h1>Our Best Feature</h1>
          </div>


          <div className="feature-core-two">
            <div className="core-feature-child-one feature-container">
              <div className="feature-box">
                <img src={feature_01} alt="" />
              </div>
            </div>

            <div className="core-feature-child-two feature-container">
            <div className="feature-box">
              <div className='icon'><GiClockwork/></div>
              <h3>Quiet Hours Offer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna..</p>
            </div>
            </div>

            <div className="core-feature-child-three feature-container">
            <div className="feature-box">
              <img src={feature_02} alt="" />
            </div>
            </div>

            <div className="core-feature-child-four feature-container">
            <div className="feature-box">
            <div className='icon'><IoIosClock/></div>
              <h3>Quiet Hours Offer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna..</p>
            </div>
            </div>

            <div className="core-feature-child-five feature-container">
            <div className="feature-box">
              <img src={feature_03} alt="" />
            </div>
            </div>

            <div className="core-feature-child-six feature-container">
            <div className="feature-box">
            <div className='icon'><TbDiscount2/></div>
              <h3>Quiet Hours Offer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna..</p>
            </div>
            </div>

          </div>
        </div>
      </div>








    </section>
  )
}

export default Home