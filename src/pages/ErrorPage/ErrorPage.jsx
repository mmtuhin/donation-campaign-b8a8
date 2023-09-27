import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const ErrorPage = () => {
    const { height, width } = useWindowDimensions();
    console.log(height,width);
    return (
        <div className='relative flex justify-center items-center'>
            <iframe width={width} height={height} src="custom.html"></iframe>
            <div className='absolute text-center text-white text-2xl font-bold'>
                <h1 className='mb-4'>Opps!! You are lost!</h1>
                <a href="/" className='bg-violet-500 py-1 px-3 rounded-full text-black'>Go Home</a>
            </div>
        </div>
    );
};

export default ErrorPage;