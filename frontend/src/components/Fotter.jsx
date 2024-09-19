import React from 'react';
import { assets } from '../assets/assets';

const Fotter = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus provident iste libero neque quo quia consequuntur aut iusto molestiae voluptate cupiditate amet, repudiandae dicta error molestias expedita maiores ducimus?</p>

            </div>
            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+91-9335162135</li>
               <li>shubshukla2332@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-center text-sm'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
      
    </div>
  );
}

export default Fotter;
