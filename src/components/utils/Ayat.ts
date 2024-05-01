export interface Ayat{
    chapter_id: number;
    verse_key: string;
    text_uthmani: string;
    translations: Translation[];
}

interface Translation {
    text: string;
}