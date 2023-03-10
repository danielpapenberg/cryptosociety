import { getSession } from 'next-auth/react'
import Moon from '/components/homepage/Moon'
import Amas from '/components/homepage/Amas'
import Partner from '/components/homepage/Partner'
import VentureCapital from '/components/homepage/VentureCapital'
import Navigation from '/components/layout/Navigation'
import Footer from '/components/layout/Footer'

export default function HomePage({user}) {
    return (
        <>
            <Navigation user={user} />
            <Moon />
            <Partner />
            <Amas />
            <VentureCapital />
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            props: { user: null},
        };
    }

    return {
        props: { user: session.user},
    };
}
