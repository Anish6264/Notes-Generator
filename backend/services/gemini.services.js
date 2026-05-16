const OPENROUTER_URL =
  "https://openrouter.ai/api/v1/chat/completions";

export const generateGeminiResponse =
  async (prompt) => {
    try {
      const response = await fetch(
        OPENROUTER_URL,
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
              "application/json",

            "HTTP-Referer":
              "http://localhost:5173",

            "X-Title":
              "Exam Notes AI",
          },

          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",

            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],

            temperature: 0.7,

            max_tokens: 4000,
          }),
        }
      );

      const data = await response.json();

      // SHOW COMPLETE RESPONSE IN TERMINAL
      console.log(
        "OpenRouter Response:"
      );

      console.log(
        JSON.stringify(data, null, 2)
      );

      const text =
        data?.choices?.[0]?.message
          ?.content;

      // SHOW AI TEXT ONLY
      console.log("AI TEXT:");

      console.log(text);

      if (!text) {
        throw new Error(
          data?.error?.message ||
            "No AI response"
        );
      }

      const cleanText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      // SHOW CLEAN TEXT
      console.log("CLEAN TEXT:");

      console.log(cleanText);

      try {
        const parsedData =
          JSON.parse(cleanText);

        // SHOW PARSED JSON
        console.log(
          "PARSED JSON:"
        );

        console.log(parsedData);

        return parsedData;
      } catch (parseError) {
        console.log(
          "JSON PARSE FAILED"
        );

        console.log(parseError);

        return {
          subTopics: {
            "⭐": [],
            "⭐⭐": [],
            "⭐⭐⭐": [],
          },

          importance: "⭐",

          notes: cleanText,

          revisionPoints: [],

          questions: {
            short: [],
            long: [],
            diagram: "",
          },

          diagram: {
            type: "",
            data: "",
          },

          charts: [],
        };
      }
    } catch (error) {
      console.error(
        "OPENROUTER ERROR:"
      );

      console.error(error);

      return {
        subTopics: {
          "⭐": [],
          "⭐⭐": [],
          "⭐⭐⭐": [],
        },

        importance: "⭐",

        notes:
          "AI generation temporarily unavailable.",

        revisionPoints: [],

        questions: {
          short: [],
          long: [],
          diagram: "",
        },

        diagram: {
          type: "",
          data: "",
        },

        charts: [],
      };
    }
  };