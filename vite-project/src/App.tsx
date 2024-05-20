import React from 'react'
import BasicForm from './components/BasicForm'
import ColorForm from './components/ColorForm'
import BirthdayForm from './components/BirthdayForm'
import ProgressForm from './components/ProgressForm'
import ProductForm from './components/ProductForm'
import SignUpForm from './components/SignUpForm'

export default function App() {
  return (
    <div>
      <BasicForm></BasicForm>
      <br />
      <ColorForm></ColorForm>
      brr

      <BirthdayForm></BirthdayForm>
      <br />
      <ProgressForm></ProgressForm>
      <br />
      <ProductForm></ProductForm>
      <br />
      <SignUpForm></SignUpForm>
    </div>
  )
}
