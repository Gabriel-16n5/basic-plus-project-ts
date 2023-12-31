import express, {Request, Response, json} from "express"
import httpStatus from "http-status";
import usersRouter from "./routers/users-router";

const app = express();
app.use(json());
app.use(usersRouter)

app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("aplicação up");
})

const port: Number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));