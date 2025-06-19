import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PoemPage from '../components/PoemPage'

describe('PoemPage Component Unit Tests', () => {
  it('should render the page title correctly', () => {
    render(<PoemPage />)
    
    const title = screen.getByRole('heading', { name: 'กลอนดัง' })
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-4xl', 'font-bold', 'text-amber-800')
  })

  it('should display the main poem quote', () => {
    render(<PoemPage />)
    
    // Use getByRole to target the specific h2 element
    const mainQuote = screen.getByRole('heading', { level: 2 })
    expect(mainQuote).toBeInTheDocument()
    expect(mainQuote).toHaveClass('text-2xl', 'font-semibold', 'text-amber-800')
    expect(mainQuote).toHaveTextContent('"ไม่ต้องบินให้สูงอย่างใครเขา"')
  })

  it('should render the poem image with correct attributes', () => {
    render(<PoemPage />)
    
    const image = screen.getByRole('img', { name: 'Young boy smiling' })
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('w-64', 'h-64', 'object-cover', 'rounded-2xl')
    expect(image).toHaveAttribute('alt', 'Young boy smiling')
  })

  it('should display all four lines of the poem', () => {
    render(<PoemPage />)
    
    // Check for each line of the poem
    expect(screen.getByText('"ไม่ต้องบินให้สูงอย่างใครเขา')).toBeInTheDocument()
    expect(screen.getByText('จงบินเอาเท่าที่เราจะบินไหว')).toBeInTheDocument()
    expect(screen.getByText('ถ้าที่บินไม่จำเป็นต้องเหมือนใคร')).toBeInTheDocument()
    expect(screen.getByText('แค่บินไปให้ถึงฝันเท่านั้นพอ"')).toBeInTheDocument()
  })

  it('should render decorative elements', () => {
    const { container } = render(<PoemPage />)
    
    const decorativeElements = container.querySelector('.flex.justify-center.mt-8')
    expect(decorativeElements).toBeInTheDocument()
  })

  it('should have flying birds SVG elements', () => {
    const { container } = render(<PoemPage />)
    
    // Check for SVG elements (birds)
    const svgElements = container.querySelectorAll('svg')
    expect(svgElements).toHaveLength(3)
    
    // Check for bird animation classes
    const bird1 = container.querySelector('.animate-fly-bird-1')
    const bird2 = container.querySelector('.animate-fly-bird-2')
    const bird3 = container.querySelector('.animate-fly-bird-3')
    
    expect(bird1).toBeInTheDocument()
    expect(bird2).toBeInTheDocument()
    expect(bird3).toBeInTheDocument()
  })

  it('should have correct background gradient classes', () => {
    const { container } = render(<PoemPage />)
    
    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass(
      'min-h-screen',
      'bg-gradient-to-b',
      'from-amber-50',
      'to-orange-50',
      'relative',
      'overflow-hidden'
    )
  })

  it('should render custom style element for animations', () => {
    const { container } = render(<PoemPage />)
    
    const styleElement = container.querySelector('style')
    expect(styleElement).toBeInTheDocument()
    
    // Check if animation keyframes are included in the style
    const styleContent = styleElement?.textContent || ''
    expect(styleContent).toContain('@keyframes fly-bird-1')
    expect(styleContent).toContain('@keyframes fly-bird-2')
    expect(styleContent).toContain('@keyframes fly-bird-3')
  })

  it('should have correct content structure', () => {
    const { container } = render(<PoemPage />)
    
    // Check for main content container using container
    const contentContainer = container.querySelector('.container')
    expect(contentContainer).toBeInTheDocument()
    expect(contentContainer).toHaveClass('mx-auto', 'px-6', 'py-12', 'relative', 'z-10')
    
    // Check for card structure using container
    const cardContainer = container.querySelector('.max-w-4xl')
    expect(cardContainer).toBeInTheDocument()
  })

  it('should display descriptive text about the poem', () => {
    render(<PoemPage />)
    
    const description = screen.getByText('เป็นวลีที่ได้รับความนิยมในประเทศไทยช่วงนี้')
    expect(description).toBeInTheDocument()
    
    const poemIntro = screen.getByText('เป็นส่วนหนึ่งของบทกลอนที่ว่า')
    expect(poemIntro).toBeInTheDocument()
  })
})