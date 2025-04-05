import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ذكي - محرك بحث مدعوم بالذكاء الاصطناعي 🤖",
    short_name: "ذكي 🤖",
    description: "محرك بحث ذكي مدعوم بالذكاء الاصطناعي يساعدك في العثور على المعلومات على الإنترنت باستخدام نماذج الذكاء الاصطناعي المتقدمة",
    start_url: "/",
    display: "standalone",
    categories: ["search", "ai", "productivity"],
    theme_color: "#171717",
    background_color: "#171717",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        type: "image/png",
        sizes: "1200x630",
      }
    ]
  }
}