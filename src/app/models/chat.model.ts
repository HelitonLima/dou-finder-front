export interface IChatMessage {
    senderIdUser: string,
    reciverIdUser: string,
    message: string
}

export interface IChat {
    users: string[],
    messages: IChatMessage[]
}