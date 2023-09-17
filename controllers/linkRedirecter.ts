import { RequestHandler } from "express";
import { PrismaClient, linkTree} from "@prisma/client";
const prisma = new PrismaClient();

const linkRedirector: RequestHandler = async (req, res) => {
  const linkId = req.params.linkId;
  try {
    const linkTree: linkTree = await prisma.linkTree.findFirst({
      where: { id:linkId},
    });
    linkTree.clickCount += 1;
    await prisma.shortUrl.update({
      where: { id: linkTree.id },
      data: { clickCount: linkTree.clickCount },
    });
    res.redirect(linkTree.rawUrl);
  } catch (error) {
    console.log(error);
    res.status(404).send("can't find the link")
  }
};

export default linkRedirector;
