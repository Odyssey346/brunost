export async function sendDiscordMessage(webhookurl: string, message: string) {
    const body = {
        content: message,
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const discordmessage = fetch(webhookurl, options).then(response => {
        response.json();
    });
    return discordmessage;
}