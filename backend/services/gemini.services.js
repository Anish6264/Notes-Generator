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
              process.env.CLIENT_URL,

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

      const text =
        data?.choices?.[0]?.message
          ?.content;

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

      try {
        return JSON.parse(cleanText);
      } catch {
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
        "OpenRouter Error:",
        error.message
      );

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