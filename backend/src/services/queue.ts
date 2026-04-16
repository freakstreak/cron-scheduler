import { Queue } from "bullmq"
import { redis } from "./redis"

export const taskQueue = new Queue("scheduled-tasks", {
    connection: {
        host: "localhost",
        port: 6379
    }
})