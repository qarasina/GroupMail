import Env from "./env/env"
import Routers from "./routers/routers";

async function main() {
    const env = new Env()
    const routers = new Routers()

    await Promise.all([
        routers.handle(),
        routers.listen(await env.get("PORT"))
    ])
}

main()