import bcrypt from 'bcrypt'


const salt: number = 10

export const hashPassword = async (pass: string): Promise<string> => {

    let hash: any = await bcrypt.hash(pass, salt)

    return hash

}

export const comparePassword = async (pass: string, hash: string): Promise<boolean> => {
    const match = await bcrypt.compare(pass, hash);

    return match

}