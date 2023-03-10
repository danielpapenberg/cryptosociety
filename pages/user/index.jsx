import { getSession, signOut } from 'next-auth/react';
import Coin from "../../lib/coinSchema";
import Users from "../../lib/userSchema";
import connectDB from "../../lib/connectDB";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';

import Navigation from '/components/layout/Navigation'
import Footer from '/components/layout/Footer'

function User({ user, bio }) {
    const [value, changeValue] = useState("New Bio");
    const [coin, changeCoin] = useState("BITCOIN");

    async function updateCoin(){
        const {data} = await axios.post(
            "/api/updateCoin",
            { coinId: coin },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          );

          console.log("Bio Updated to: " + data.bio)

          location.reload()
    }

    return (
        <>
            <Navigation user={user} />
            <div className='py-40 px-20'>
                <h1 className='text-9xl mb-5 text-white-300 tracking-wide font-bold text-blue-300 select-none'>Profile</h1>
                <div className='text-slate-500'>{user.address}</div>

                <h2 className='text-6xl mt-10 mb-5 text-white-300 tracking-wide font-bold text-blue-300 select-none'>Tools</h2>
                <ul>
                    <li className='uppercase'>ICOS</li>
                    <li className='uppercase'><Link href="/signals" title="Home">Signals</Link></li>
                    <li className='uppercase'><Link href="/user/signals" title="Home">your signals</Link></li>
                </ul>

                <div className='mt-20'>
                    <button className='text-slate-500' onClick={() => signOut({ redirect: '/signisn' })}>Sign out</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    await connectDB();

    const userM = await Users.findOne({ profileId: session?.user.profileId }).lean();
    const coins = await Coin.findOne({ profileId: session?.user.profileId }).lean();

    console.log(coins.coinId);

    if (userM !== null) {
        userM.bio = userM.bio.toString();
    }

    return {
        props: { user: session.user, bio: userM.bio },
    };
}

export default User;
