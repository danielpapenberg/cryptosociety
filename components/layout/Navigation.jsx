import Link from 'next/link';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaUser } from 'react-icons/fa';
import SignIn from '/components/layout/signin';

export default function Head({ user }) {
  return (
    <nav className="fixed top-0 left-0 z-10 flex justify-between px-5 md:px-10 w-full">
        <div className="py-5 md:p-10 shrink-0">
          <Link href="/" title="Home" className="relative block h-[40px] aspect-[567/100]">
            <Image src="/images/logos/logo-crypto-society.png" fill alt="Crypto-Society" />
          </Link>
        </div>

        <div className="flex gap-5 md:gap-10 px-5 py-8 md:p-10 text-lg md:text-2xl">
          <Link href="https://t.me/cryptosocietyy" target={'_blank'} title="Telegram">
            <FaTelegramPlane />
          </Link>
          <Link href="https://twitter.com/cryptosocietytg" target={'_blank'} title="Twitter">
            <FaTwitter />
          </Link>

          {!user ?
            <SignIn />
          :
            <Link href="/user" title="User" className='text-blue-300'>
              <FaUser />
            </Link>
          }
        </div>
    </nav>
  );
}