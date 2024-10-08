import * as crypto from "crypto-js";

const privatekey = process.env.PRIVATE_KEY || "privatekey123";

export default function getKey(): string {
    const date = new Date();
    const datestr = date.toISOString().split("T")[0];

    const hours = date.getUTCHours();
    const minutes = Math.floor(date.getMinutes() / 3);
    const time = `${hours}:${minutes.toString().padStart(2, "0")}`;
    const combined = `${privatekey}${datestr}${time}`;
    const hash = crypto.SHA256(combined).toString();
    return hash.substring(0, 16);
}
