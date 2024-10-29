import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
async function page({params}){

    let Category = () => {
        if (params.id === "goodlife") {
            return <div className='apptext'>
                        <h2>The Good Life</h2>
                    </div>
        }else if (params.id === "dene") {
            return <div className='apptext'>
                        <h2>Dene Page</h2>
                    </div>
        }else if (params.id === "findway") {
            return <div className='apptext'>
                        <h2>Finding Our Way Page</h2>
                    </div>
        }else if (params.id === "language") {
            return <div className='apptext'>
                        <h2>Turning to the language</h2>
                    </div>
        }
    }
    let journey = await db.post.findMany({
        where: {category: params.id},
        orderBy: {id: 'asc'}
    });
    let ContentView = () => {
        return(
            <>
                <div style={{height:"100dvh"}}>
                    <div className='appcontainer'>
                        <div className='playlist'>
                            <div className='row1fr4fr'>
                                <div></div>
                                <div className='flexpaneldisplay'>
                                    <div className='listitemTop' style={{marginTop:"1rem"}}>
                                        <div className='apptext'>
                                            <Category/>
                                        </div>
                                    </div>
                                    {journey.map((bomj) =>(
                                    <div className='listitem' key={bomj.id}>
                                        <div className='row3x listhover'>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={bomj.thumbimg} 
                                                alt="TeachingsImgHere" 
                                                width={300} 
                                                height={300}
                                            />
                                            </div>
                                            <div style={{width:"100%"}}>
                                                <div className='flexpaneldisplay apptext' style={{height:"100%"}}>
                                                    <Link href={'/pages/BMJPlayer/' + bomj.id} className='apptext' 
                                                        style={{textDecoration:"none", height:"100%",width:"100%"}}>
                                                        <h2>{bomj.title}</h2>
                                                        <h3>{bomj.subtitle}</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={bomj.thumbnail} 
                                                alt="medicineIMGHere" 
                                                width={300} 
                                                height={300}
                                                style={{justifySelf:"flex-end"}}
                                            />
                                            </div>
                                         
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return(
        <div>
            <div className="bklink">
                <Link href='/pages/TeachHome'>
                    <div className="bkbtn">
                        <p>Back</p>   
                    </div>
                </Link>
            </div>
            <div className="bkgcontainer">
                <video autoPlay loop className='videobkg'>
                    <source src="/webm/GalleryversionD.webm" type="video/webm; codecs=vp9"/>
                </video>
            </div>
            <ContentView/>
        </div>
    );
}
export default page;
