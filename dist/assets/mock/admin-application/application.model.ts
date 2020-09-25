export class Application {
    public user_id: string
    public name: string
    public file_no: string
    public is_active: string
    public joined_at: string

    constructor(
        user_id: string,
        name: string,
        file_no: string,
        is_active: string,
        joined_at: string
    ) {
        this.user_id = user_id
        this.name = name
        this.file_no = file_no
        this.is_active = is_active
        this.joined_at = joined_at
    }
}