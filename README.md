# Lim Lab website revamp v2

Open `index.html` for the redesigned homepage and `outings.html` for the new photo gallery.

## Main changes
- Restored the LIM LAB wordmark and removed the X-like custom glyph.
- Rebuilt the chromatin-mapping and single-molecule research graphics as resolution-independent SVGs.
- Added publication and award thumbnails.
- Added the October 2025 RPA/Science press story and June 2026 lab updates.
- Moved Xuyao Liu to Alumni with her new Wan-Ju Li lab position.
- Added a homepage lab-life teaser and a dedicated, filterable outings page.

## Adding outing photographs
1. Upload the new image to the website or another stable image host.
2. Open `outings-data.js`.
3. Copy an existing object and change `year`, `title`, `caption`, `src`, and `alt`.
4. Save. The gallery and filter buttons update automatically.

## Before publication
- Replace remote Wix image URLs with local files during migration if you want the site fully independent of Wix.
- Confirm the exact formal name of Kaitlyn Abe's Spring 2026 department fellowship; the public department roundup identifies it generically as a Department of Biochemistry Graduate Fellowship.
- Add captions/dates for older outing photographs if you want more specific grouping.
