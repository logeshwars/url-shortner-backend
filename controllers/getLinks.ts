import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getLinks: RequestHandler = async (req, res) => {
  const userId: string = req.params.user;
  try {
    const links = await prisma.linkTree.findMany({ where: { userId } });
    res.status(200).json(links);
  } catch (error) {
    console.error("Error:", error);
    res.status(404).send("Not Found");
  }
};

export default getLinks;
