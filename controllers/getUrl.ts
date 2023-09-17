import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getUrl: RequestHandler = async (req, res) => {
  const userId: string = req.params.user;
  try {
    const urls = await prisma.shortUrl.findMany({ where: { userId } });
    res.status(200).json(urls);
  } catch (error) {
    console.error("Error:", error);
    res.status(404).send("Not Found");
  }
};

export default getUrl;
