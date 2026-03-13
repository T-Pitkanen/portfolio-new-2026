# Portfolio & Learning Documentation

A Next.js-based portfolio and educational documentation site showcasing projects and comprehensive guides on software development topics including Agile methodologies, blockchain, AI, and more.

## Features

- **Project Showcase**: Interactive project gallery with image sliders and detailed descriptions
- **Educational Topics**: Comprehensive guides on:
  - Project Planning & Documentation (Agile, Scrum, Kanban)
  - Blockchain & Cryptography
  - Artificial Intelligence
  - And more...
- **Dynamic Content**: Structured content blocks supporting headers, paragraphs, lists, images, and sections
- **Table of Contents**: Auto-generated sticky sidebar navigation for long-form content
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Image Modal**: Full-screen image viewing with navigation

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

## Project Structure

```
portfolio-new/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components (About, Projects, Topics, TOC)
│   │   ├── topics/         # Topic pages with dynamic routing
│   │   ├── globals.css     # Global styles
│   │   └── page.js         # Homepage
│   └── data/
│       ├── projectData.js  # Project showcase data
│       └── topicsData.js   # Educational content data
├── public/                 # Static assets (images, etc.)
└── README.md
```

## Adding Content

### Adding a New Project

Edit `src/data/projectData.js`:

```javascript
{
  title: "Project Name",
  goal: "Project objective...",
  design: "Design decisions...",
  code: "Technical implementation...",
  link: "https://project-url.com",
  image: ["/path/to/image1.png", "/path/to/image2.png"]
}
```

### Adding Educational Content

Edit `src/data/topicsData.js` and add subtopics with structured content blocks:

```javascript
{
  slug: "topic-slug",
  title: "Topic Title",
  excerpt: "Brief description",
  subtopics: [
    {
      slug: "subtopic-slug",
      title: "Subtopic Title",
      excerpt: "Brief description",
      content: [
        { type: "header", text: "Header Text" },
        { type: "paragraph", text: "Paragraph content..." },
        { type: "subheader", text: "Subheader Text" },
        { type: "list", items: ["Item 1", "Item 2"] },
        {
          type: "image",
          src: "/path/to/image.png",
          alt: "Image description",
          caption: "Image caption",
          size: "medium" // small | medium | large | full
        }
      ]
    }
  ]
}
```

## Content Block Types

- **header**: Main section heading (h2)
- **subheader**: Subsection heading (h3)
- **paragraph**: Text content
- **list**: Bulleted list
- **image**: Responsive image with optional caption and size variants
- **section**: Nested content with optional title

## Technologies

- **Framework**: Next.js 14
- **Styling**: CSS Modules
- **Components**: React with Server & Client Components
- **Image Optimization**: Next.js Image component
- **Routing**: App Router with dynamic routes
- **Modal**: react-modal
- **Slider**: Swiper

## Development Notes

- Uses CSS Modules for scoped styling
- Supports static generation for optimal performance
- Table of Contents auto-scans headings and generates navigation
- Responsive images with multiple size variants
- Sticky sidebar navigation on desktop

## Deploy on Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is for educational and portfolio purposes.