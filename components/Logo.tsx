import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <Image src="/logo.png" alt="ServiConnect Logo" width={300} height={50} />
  </Link>
);

export default Logo;

