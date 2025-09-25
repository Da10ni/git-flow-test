import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect} from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Automation Done')).toBeInTheDocument()
  })
  
  it('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByText('count is 0')
    
    fireEvent.click(button)
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })
  
  it('renders basic content', () => {
    render(<App />)
    expect(screen.getByText('Automation Done')).toBeInTheDocument()
    expect(screen.getByText(/Edit/)).toBeInTheDocument()
  })
})