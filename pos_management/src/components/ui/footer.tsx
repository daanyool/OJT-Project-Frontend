import Image from 'next/image';

export default function Footer(){
    return (
        <footer className="text-right text-sm text-gray-500 py-4"> 
                <span className='align-middle'>&copy;Powered By:</span>
                <Image className='inline-block mb-1'
                  src="/Logo_RAI.png"
                  alt="Your Company Logo"
                  width={100}
                  height={55}
                />
      </footer>
    );
}