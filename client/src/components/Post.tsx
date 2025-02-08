import React from 'react'
import Image from './Image'
import PostInfo from './PostInfo'
import PostInteraaction from './PostInteraaction'
import { imagekit } from '@/utils'
import Video from './Video'

interface FileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    customMetadata?: { sensitive: boolean };
}
const Post = async () => {

    const getFiledetails = async (fileId: string): Promise<FileDetailsResponse> => {
        return new Promise((resolve, reject) => {
            imagekit.getFileDetails(fileId, function (error, result) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log(result);
                    resolve(result as FileDetailsResponse);
                }
            });
        });
    };


    const fileDetails = await getFiledetails("67a6e31f432c47641691f2cd")
    console.log(fileDetails, "file detilas ...................");

    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            {/* POST TYPE */}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path
                        fill='#71767b'
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span>Lama dev Reposted</span>
            </div>

            {/* POST content */}
            <div className="flex gap-4">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image path='general/avatar.png' alt='' w={100} h={100} tr={true} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                    {/* Top section */}
                    <div className='flex items-center justify-between gap-2'>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className='text-md font-bold'>Akash T B</h1>
                            <span className='text-textGray'>powerseeker41@gmail.com</span>
                            <span className='text-textGray'>1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/* text  and media*/}
                    <p className=''>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque at accusantium suscipit eum error quo non, reprehenderit
                        odit reiciendis. Iste praesentium ullam unde commodi sit quaerat.
                        Provident pariatur repudiandae aperiam.
                    </p>
                    {fileDetails && fileDetails.fileType==="image" ? (
                        <Image path={fileDetails.filePath} alt='' w={fileDetails.width} h={fileDetails.height} className={fileDetails.customMetadata?.sensitive?"blur-lg":""}/>
                    ):<Video path={fileDetails.filePath} className={fileDetails.customMetadata?.sensitive?"blur-lg":""}/>}
                    <PostInteraaction />
                </div>
            </div>
        </div>
    )
}

export default Post


// className={fileDetails.customMetadata?.sensitive?"blur-lg":""}