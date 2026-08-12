import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/advisor", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          reply: "Anahita Hospitality specializes in 4 core pillars: Weddings & Celebrations (Wedding), Domestic Travel (Domestic Destination), International Travel (international holidays), and MICE & Corporate Events (MICE)."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are Anahita Group's Senior Event & Luxury Travel Concierge Advisor. You provide concise, ultra-luxurious, highly helpful advice regarding destination wedding planning (royal palaces, beach ceremonies), Domestic Destination (luxury trains, Rajasthan stays), international holidays (Maldives, Europe, ski resorts), and corporate MICE events (executive summits, conferences, retreats). Keep your answer under 100 words, warm, clear, professional, and sophisticated.
User Query: "${message}"`
      });

      res.json({ reply: response.text });
    } catch (err: any) {
      console.error("Gemini Advisor Error:", err);
      res.json({
        reply: "Anahita’s principals advocate for positioning ultra-luxury assets with tailored butler service and dynamic revenue algorithms."
      });
    }
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
