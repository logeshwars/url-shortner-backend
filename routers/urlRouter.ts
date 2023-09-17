import { Router } from "express";
import redirecter from "../controllers/redirecter";
import create from "../controllers/create";
import getUrl from "../controllers/getUrl";
import createLinkTree from "../controllers/createLinkTree";
import getLinks from "../controllers/getLinks";
import linkRedirector from '../controllers/linkRedirecter';

const urlRouter: Router = Router();

urlRouter.post("/create", create);

urlRouter.get("/:url", redirecter);

urlRouter.get("/user/:user", getUrl);

urlRouter.post("/tree/create", createLinkTree);

urlRouter.get("/tree/:user", getLinks);

urlRouter.get("/:linkId", linkRedirector);

export default urlRouter;
