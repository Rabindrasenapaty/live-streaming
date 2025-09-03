import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
    const { roomId } = useParams();
    const appID = Number(import.meta.env.VITE_APPID);
    const serverSecret = import.meta.env.VITE_SERVER_SECRET;

    function randomID(len = 5) {
        let result = "";
        const chars =
            "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
        for (let i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const myMeeting = async (element) => {
        if (!element) return;

        // generate kit token inside component
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            randomID(5), // userID
            randomID(5)  // userName
        );

        // Create instance object
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the live streaming room
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
                config: {
                    role: "Host", // or "Audience"
                },
            },
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `${window.location.origin}/room/${roomId}`,
                },
            ],
        });
    };

    return (
        <div
            className="myCallContainer"
            ref={myMeeting}
            style={{ width: "100vw", height: "100vh" }}
        ></div>
    );
};

export default Room;
