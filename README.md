# 🌐 **PacaHub** 🌐  
_A unified API for seamlessly fetching content from multiple websites._  

## 📚 API Documentation

For more details on how to use the PacaHub API, please refer to the following endpoints:

- **MangaKakalot**
  - Search Manga: `/api/manga/kakalot/search/:query/:page`
  - Latest Manga: `/api/manga/kakalot/latest/:page`
  - Popular Manga: `/api/manga/kakalot/popular/:page`
  - Newest Manga: `/api/manga/kakalot/newest/:page`
  - Completed Manga: `/api/manga/kakalot/completed/:page`
  - Popular Now: `/api/manga/kakalot/popular-now`
  - Home: `/api/manga/kakalot/home`
  - Manga Details: `/api/manga/kakalot/details/:id`
  - Read Manga: `/api/manga/kakalot/read/:mangaId?/:chapterId?`

- **HentaiTV**
  - Search: `/api/hen/hentaitv/search/:query/:page`
  - Random: `/api/hen/hentaitv/random`
  - Recent: `/api/hen/hentaitv/recent`
  - Trending: `/api/hen/hentaitv/trending`
  - Watch: `/api/hen/hentaitv/watch/:id`
  - Info: `/api/hen/hentaitv/info/:id`
  - Genre: `/api/hen/hentaitv/genre/:genre` (visit docs/genre for more info)

- **HentaiCity**
  - Recent: `/api/hen/hentaicity/recent`
  - Popular: `/api/hen/hentaicity/popular`

For further information, please check the `/docs` endpoint in the API.


## 📡 Supported Providers  

PacaHub currently integrates the following sources:  

| Provider       | Status      |
|--------------|------------|
| 📖 **MangaKakalot** | ✅ Running |
| 🎥 **HentaiTV**     | ✅ Running |
| 🔞 **HentaiCity**   | ✅ Running |

> **Note:** Provider statuses are subject to change based on availability.  
