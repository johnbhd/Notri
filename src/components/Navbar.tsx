import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex">
      <h3>Notri</h3>
      <ul>
        <li><Link href="#hero"><a>Home</a></Link></li>
        <li><Link href="#guides"><a>Guides</a></Link></li>
        <li><Link href="#features"><a>Features</a></Link></li>
        <li><Link href="#faq"><a>FAQ</a></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
