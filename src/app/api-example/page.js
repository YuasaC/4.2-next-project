"use client";
import { useEffect, useState } from "react";

export default function APIExample() {
    const [message, setMessage] = useState("");
    const [timestamp, setTimestamp] = useState("")
    const [status, setState] = useState(null);

    useEffect(() => {
        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.message),
                    setTimestamp(data.timestamp);
                setState(data.status);
            })
            .catch((err) => console.error("APIエラー:", err));
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>API Example</h1>
            <p>APIからのメッセージ:{message}</p>
            <p>{timestamp}</p>
            <p>ステータス状況:{status}</p>
        </div>
    )
}