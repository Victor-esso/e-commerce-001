
import ButtonArrow from '@components/tokens/ButtonArrow';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const goto = useNavigate()
  return (
    <section className="uni-pad h-full min-h-dvh grid-center relative">
        <div className='vertical items-center'>
            <div className="relative w-max h-max">
              <h1 className="text-[9rem] md:text-[12rem] font-poppins font-bold text-natural-2 animate-breath [animation-duration:5s]">404</h1>
              <div className="absolute abs-center-xy text-[1.4rem] font-space-grotesk w-max vertical items-center gap-1">
                <Icon icon="hugeicons:sad-02" className='text-[2rem] animate-bounce' />
                Page not found
              </div>
            </div>
            <ButtonArrow onClick={()=> goto('/')} className='!button-m' >Back to shopping</ButtonArrow>
        </div>
            <div className='absolute abs-center-x bottom-8 vertical items-center gap-2'>
                <div className='w-28 bg-natural-3 aspect-square rounded-full relative overflow-hidden'>
                  <img src="images/me.png" alt="" className='img-fit-parent absolute inset-0' />
                </div>
                <div className='vertical items-center gap-1'>
                  <p className='w-max'>Victor Esso-Nmakwe</p>
                  <div className='horizontal gap-6'>
                    <a className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials' target='_blank' rel="noopener noreferrer" href='https://x.com/_vick_thor'>
                      <Icon icon="hugeicons:new-twitter" className='text-2xl' />
                    </a>
                    <a className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials' target='_blank' rel="noopener noreferrer" href='https://github.com/Victor-esso/e-commerce-001'>
                      <Icon icon="hugeicons:github-01" className='text-2xl' />
                    </a>
                    <a className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/victor-esso-nmakwe-306781140/'>
                      <Icon icon="hugeicons:linkedin-02" className='text-2xl' />
                    </a>
                  </div>
                </div>
            </div>
    </section>
  )
}

export default NotFound