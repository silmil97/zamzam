import React from "react";
import Layout from "../components/layout";
import '../styles/global.css';
import { StaticImage } from "gatsby-plugin-image";

// Als Partnerfirma von Zamzam bieten wir Catering für Events und versorgen für alle möglichen Einrichtungen.

function Catering() {
    return (
        <Layout>
            <div className=" h-screen w-screen">
                <div className="h-10 w-full"></div>
                <div className="bg-primary md:w-8/12 mx-auto mt-14 pb-10 ">
                    <h1 className="text-4xl text-center my-10 font-charm"><span className="text-tertiary">T</span>agan <span className="text-tertiary">C</span>atering</h1>
                    <div className="flex justify-between fadeIn1 bg-four items-center">
                        <div className="ml-5 ">
                            {/* <h2 className="underline decoration-2 decoration-tertiary text-xl mb-3">Catering, das begeistert!</h2> */}
                            <p className="max-w-xs sm:my-1">Wir bieten Ihnen eine unglaubliche Auswahl an authentischen orientalischen Gerichten, die mit modernen Kochtechniken kombiniert werden, um Ihnen einzigartige Geschmackserlebnisse zu bieten. Unser Kochteam besteht aus erfahrenen, talentierten Köchen, die das Beste aus jedem Gericht herausholen. Unser Anspruch ist es, Ihnen ein unvergessliches Geschmackserlebnis zu bieten. </p>
                        </div>
                        <StaticImage className="z-0" src="../images/Falafel1.jpg" alt="Falafel" placeholder="none" quality={100} layout="fixed" width={300} height={300}/>
                    </div>
                    <div className="flex justify-between fadeIn2 items-center mt-10">
                        <StaticImage className="mr-5" src="../images/Kibbah.jpg" alt="Buffet" placeholder="blurred" quality={100} layout="fixed" width={250} height={250}/>
                        <div className="mr-5 ">
                            {/* <h2 className="underline decoration-2 decoration-tertiary text-xl mb-3">Gerichte aus dem Orient</h2> */}
                            <p className="max-w-xs sm:my-1">Unser Catering-Service bietet Ihnen eine Vielzahl von Gerichten, die für jeden Geschmack etwas zu bieten haben. Wir bieten Ihnen die Möglichkeit, ein einzigartiges Menü zu kreieren, das Ihren speziellen Anforderungen entspricht. Unser Catering-Service ist perfekt für Veranstaltungen jeder Art, ob es sich um eine private Party, einen Geburtstag, eine Hochzeit oder eine Firmenfeier handelt.</p>
                        </div>
                    </div>
                    <div className="flex bg-four fadeIn3 items-center mt-10">
                        <div className="ml-5 ">
                            {/* <h2 className="underline decoration-2 decoration-tertiary text-xl mb-3">Wir haben Ihr Interesse geweckt?</h2> */}
                            <p className="max-w-xs sm:my-1">Wenn Sie ein professionelles Catering für Ihre Veranstaltung benötigen, zögern Sie nicht, uns zu kontaktieren. Unser Kundenservice ist jederzeit für Sie da, um Ihnen bei allen Fragen zu helfen. Rufen Sie uns einfach unter +49 123456789 an oder schicken Sie uns eine E-Mail an info@tagan-catering.de. </p>
                        </div>
                    </div>
                    <div className="flex items-center fadeIn3 mt-10">
                        <div className="ml-auto mr-5 ">
                            {/* <h2 className="underline decoration-2 decoration-tertiary text-xl mb-3">Wir haben Ihr Interesse nicht geweckt?</h2> */}
                            <p className="max-w-xs sm:my-1">Gönnen Sie sich und Ihren Gästen ein unvergessliches Geschmackserlebnis und wählen Sie Tagan Catering, wenn es um das perfekte Catering geht. Wir freuen uns auf Ihre Anfrage!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Catering