export interface IUserDuo {
    id: string,
    icon: string,
    nickname: string
}

export interface  IDuo {
    id?: string,
    users: IUserDuo[],
    usersId: string[]
}