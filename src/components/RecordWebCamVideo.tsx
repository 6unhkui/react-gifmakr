import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";

interface RecordWebCamVideoProps {}

const RecordWebCamVideo: React.FC<RecordWebCamVideoProps> = ({}) => {
    const previewRef = useRef<null | HTMLVideoElement>(null);

    const startCam = async () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            if (previewRef.current) {
                previewRef.current.srcObject = stream;
            }
        });
    };

    const stopCam = useCallback(() => {
        if (previewRef.current) {
            (previewRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
        }
    }, []);

    useEffect(() => {
        startCam();
    }, []);

    useLayoutEffect(() => () => stopCam(), []);

    return (
        <div>
            <h1>WebCam</h1>
            <video autoPlay muted width="600" height="400" ref={previewRef}></video>

            <div>
                <button>Start Record</button>
                <button>Stop Record</button>
                <button>Play Record</button>
            </div>
        </div>
    );
};

export default RecordWebCamVideo;
