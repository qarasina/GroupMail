import dotenv from 'dotenv'

export default class Env {
    public constructor() {
        dotenv.config()
    }

    public get(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const value = process.env[name]

            if (value) {
                return resolve(value)
            }

            return reject("Impossible de récupérer la variable d'env")
        })
    }
}