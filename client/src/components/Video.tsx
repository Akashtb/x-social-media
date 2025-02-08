"use client"
import { IKVideo } from "imagekitio-next";

type VideoType = {
    path: string;
    className: string
}
const Video = ({ path, className }: VideoType) => {
    return (
        <IKVideo
            urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
            path={path} className={className}
            transformation={[{ height: "1080", width: "1920",q:"90" }]}
            controls
        />
    )
}

export default Video