export interface Cerpen {
  id: string;
  title: string;
  content: string;
  dalil: string;
}

const STORAGE_KEY = "ramadhan_ebook_data";

export function getCerpen(): Cerpen[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCerpen(data: Cerpen[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
