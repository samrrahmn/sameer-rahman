import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();

    const apiKey = import.meta.env.BREVO_API_KEY;

    const listId = Number(import.meta.env.BREVO_LIST_ID);

    console.log("API KEY EXISTS:", !!apiKey);
    console.log("LIST ID:", listId);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const text = await response.text();

    console.log("BREVO:", text);

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: text,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.log("ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
