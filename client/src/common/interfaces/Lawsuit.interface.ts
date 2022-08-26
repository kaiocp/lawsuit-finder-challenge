export default interface Lawsuit {
    _id: string;
    cnj_number: string;
    court: string;
    plaintiff: string;
    defendant: string;
    date: Date;
    occurrences: 
        Array<{
            date: Date, 
            description: string
            _id: string;
        }>;
}