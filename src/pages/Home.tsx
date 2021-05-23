import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import RecordWebCamVideo from "../components/RecordWebCamVideo";
import UploadVideoFile from "../components/UploadVideoFile";
import ConvertToGif from "../components/ConvertToGif";

const ffmpeg = createFFmpeg({ log: true });

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [ready, setReady] = useState<boolean>(false);
    const [video, setVideo] = useState<File | null | undefined>();
    const [gif, setGif] = useState<string>("");
    const [isWebCam, setIsWebCam] = useState(!true);

    const load = async () => {
        await ffmpeg.load();
        setReady(true);
    };

    useEffect(() => {
        load();
    }, []);

    const convertToGif = async () => {
        if (video) {
            ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

            await ffmpeg.run("-i", "test.mp4", "-t", "2.5", "-ss", "2.0", "-f", "gif", "out.gif");

            const data = ffmpeg.FS("readFile", "out.gif");

            const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));

            setGif(url);
        }
    };

    return ready ? (
        <Layout>
            <button onClick={() => setIsWebCam(state => !state)}>{isWebCam ? "WebCam" : "Upload Video"}</button>
            {isWebCam ? <RecordWebCamVideo /> : <UploadVideoFile video={video} setVideo={setVideo} />}
            <ConvertToGif onCovert={convertToGif} gif={gif} />
        </Layout>
    ) : (
        <div>loading</div>
    );
};

export default Home;
