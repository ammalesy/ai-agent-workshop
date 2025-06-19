import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'
import HelloPage from '../components/HelloPage'
import BankingPage from '../components/BankingPage'
import PoemPage from '../components/PoemPage'

// Helper function to render with router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('App Routes Snapshot Tests', () => {
  it('should render root route (/) correctly', () => {
    const { container } = renderWithRouter(<App />, { route: '/' })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render /hello route correctly', () => {
    const { container } = renderWithRouter(<App />, { route: '/hello' })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render /home route (BankingPage) correctly', () => {
    const { container } = renderWithRouter(<App />, { route: '/home' })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render /music route (PoemPage) correctly', () => {
    const { container } = renderWithRouter(<App />, { route: '/music' })
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Individual Components Snapshot Tests', () => {
  it('should render HelloPage component correctly', () => {
    const { container } = render(<HelloPage />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render BankingPage component correctly', () => {
    const { container } = render(<BankingPage />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render PoemPage component correctly', () => {
    const { container } = render(<PoemPage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Navigation Bar Snapshot Tests', () => {
  it('should render navigation with different active states', () => {
    // Test navigation when on different routes
    const routes = ['/', '/hello', '/home', '/music']
    
    routes.forEach(route => {
      const { container } = renderWithRouter(<App />, { route })
      const navigation = container.querySelector('nav')
      expect(navigation).toMatchSnapshot(`navigation-${route.replace('/', 'root')}`)
    })
  })
})