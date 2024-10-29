"use server"
import { PrismaClient } from "@prisma/client";
import { MdCopyright } from "react-icons/md";
import Link from "next/link";

const db = new PrismaClient();
export default async function page({params}){
    
    let pid = parseInt(params.id)
    let vid = await db.post.findFirst(
        {
            where:{
                id: pid
            }
        }
    );
    return(
        <div className="chcontainer">
            <div className="bklink">
                <Link href="/pages/SelfCareD">
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
            <div className='vidgallerycontainer'>
                <div className="flexpaneldisplay" style={{height:"100dvh"}}>
                    <iframe 
                        id="video"
                        src={vid.vidurl} 
                        width="720" 
                        height="480"
                        style={{border:'none'}} 
                    />
                    <h2>{vid.title}</h2>
                    <div className='flexpaneldisplayR copyright'>
                        <p>Copyright&nbsp;</p> <MdCopyright/><p>&nbsp;2023&nbsp;</p><p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}