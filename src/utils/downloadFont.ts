import { Font } from '../data/fonts';

/**
 * Downloads a font file reliably to the user's system.
 * 1. Attempts blob fetch with CORS headers for direct browser download.
 * 2. If blob fetch fails, falls back to direct anchor download with raw source.
 */
export async function downloadFontFile(
  font: Font,
  onNotify?: (message: string) => void
): Promise<void> {
  const extension = (font.fontFormat || 'ttf').toLowerCase();
  const filename = `${font.slug}.${extension}`;

  if (onNotify) {
    onNotify(`Starting download for ${font.name}...`);
  }

  try {
    const response = await fetch(font.fontFileUrl, {
      method: 'GET',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Clean up memory
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    if (onNotify) {
      onNotify(`✓ Downloaded ${font.name} (${font.fontFormat}) successfully!`);
    }
  } catch (error) {
    console.warn(`Direct blob fetch failed for ${font.name}, using anchor fallback:`, error);

    // Reliable fallback: Anchor click with direct link
    const anchor = document.createElement('a');
    anchor.href = font.fontFileUrl;
    anchor.download = filename;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    if (onNotify) {
      onNotify(`Downloaded ${font.name} (${font.fontFormat})`);
    }
  }
}
