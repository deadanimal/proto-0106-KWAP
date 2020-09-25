export class Document {
    public user_id: string
    public document_name: string
    public file_no: string
    public is_active: string
    public date_created: string

    constructor(
        user_id: string,
        document_name: string,
        file_no: string,
        is_active: string,
        date_created: string
    ) {
        this.user_id = user_id
        this.document_name = document_name
        this.file_no = file_no
        this.is_active = is_active
        this.date_created = date_created
    }
}