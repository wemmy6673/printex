import React from 'react';
import Cap from '../images/Cap.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Items = [{
    id: 1,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 2,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 3,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 4,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 5,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 6,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 7,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 8,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 9,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 10,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 11,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},
{
    id: 12,
    title: "Under Armour Training stretch Woven Half Zip Jacket In White",
    new_price: 200,
    old_price: 250,
    image: Cap,
},]

const Arrivals = () => {

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (

        <div className='flex flex-col bg-white md:mx-6'>
            <div className='flex flex-col md:justify-between p-20'>
                <div className=''>
                    <h1 className='text-3xl text-blue-950'>New Arrivals!</h1>
                    <p className='text-sm md:max-w-md text-justify'>For more than 36 years, We have been one of the leading suppliers of embroidered and woven brands</p>

                </div>
                <div className='mt-5'>
                <button className='bg-blue-950 text-white px-5 py-2'>
                    View All

                </button>
                </div>


            </div>
            <Slider {...settings} className='md:px-6 pb-4'>
            
                {Items.map(Item => (
                    
                    <div key={Item.id}  className='flex flex-col space-y-5 w-2/3 md:h-[350px] md:w-1/4 justify-center p-3 pb-12 md:mr-6'>
                        <div className='bg-white'><img src={Item.image} alt={Item.title} className='p-10'/></div>
                        <div><p className='text-center'>{Item.title}</p></div>
                        <div className='flex flex-row justify-center space-x-4'>
                            <div className='text-yellow-400'><strike>{Item.old_price}</strike></div>
                            <div>{Item.new_price}</div>
                        </div>
                    </div>
                    
                ))}

            </Slider>

        </div>

    )
}

export default Arrivals;

