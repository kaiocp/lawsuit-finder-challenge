export default interface Lawsuit {
    id: string;
    cnj_number: string;
    court: string;
    plaintiff: string;
    defendant: string;
    date: Date;
    occurrences: 
        Array<{
            date: Date, 
            description: String
        }>;
}