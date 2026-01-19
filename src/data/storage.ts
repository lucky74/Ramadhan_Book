export interface Cerpen {
  id: string; // Akan berisi angka "1" sampai "30"
  title: string;
  content: string;
  dalil: string;
}

const STORAGE_KEY = "ramadhan_ebook_data";

export function getCerpen(): Cerpen[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function getCerpenById(id: string): Cerpen | undefined {
  const data = getCerpen();
  return data.find((c) => c.id === id);
}

export function saveCerpen(newItem: Cerpen) {
  const data = getCerpen();
  const index = data.findIndex((c) => c.id === newItem.id);
  
  if (index >= 0) {
    // Update existing
    data[index] = newItem;
  } else {
    // Add new
    data.push(newItem);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
