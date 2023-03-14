export async function sendMatrixMessage(homeserver: string, roomid: string, token: string, message: string) {
    const url = `https://${homeserver}/_matrix/client/v3/rooms/${roomid}/send/m.room.message`;
    const body = {
        msgtype: "m.text",
        body: message,
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    const mxmessage = fetch(url, options).then(response => {
        response.json();
    });
    return mxmessage;
}