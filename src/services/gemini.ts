import { GoogleGenAI, Content } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Vous êtes Chronos, le guide IA de l'agence TimeTravel.
Votre rôle est d'aider les voyageurs à choisir leur prochaine destination temporelle, de répondre aux questions sur la sécurité et de fournir des faits historiques ou futuristes intrigants.

Ton : Mystérieux, sophistiqué, mais utile et rassurant.
Informations Clés :
- Nous proposons 3 destinations exclusives :
  1. Paris 1889 (Exposition Universelle & Belle Époque)
  2. Crétacé -65M années (Derniers jours des dinosaures)
  3. Florence 1504 (Renaissance, Âge d'or artistique)
- La sécurité est garantie par notre technologie Chrono-Shield™.
- Les prix varient de 4 000 € à 6 500 €.
- Vous pouvez les aider à réserver en les dirigeant vers la page de réservation.

Si un utilisateur demande à réserver, encouragez-le à visiter la page de réservation.
Gardez les réponses concises (moins de 100 mots) sauf si une histoire détaillée est demandée.
Répondez toujours en français.
`;

export async function sendMessageToGemini(message: string, history: Content[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash-latest",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Je semble rencontrer un problème temporel. Veuillez réessayer plus tard.";
  }
}
