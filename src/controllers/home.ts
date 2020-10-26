import {FastifyReply, FastifyRequest} from "fastify"

export default class HomeController {
    public index(req: FastifyRequest, reply: FastifyReply) {
        // @ts-ignore
        return reply.view("index.ejs")
    }
}