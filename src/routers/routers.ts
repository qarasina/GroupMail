import fastify from "fastify"
import path from 'path'
import HomeController from "../controllers/home"

export default class Routers {
    private server = fastify()

    private home = new HomeController()

    constructor() {
        this.server.register(require('point-of-view'), {
            engine: {
                ejs: require('ejs')
            },
            root: __dirname + "/templates",
            options: {}
        })
    }

    public handle(): void {
        this.server.get("/", this.home.index)
    }

    public listen(port: string): void {
        this.server.listen(port, () => console.log('Listening ...'))
    }
}