/**
 * Reusable utility to optimize Cloudinary URLs dynamically.
 */

export const CLOUDINARY_WIDTHS = {
  hero: 1920,      // Hero Banner / Large backgrounds
  showcase: 1200,  // Large grid showcases
  card: 800,       // Feature cards / grid items
  thumbnail: 600,  // Small thumbnails / supporting gallery items
  logo: 300,       // Brand logos / client logos
} as const;

/**
 * Optimizes a Cloudinary image URL by injecting quality, format, and width parameters.
 * 
 * @param url The raw image URL.
 * @param width The target width limit in pixels.
 * @returns The optimized Cloudinary URL, or the original URL if not from Cloudinary.
 */
export function getOptimizedCloudinaryUrl(url: string, width?: number): string {
  // 1. non-Cloudinary URLs are returned unchanged
  if (!url || !url.includes("res.cloudinary.com")) return url;

  const marker = "/image/upload/";
  const idx = url.indexOf(marker);
  if (idx === -1) return url;

  const before = url.slice(0, idx + marker.length);
  let after = url.slice(idx + marker.length);

  const parts = after.split("/");

  // 2. helper avoids duplicate q_auto/f_auto/w_ transformations.
  // We detect if parts[0] is an existing transformation block.
  // 3. Existing version paths like `v1779354156` (which start with 'v' followed by digits)
  // must not be removed as they represent Cloudinary asset upload timestamps.
  if (
    parts[0] &&
    !parts[0].startsWith("v") &&
    (parts[0].includes("q_auto") ||
      parts[0].includes("f_auto") ||
      /(^|,)w_\d+/.test(parts[0]))
  ) {
    // Shift out the old transformation block
    parts.shift();
    after = parts.join("/");
  }

  // Define new transformation parameters
  const params = ["q_auto", "f_auto"];
  if (width) params.push(`w_${width}`);

  // Construct and return the optimized URL
  return `${before}${params.join(",")}/${after}`;
}
