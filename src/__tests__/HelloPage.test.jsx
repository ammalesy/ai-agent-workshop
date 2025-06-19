import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HelloPage from '../components/HelloPage'

describe('HelloPage Component Unit Tests', () => {
  it('should render the welcome title correctly', () => {
    render(<HelloPage />)
    
    const title = screen.getByText('สวัสดีครับ')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-5xl', 'font-normal', 'text-neutral-700')
  })

  it('should display the Thai Bank branding', () => {
    render(<HelloPage />)
    
    const bankTitle = screen.getByText('ไทยแบงก์')
    expect(bankTitle).toBeInTheDocument()
    expect(bankTitle).toHaveClass('font-semibold', 'text-xl')
    
    const bankSubtitle = screen.getByText('Thai Bank')
    expect(bankSubtitle).toBeInTheDocument()
  })

  it('should render features section', () => {
    render(<HelloPage />)
    
    const featuresTitle = screen.getByText('คุณลักษณะ')
    expect(featuresTitle).toBeInTheDocument()
    
    const featuresSubtitle = screen.getByText('Features')
    expect(featuresSubtitle).toBeInTheDocument()
  })

  it('should display all feature items', () => {
    render(<HelloPage />)
    
    expect(screen.getByText('การพัฒนาที่รวดเร็ว')).toBeInTheDocument()
    expect(screen.getByText('React 18')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    expect(screen.getByText('Hot Reload')).toBeInTheDocument()
  })

  it('should render getting started section', () => {
    render(<HelloPage />)
    
    const startTitle = screen.getByText('เริ่มต้นใช้งาน')
    expect(startTitle).toBeInTheDocument()
    
    const startSubtitle = screen.getByText('Getting Started')
    expect(startSubtitle).toBeInTheDocument()
  })

  it('should have username input field', () => {
    render(<HelloPage />)
    
    const usernameInput = screen.getByPlaceholderText('กรอกชื่อของคุณ')
    expect(usernameInput).toBeInTheDocument()
    expect(usernameInput).toHaveClass('w-full', 'pl-12', 'pr-4', 'py-3')
  })

  it('should have action buttons', () => {
    render(<HelloPage />)
    
    const getStartedButton = screen.getByText('เริ่มต้นใช้งาน • Get Started')
    expect(getStartedButton).toBeInTheDocument()
    expect(getStartedButton).toHaveClass('w-full', 'bg-green-500', 'text-white')
    
    const docButton = screen.getByText('📚 เอกสารประกอบ • Documentation')
    expect(docButton).toBeInTheDocument()
  })

  it('should display welcome message', () => {
    render(<HelloPage />)
    
    const welcomeMsg = screen.getByText('ยินดีต้อนรับสู่โลกแห่งซากุระ')
    expect(welcomeMsg).toBeInTheDocument()
    
    const welcomeSubMsg = screen.getByText('Welcome to your elegant React Application')
    expect(welcomeSubMsg).toBeInTheDocument()
  })

  it('should have correct background styling', () => {
    const { container } = render(<HelloPage />)
    
    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass('min-h-screen', 'bg-neutral-50')
  })

  it('should display status indicators', () => {
    render(<HelloPage />)
    
    expect(screen.getByText('พร้อมใช้งาน')).toBeInTheDocument()
    expect(screen.getByText('อัปเดต')).toBeInTheDocument()
    expect(screen.getByText('ใช้งานได้')).toBeInTheDocument()
    expect(screen.getByText('เชื่อมต่อแล้ว')).toBeInTheDocument()
  })
})