import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BankingPage from '../components/BankingPage'

describe('BankingPage Component Unit Tests', () => {
  it('should render the Thai Bank branding', () => {
    render(<BankingPage />)
    
    const bankTitle = screen.getByText('ไทยแบงก์')
    expect(bankTitle).toBeInTheDocument()
    expect(bankTitle).toHaveClass('font-semibold', 'text-xl')
    
    const bankSubtitle = screen.getByText('Thai Bank')
    expect(bankSubtitle).toBeInTheDocument()
  })

  it('should display user information', () => {
    render(<BankingPage />)
    
    const userName = screen.getByText('คุณสมชาย จันทร์แสง')
    expect(userName).toBeInTheDocument()
    
    const userNameEn = screen.getByText('Somchai Jansaeng')
    expect(userNameEn).toBeInTheDocument()
  })

  it('should show balance information', () => {
    render(<BankingPage />)
    
    const balanceLabel = screen.getByText('ยอดเงินคงเหลือ • Available Balance')
    expect(balanceLabel).toBeInTheDocument()
    
    const balance = screen.getByText('฿1,575,050')
    expect(balance).toBeInTheDocument()
    expect(balance).toHaveClass('text-5xl', 'font-normal', 'text-neutral-700')
    
    const accountNumber = screen.getByText('เลขที่บัญชี: •••• 1234')
    expect(accountNumber).toBeInTheDocument()
  })

  it('should render send money section', () => {
    render(<BankingPage />)
    
    const sendMoneyTitle = screen.getByText('โอนเงิน')
    expect(sendMoneyTitle).toBeInTheDocument()
    
    const sendMoneySubtitle = screen.getByText('Send Money')
    expect(sendMoneySubtitle).toBeInTheDocument()
  })

  it('should have send money form fields', () => {
    render(<BankingPage />)
    
    // Recipient field
    const recipientLabel = screen.getByText('ผู้รับเงิน • Recipient')
    expect(recipientLabel).toBeInTheDocument()
    
    const recipientInput = screen.getByPlaceholderText('@username123')
    expect(recipientInput).toBeInTheDocument()
    
    // Amount field
    const amountLabel = screen.getByText('จำนวนเงิน • Amount (฿)')
    expect(amountLabel).toBeInTheDocument()
    
    const amountInput = screen.getByPlaceholderText('0')
    expect(amountInput).toBeInTheDocument()
    
    // Memo field
    const memoLabel = screen.getByText('หมายเหตุ • Memo (ไม่บังคับ)')
    expect(memoLabel).toBeInTheDocument()
    
    const memoInput = screen.getByPlaceholderText('กรุณาระบุวัตถุประสงค์ในการโอนเงิน')
    expect(memoInput).toBeInTheDocument()
  })

  it('should have send money button', () => {
    render(<BankingPage />)
    
    const sendButton = screen.getByText('ไปยังหน้าตรวจสอบ • Continue to Review')
    expect(sendButton).toBeInTheDocument()
    expect(sendButton).toHaveClass('w-full', 'bg-green-500', 'text-white')
  })

  it('should render recent transactions section', () => {
    render(<BankingPage />)
    
    const transactionsTitle = screen.getByText('ประวัติการทำรายการ')
    expect(transactionsTitle).toBeInTheDocument()
    
    const transactionsSubtitle = screen.getByText('Recent Transactions')
    expect(transactionsSubtitle).toBeInTheDocument()
  })

  it('should display transaction items', () => {
    render(<BankingPage />)
    
    // Check for specific transactions
    expect(screen.getByText('สมชาย จันทร์แสง')).toBeInTheDocument()
    expect(screen.getByText('@somchai_j')).toBeInTheDocument()
    expect(screen.getByText('ค่าอาหารกลางวัน 🍱')).toBeInTheDocument()
    
    expect(screen.getByText('สมหญิง ศรีสุข')).toBeInTheDocument()
    expect(screen.getByText('@somying_s')).toBeInTheDocument()
    expect(screen.getByText('ค่ากาแฟ ☕')).toBeInTheDocument()
    
    expect(screen.getByText('วิชัย รุ่งเรือง')).toBeInTheDocument()
    expect(screen.getByText('@wichai_r')).toBeInTheDocument()
    expect(screen.getByText('ค่าเช่าบ้าน 🏠')).toBeInTheDocument()
    
    expect(screen.getByText('มาลี ใจดี')).toBeInTheDocument()
    expect(screen.getByText('@malee_j')).toBeInTheDocument()
    expect(screen.getByText('ค่าช้อปปิ้ง 🛍️')).toBeInTheDocument()
  })

  it('should display transaction amounts', () => {
    render(<BankingPage />)
    
    expect(screen.getByText('฿1234')).toBeInTheDocument()
    expect(screen.getByText('฿250')).toBeInTheDocument()
    expect(screen.getByText('+฿500')).toBeInTheDocument()
    expect(screen.getByText('฿76')).toBeInTheDocument()
  })

  it('should show transaction status', () => {
    render(<BankingPage />)
    
    const statusElements = screen.getAllByText('เสร็จสิ้น')
    expect(statusElements).toHaveLength(4) // All transactions should be completed
  })

  it('should have view all transactions button', () => {
    render(<BankingPage />)
    
    const viewAllButton = screen.getByText('ดูรายการทั้งหมด • View All Transactions')
    expect(viewAllButton).toBeInTheDocument()
    expect(viewAllButton).toHaveClass('w-full', 'text-neutral-500')
  })

  it('should have correct background styling', () => {
    const { container } = render(<BankingPage />)
    
    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass('min-h-screen', 'bg-neutral-50')
  })

  it('should display notification badge', () => {
    render(<BankingPage />)
    
    const badge = screen.getByText('2')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-yellow-400', 'text-neutral-800', 'rounded-full')
  })
})