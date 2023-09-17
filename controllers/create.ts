import { RequestHandler } from "express";
import randomString from "../functions/randomString";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const create: RequestHandler = async (req, res) => {
  const url: string = req.body.url;
  const userId: string = req.body.userId;
  const shortUrlId: string = randomString(6);
  try {
    await prisma.shortUrl.create({
      data: {
        rawUrl: url,
        userId: userId,
        shortUrlId,
        clickCount: 0,
      },
    });
    console.log(
      `URL created userId : ${userId} rawUrl : ${url} shortUrlId : ${shortUrlId}`
    );
    res.status(201).json({ shortUrlId, message: "succussfully created." });
  } catch (error) {
    console.error("Error:", error);
    res.status(422).json({ message: "Can not add new url" });
  }
};

export default create;
