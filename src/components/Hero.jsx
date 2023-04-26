import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
          <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
          <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='orange_btn'
          >
         GitHub
         </button>
        
        </nav>

        
      <h1 className='head_text'>
        Sumz Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Get the gist of any article quickly and easily with Summarize, an open-source article summarizer that simplifies your reading.
      </h2>
    </header>
  )
}

export default Hero;
