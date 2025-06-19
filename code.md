<!-- encoding: UTF-8 -->
<!-- charset: UTF-8 -->
**เวอร์ชัน**: 1.0  
**วันที่อัปเดตล่าสุด**: 19 มิถุนายน 2025  
**ภาษา**: ไทย/English

# Code Style Guide - Hello React App

## 🌸 Overview
This is a Thai-themed React application built with modern tools and bilingual design patterns. This guide outlines the coding standards and conventions used throughout the project.

## 🛠️ Tech Stack
- **React 18** - Latest React with functional components and hooks
- **Vite** - Fast development and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Vitest** - Testing framework
- **TypeScript/JavaScript** - ES6+ modules

## 📁 Project Structure
```
src/
├── components/           # Reusable components
│   ├── BankingPage.jsx
│   ├── HelloPage.jsx
│   └── PoemPage.jsx
├── assets/              # Static assets (images, icons)
├── __tests__/           # Test files
└── App.jsx              # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `green-500` to `green-700` (banking theme)
- **Neutral**: `neutral-50` to `neutral-800` (backgrounds, text)
- **Stone**: `stone-50` to `stone-800` (secondary backgrounds)
- **Accent Colors**: 
  - Success: `green-100`, `green-500`
  - Warning: `yellow-400`, `amber-500`
  - Error: `red-500`, `red-600`
  - Info: `blue-50`, `blue-500`

### Typography
- **Thai Text**: Always paired with English translation
- **Font Weights**: 
  - `font-normal` (400) - default body text
  - `font-medium` (500) - important labels
  - `font-semibold` (600) - headings
  - `font-bold` (700) - brand elements

### Spacing & Layout
- **Container**: `max-w-6xl mx-auto` for main content areas
- **Padding**: `p-6` for sections, `p-8` for cards
- **Gaps**: `space-x-4` for horizontal, `space-y-6` for vertical
- **Responsive**: Use `lg:grid-cols-2` for responsive layouts

## 📝 Coding Conventions

### 1. Component Structure
```jsx
// ✅ Good: Functional component with clear organization
import React from 'react'
import { Link } from 'react-router-dom'

const ComponentName = () => {
  // State and hooks at the top
  const [state, setState] = useState(initialValue)
  
  // Event handlers
  const handleEvent = () => {
    // logic here
  }
  
  // Data/constants
  const data = [
    // array items
  ]
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

### 2. Naming Conventions
- **Components**: PascalCase (`BankingPage`, `HelloPage`)
- **Files**: PascalCase for components (`BankingPage.jsx`)
- **Variables**: camelCase (`userName`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE or camelCase for objects
- **CSS Classes**: Use Tailwind utility classes

### 3. Import Organization
```jsx
// ✅ Good: Organized imports
import React from 'react'                    // React imports first
import { useState, useEffect } from 'react'  // React hooks
import { Link, useLocation } from 'react-router-dom'  // Third-party libraries
import ComponentName from './components/ComponentName'  // Local components
```

### 4. Bilingual Text Pattern
```jsx
// ✅ Good: Thai text with English translation
<div className="text-sm text-neutral-500 mb-3 font-normal">
  ยอดเงินคงเหลือ • Available Balance
</div>

// ✅ Good: Placeholders in Thai
<input
  type="text"
  placeholder="กรอกชื่อของคุณ"
  className="..."
/>

// ✅ Good: Comments in Thai context
<div>
  {/* Navigation Bar - Thai Theme */}
  <nav className="...">
</div>
```

## 🎭 UI Component Patterns

### 1. Page Layout Structure
```jsx
const PageComponent = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 shadow-md">
        {/* Header content */}
      </div>

      {/* Main Content Container */}
      <div className="p-6 max-w-6xl mx-auto">
        {/* Page content */}
      </div>
    </div>
  )
}
```

### 2. Card Component Pattern
```jsx
// ✅ Standard card design
<div className="bg-white rounded-lg p-8 shadow border border-neutral-200">
  {/* Card header with icon */}
  <div className="flex items-center space-x-4 mb-8">
    <div className="bg-green-50 text-green-500 rounded-lg w-12 h-12 flex items-center justify-center">
      🌸
    </div>
    <div>
      <h2 className="text-2xl font-normal text-neutral-700">ชื่อหัวข้อ</h2>
      <p className="text-sm text-neutral-500 font-normal">Subtitle</p>
    </div>
  </div>
  
  {/* Card content */}
</div>
```

### 3. Button Styles
```jsx
// ✅ Primary button
<button className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md">
  เริ่มต้นใช้งาน • Get Started
</button>

// ✅ Secondary button
<button className="w-full text-center bg-blue-50 text-blue-700 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-100 py-3 rounded-md font-medium transition-all duration-200">
  📚 เอกสารประกอบ • Documentation
</button>

// ✅ Navigation button with active state
<Link 
  to="/path"
  className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
    isActive ? 'bg-green-500 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
  }`}
>
  <span className="text-lg">🌸</span>
  <span className="text-sm font-medium">ป้ายกำกับ</span>
</Link>
```

### 4. Input Field Pattern
```jsx
// ✅ Standard input with icon
<div>
  <label className="block text-sm font-medium text-neutral-700 mb-3">
    ชื่อผู้ใช้ • Username
  </label>
  <div className="relative">
    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
      👤
    </span>
    <input
      type="text"
      placeholder="กรอกชื่อของคุณ"
      className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-neutral-50 font-normal"
    />
  </div>
</div>
```

### 5. Status Badge Pattern
```jsx
// ✅ Status indicators
<div className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-normal">
  พร้อมใช้งาน
</div>
```

## 🧪 Testing Conventions

### Test File Structure
- Place tests in `src/__tests__/` directory
- Name test files: `ComponentName.test.jsx`
- Snapshot tests: `ComponentName.snapshot.test.jsx`

### Test Patterns
```jsx
// ✅ Good test structure
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ComponentName from '../components/ComponentName'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('ComponentName', () => {
  test('renders correctly', () => {
    renderWithRouter(<ComponentName />)
    expect(screen.getByText(/expected text/i)).toBeInTheDocument()
  })
})
```

## 📱 Responsive Design

### Breakpoint Usage
- Use `lg:` prefix for desktop layouts
- Mobile-first approach with Tailwind
- Grid layouts: `grid lg:grid-cols-2 gap-8`

### Common Responsive Patterns
```jsx
// ✅ Responsive grid
<div className="grid lg:grid-cols-2 gap-8">
  {/* Content */}
</div>

// ✅ Responsive navigation
<div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
  {/* Navigation items */}
</div>
```

## 🌐 Internationalization (i18n)

### Text Display Pattern
```jsx
// ✅ Always show Thai • English
"ยอดเงินคงเหลือ • Available Balance"
"เริ่มต้นใช้งาน • Get Started"
"ประวัติการทำรายการ • Recent Transactions"

// ✅ Use appropriate emojis for context
"ค่าอาหารกลางวัน 🍱"
"ค่ากาแฟ ☕"
"ค่าเช่าบ้าน 🏠"
```

## 🚀 Performance Best Practices

### Component Optimization
```jsx
// ✅ Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Component content */}</div>
})

// ✅ Use useCallback for event handlers
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies])
```

### Image Optimization
- Place images in `src/assets/`
- Use appropriate formats (WebP, PNG)
- Implement lazy loading for large images

## 🔧 Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
```

### Git Commit Conventions
- Use descriptive commit messages in English
- Include Thai context in comments when needed
- Format: `feat: add new banking transaction component`

## 📋 Code Review Checklist

### Before Submitting PR
- [ ] Component follows naming conventions
- [ ] Bilingual text patterns are consistent
- [ ] Tailwind classes are used appropriately
- [ ] Responsive design is implemented
- [ ] Tests are written and passing
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] Accessibility considerations (alt text, ARIA labels)

### Accessibility Standards
```jsx
// ✅ Good accessibility
<button 
  aria-label="เริ่มต้นใช้งาน - Get Started"
  className="..."
>
  เริ่มต้นใช้งาน • Get Started
</button>

<img 
  src="./assets/image.png" 
  alt="คำอธิบายภาพ - Image description"
/>
```

## 🎯 Best Practices Summary

1. **Always use functional components** with hooks
2. **Maintain bilingual text** throughout the application
3. **Follow Tailwind utility patterns** for consistent styling
4. **Use semantic HTML** elements for better accessibility
5. **Implement proper error boundaries** for robust applications
6. **Write tests** for all components
7. **Optimize for mobile** with responsive design
8. **Use meaningful variable names** in both Thai and English contexts
9. **Keep components focused** and single-responsibility
10. **Document complex logic** with clear comments

---

**สร้างโดย:** ทีมพัฒนา Hello React App  
**Created by:** Hello React App Development Team  
**เวอร์ชัน:** 1.0.0 | **Version:** 1.0.0  
**อัปเดตล่าสุด:** มิถุนายน 2025 | **Last Updated:** June 2025