import Env from "./env/env"

async function main() {
    const env = new Env()

    console.log(await env.get("PORT"))
}

main()