export interface Surah{
    id: number;
    revelation_place: string;
    name_complex: string;
    name_arabic: string;
    translated_name: TranslatedName;
}

interface TranslatedName {
    name: string;
}