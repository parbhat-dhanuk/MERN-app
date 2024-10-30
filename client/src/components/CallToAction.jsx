import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about MERN Stack?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources..
            </p>
            <Button  className='rounded-tl-xl bg-purple-500 rounded-bl-none'>
                <a href="https://www.ccbp.in/blog/articles/mern-stack-project-ideas" target='_blank' rel='noopener noreferrer'>
                    MERN stack projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1" />
        </div>
    </div>
  )
}