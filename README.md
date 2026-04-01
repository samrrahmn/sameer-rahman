# Sameer Rahman's Personal Website

This is the source code for my personal website, built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Project Structure

```text
├── public/               # Static assets (images, favicon)
│   └── sameer-rahman.png
├── src/
│   ├── content/          # Content collections
│   │   └── posts/        # Blog posts in Markdown format
│   ├── layouts/          # Page layouts (header, footer)
│   ├── pages/            # Routes and pages
│   │   └── post/         # Dynamic post pages
│   └── styles/           # Global styles (if added later)
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies and scripts
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Installs dependencies                       |
| `npm run dev`          | Starts local dev server at `localhost:4321` |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the build locally                   |

## Deployment

This site is set up for easy deployment on Vercel. Just connect your GitHub repository to Vercel, and it will automatically build and deploy the site when changes are pushed.

## License

This project is open for learning and personal use.  
Feel free to explore and adapt.
