import OpenAI from "openai";

interface Option {
  prompt: string;
}

export const generateImageUseCase = async (openai: OpenAI, { prompt }: Option) => {
  try {
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024"
    });

    return { imageUrl: response.data[0].url };
  } catch (error) {
    console.error("Error al generar la imagen:", error);
    throw new Error("No se pudo generar la imagen.");
  }
};