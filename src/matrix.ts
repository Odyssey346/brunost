interface MatrixArguments {
    homeserver: string;
    token: string;
    roomid: string;
    message: string;
}

export function sendMatrixMessage(args: MatrixArguments) {
    const url = `https://${args.homeserver}/_matrix/client/v3/rooms/${args.roomid}/send/m.room.message`;
    const body = {
        msgtype: "m.text",
        body: args.message,
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${args.token}`,
        },
        body: JSON.stringify(body),
    };
    fetch(url, options);
}