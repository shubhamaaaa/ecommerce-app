import React from 'react';
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever Ecommerce is likely a brand or business that specializes in online retail. The name suggests that it is focused on e-commerce, possibly providing products or services related to online shopping, digital marketing, or online business solutions.</p>
        <p>Forever Ecommerce could be marketed as an all-in-one solution for businesses looking to thrive in the online retail space, emphasizing reliability, flexibility, and a commitment to long-term success in the digital marketplace.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Empowering businesses of all sizes to thrive in the digital marketplace by providing innovative, reliable, and scalable e-commerce solutions. We are dedicated to creating a seamless online shopping experience for consumers while enabling our clients to grow their brands, reach new markets, and achieve sustainable success in the ever-evolving world of e-commerce.</p>
         </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col sm:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality Assurance:</b>
          <p className='text-gray-600'>To deliver exceptional e-commerce solutions by adhering to the highest standards of quality, ensuring that every product and service we provide meets or exceeds customer expectations. We are committed to continuous improvement, thorough testing, and proactive problem-solving to maintain the integrity and reliability of our platform.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Convenience in the context of Forever Ecommerce would be a core value, emphasizing the importance of making the shopping and business management experience as easy, efficient, and seamless as possible for both consumers and businesses.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional Customer Service would be a cornerstone of Forever Ecommerce, reflecting the company’s commitment to creating a positive and supportive experience for every customer. Here’s how exceptional customer service might be implemented:
          1. Customer-Centric Philosophy:
          2. 24/7 Availability:
          3. Fast Response Times:
          4. Consistency and Quality:

          </p>

        </div>


      </div>
      <NewsletterBox/>
      
    </div>
  );
}

export default About;
