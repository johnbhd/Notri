import Link from 'next/link';

const Navbar = () => {
  return (
    (<nav className="flex justify-between items-center px-8 py-3">
      <h3 className='text-[6vh]'>Notri</h3>
      <ul className='flex gap-5 text-[3vh] space-x-4'>
        <li>
            <Link href="#hero">Home</Link>
        </li>
        <li>
            <Link href="#features">Features</Link>
        </li>
        <li>
            <Link href="#faq">FAQ</Link>
        </li>
      </ul>
      <button className='border-2 border-white text-[3vh] px-3 py-2 rounded-full hover:bg-white hover:text-black transition duration-300'>Get Started
     </button>

    </nav>)
  );
}

export default Navbar;
