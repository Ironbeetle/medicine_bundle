'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import KTClogoL from "../../public/KTClogoL.jpg";
const Openlogo = () => {
   
    return (
        <>
            <div className="logobox">
                <div className='flexpaneldisplay'>
                    <Image
                        src={KTClogoL}
                        alt="KTClogo"
                        width={323}
                        height={182}
                        priority={true}
                        style={{objectFit: "contain"}}
                        quality={100}
                    />
                    <div className="apptextL">
                        <h1>Keewatin Tribal Council Inc.</h1>
                    </div>
                    <div className="btn">
                    <Link href="/pages/TeachHome"
                        className='linkbtnfront'
                    >
                        Enter
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Openlogo;
