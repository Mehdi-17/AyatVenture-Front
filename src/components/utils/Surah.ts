export interface Surah{
    revelation_place: string;
    name_complex: string;
    name_arabic: string;
    translated_name: TranslatedName;
}

interface TranslatedName {
    name: string;
}