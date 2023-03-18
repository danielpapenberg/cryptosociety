import PrimaryButton from '/components/helper/PrimaryButton'

function sendContactMail() {
    window.open('mailto:info@crypto-society.com');
}

export default function VentureCapital() {
    return(
        <div className="py-20 text-center">
            <h2 className="relative text-center md:px-20 text-7xl md:text-9xl select-none text-gray-700 tracking-wide font-extrabold md:left-[-20px]">Venture Capital</h2>
            <p className="px-5 md:px-20 pt-10 text-2xl lg:w-2/3 m-auto">
                In the past year, Crypto Society has expanded its <strong className="text-blue-300">investment</strong> portfolio to include <strong className="text-blue-300">over 70 projects</strong>,
                such as <strong className="text-blue-300">Kilt, UMEE, Retreeb, Star Atlas, and Cryowar</strong>, among others. As investors, we offer extensive
                support, including strategic guidance, marketing assistance, design expertise, introductions to
                strategic partners and launchpads, and active engagement on the projects' social media channels.
                <br/><br/>
                Our involvement with certain projects has progressed organically, leading us to also assume advisory roles.
                <br/><br/>
                <PrimaryButton onClick={sendContactMail} type="dark">CONTACT US</PrimaryButton>
            </p>
        </div>
    )
}