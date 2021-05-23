import React from "react";

interface UploadVideoFileProps {
    video: File | undefined | null;
    setVideo: React.Dispatch<React.SetStateAction<File | null | undefined>>;
}

const UploadVideoFile: React.FC<UploadVideoFileProps> = ({ video, setVideo }) => {
    return (
        <div>
            <h1>Upload Video</h1>
            {video && <video controls width={250} src={URL.createObjectURL(video)}></video>}
            <input type="file" onChange={e => setVideo(e.target.files?.item(0))} accept="video/*" />
        </div>
    );
};

export default UploadVideoFile;
