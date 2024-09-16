import { Message } from "@/model/UserModel"

export interface ApiResponse {
    success: boolean,
    message: string,
    isAccepetingMessages?: boolean
    messages?: Array<Message>
}