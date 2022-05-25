import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { BtnComp, HeaderComp, MailList } from '../components'

const HotelPage = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false);


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }


    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <>

            <HeaderComp type="list" />
            <div className='hotelContainer'>
                {
                    open &&
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="slideImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />

                    </div>
                }

                <div className="hotelWrapper">
                    <h1 className="hoteTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>jln. raya manado bitung 12</span>
                    </div>
                    <div className="hotelDistace">Excelent location - 500m from center</div>
                    <div className="hotelPricaHighLight">Book a stay over $112 at this property and get a free airport taxi</div>
                    <div className="hotelImages">

                        {photos.map((item, i) => (

                            <div key={item.i} className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={item.src} alt="" className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <button className="bookNow">Reserve or Book Now!</button>
                            <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores culpa omnis fuga atque repellat voluptatem perspiciatis similique, maxime recusandae incidunt, cum fugiat libero voluptate accusamus porro temporibus? Tenetur, consectetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ea, tempore cum at placeat nobis temporibus tenetur, neque consequuntur minima alias id debitis minus ab praesentium enim culpa. Expedita nihil minus quo nisi. Adipisci sequi a odit ratione? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores facilis eum culpa dolor magnam quidem repellendus soluta maxime autem. Nostrum nobis recusandae ullam facere magni eligendi, ex architecto blanditiis esse ab deleniti rem. Quaerat voluptatum, optio possimus sit nemo velit voluptatem ratione quia esse, exercitationem necessitatibus, cumque dolores libero modi autem error?
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero at, corrupti odio nisi ab officia veniam, </span>
                            <h2><b>$677</b> (9 night) </h2>
                            <BtnComp title='Reserve or book now!' />
                        </div>
                    </div>
                </div>
            </div>

            <MailList />
        </>
    )
}

export default HotelPage