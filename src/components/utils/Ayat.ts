export interface Ayat{
    verse_key: string;
    text_uthmani: string;
    translations: Translation[];
}

interface Translation {
    text: string;
}