import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
async function SelfCarecontentD(){
    let nlaws = await db.post.findMany({
        where:{
            category:"natlaws"
        }
    })
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
                                            <h2>The Natural Laws</h2>
                                        </div>
                                    </div>
                                    {nlaws.map((law) =>(
                                    <div className='listitem' key={law.id}>
                                        <div className='row3x listhover'>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={law.thumbimg} 
                                                alt="TeachingsImgHere" 
                                                width={300} 
                                                height={300}
                                             />
                                            </div>
                                            <div style={{width:"100%"}}>
                                                <div className='flexpaneldisplay apptext' style={{height:"100%"}}>
                                                    <Link href={'/pages/VideoPlayer/' + law.id} className='apptext' 
                                                        style={{textDecoration:"none", height:"100%",width:"100%"}}>
                                                        <h2>{law.title}</h2>
                                                        <h3>{law.subtitle}</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div style={{width:"100%"}}>
                                            <Image 
                                                src={law.thumbnail} 
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
export default SelfCarecontentD;
