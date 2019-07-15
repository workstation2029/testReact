interface IUserType {
    name: string
}

export const userType = {
    ADMIN: {
        name: "ADMIN",
    } as IUserType,
    GUEST: {
        name: "GUEST", 
    } as IUserType
} 