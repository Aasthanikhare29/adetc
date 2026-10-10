// Shared client uploader (cover, OG, inline editor and block images).
// The route re-checks type/size; these checks just give a clear message up front.
export const MAX_UPLOAD_MB = 4; // Vercel rejects bodies over ~4.5 MB before the route even runs

export async function uploadImage(file) {
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image file.');
  if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
    throw new Error(`Image is ${(file.size / 1048576).toFixed(1)} MB. Max is ${MAX_UPLOAD_MB} MB, so compress it first.`);
  }
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json().catch(() => ({})); // a 413 from the platform is not JSON
  if (!res.ok) {
    throw new Error(json.error || (res.status === 413 ? `Image too large (max ${MAX_UPLOAD_MB} MB).` : `Upload failed (${res.status}).`));
  }
  return json.url;
}
