import { type NextRequest } from "next/server";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

interface ResponseProp {
    response: any;
    status?: number;
}

const Data: ResponseProp = {
    response: "You made a mistake somewhere",
    status: 200,
};

export function GET(request: NextRequest) {
    return new Response(JSON.stringify(Data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
