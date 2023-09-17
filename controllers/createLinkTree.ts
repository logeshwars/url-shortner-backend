import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const createLinkTree: RequestHandler = async (req, res) => {
  const rawUrl: string = req.body.url;
  const userId: string = req.body.userId;
  const name: string = req.body.name;

  try {
    await prisma.linkTree.create({
      data: {
        rawUrl,
        userId,
        name,
        clickCount: 0,
      },
    });
    console.log(`URL added to  userId : ${userId} name ${name}`);
    res.status(201).json({ message: "succussfully created." });
  } catch (error) {
    console.error("Error:", error);
    res.status(422).json({ message: "Can not add new url" });
  }
};

export default createLinkTree;
