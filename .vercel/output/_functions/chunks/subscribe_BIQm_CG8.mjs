const prerender = false;
const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    const apiKey = "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";
    const listId = Number("15");
    console.log("API KEY EXISTS:", !!apiKey);
    console.log("LIST ID:", listId);
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true
      })
    });
    const text = await response.text();
    console.log("BREVO:", text);
    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          message: text
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.log("ERROR:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: String(error)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
