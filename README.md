# Altura Frontend Application Repo

## Getting Started

Install Dependencies
`npm install`

Dev Server
`npm run dev`

Format
`npm run format`

Lint
`npm run lint`

## Vercel Domain

https://altura-frontned-test.vercel.app/

## File Structure

📦src
┣ 📂api (functions fetching data with axios)
┃ ┗ 📂nft
┃ ┃ ┗ 📜index.ts
┣ 📂components
┃ ┣ 📂NftCard
┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂common (components used multiple times throughout applications)
┃ ┃ ┣ 📂Accordian
┃ ┃ ┃ ┣ 📜Accordian.stories.tsx
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜types.ts
┃ ┃ ┣ 📂Button
┃ ┃ ┃ ┣ 📜Button.stories.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂Modal
┃ ┃ ┃ ┣ 📜Modal.stories.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┣ 📂pages
┃ ┣ 📂api - nextjs server side api
┃ ┃ ┗ 📜hello.ts
┃ ┣ 📜_app.tsx
┃ ┣ 📜_document.tsx
┃ ┗ 📜index.tsx
┣ 📂store (application store, using effector library)
┃ ┗ 📂nft
┃ ┃ ┗ 📜index.ts
┣ 📂styles
┃ ┗ 📜globals.css
┣ 📂types (application types)
┃ ┗ 📂nft
┃ ┃ ┗ 📜index.ts
┣ 📂utils (helper functions for app)
┃ ┗ 📜index.ts
┗ 📂web3 (abi and contract related web3 info)
┃ ┣ 📜abi.ts
┃ ┗ 📜contracts.ts
