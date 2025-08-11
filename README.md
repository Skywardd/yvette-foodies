# 🍽️ Yvette Foodies

A modern, responsive food sharing application built with Next.js 15, featuring beautiful animations and optimized performance.

![Foodies App](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![GSAP](https://img.shields.io/badge/GSAP-Animations-green?style=for-the-badge)
![AWS S3](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazon-aws)

## ✨ Features

- **🎨 Beautiful Hero Slides** - Interactive slideshow with GSAP animations
- **📱 Fully Responsive** - Optimized for all device sizes
- **🖼️ Image Optimization** - Next.js Image component with proper sizing
- **🔄 Smooth Navigation** - Touch/swipe support and scroll navigation
- **📊 SQLite Database** - Local database for meal data
- **☁️ AWS S3 Integration** - Cloud storage for images
- **🎭 Modern UI/UX** - Clean design with gradient themes

## 🚀 Live Demo

Visit the live application: (https://yvette-foodies-app.vercel.app/)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- AWS S3 bucket for image storage
- Basic understanding of Next.js and React

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:Skywardd/yvette-foodies.git
   cd yvette-foodies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET_NAME=your_bucket_name
   ```

4. **Initialize the database**

   ```bash
   node initdb.js
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
yvette-foodies/
├── app/                      # Next.js 13+ App Router
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   ├── community/           # Community page
│   ├── meals/               # Meals section
│   │   ├── [slug]/         # Dynamic meal pages
│   │   └── share/          # Share meal page
│   └── not-found.js        # 404 page
├── components/              # Reusable components
│   ├── hero-slides/        # Hero slideshow component
│   ├── images/             # Image slideshow
│   ├── main-header/        # Navigation header
│   └── meals/              # Meal-related components
├── lib/                     # Utility functions
│   ├── actions.js          # Server actions
│   └── meals.js            # Database operations
├── assets/                  # Static images
├── public/                  # Public assets
└── meals.db                # SQLite database
```

## 🎯 Key Components

### Hero Slides

- Interactive slideshow with 3 sections
- GSAP-powered animations
- Touch/swipe navigation
- Responsive design

### Meal Management

- Browse meals with filtering
- Detailed meal pages
- Share new recipes
- Image upload functionality

### Navigation

- Responsive hamburger menu
- Smooth transitions
- Mobile-optimized

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔒 Environment Variables

Required environment variables:

| Variable                | Description                   | Required |
| ----------------------- | ----------------------------- | -------- |
| `AWS_ACCESS_KEY_ID`     | AWS Access Key for S3         | Yes      |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Key for S3         | Yes      |
| `AWS_REGION`            | AWS Region (e.g., eu-north-1) | Yes      |
| `AWS_S3_BUCKET_NAME`    | S3 Bucket Name                | Yes      |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1200px
- **Desktop**: > 1200px

## 🎨 Tech Stack

- **Frontend**: Next.js 15, React 18
- **Styling**: CSS Modules, Custom CSS
- **Animations**: GSAP (GreenSock)
- **Database**: SQLite
- **Cloud Storage**: AWS S3
- **Fonts**: Google Fonts (Montserrat, Raleway)
- **Icons**: Custom PNG icons

## 👨‍💻 Author

**Yvette** - [@Skywardd](https://github.com/Skywardd)

---

⭐ If you found this project helpful, please give it a star on GitHub!
