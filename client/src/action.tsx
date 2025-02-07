"use server"

import ImageKit from "imagekit"
// import { NextResponse } from "next/server";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    privateKey: process.env.PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

// export async function GET(request) {
//   return NextResponse.json(imagekit.getAuthenticationParameters());
// }

export const shareAction = async (formData: FormData, settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
}) => {
    const file = formData.get("file") as File
    // const desc =formData.get("desc") as string

    // console.log(file ,desc);

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    console.log(settings);
    console.log(file.name);
    
        
    const transformation = `w-600, ${settings.type === "square"
            ? "ar-1-1"
            : settings.type === "wide"
                ? "ar-16-9"
                : ""
        }`;

    imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: "/x-social-media",
        transformation: {
            pre: transformation
        },customMetadata:{
            sensitive:settings.sensitive
        }
    }, function (error, result) {
        if (error) console.log(error);
        else console.log(result);
    })

}