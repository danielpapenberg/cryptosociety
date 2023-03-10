export default function signals({ user }) {q
    return (
        <>
            <Navigation user={user} />
            Hallo
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

w