'use client'

import { useState, useContext } from 'react';
import {ThemeContext} from '../context/ThemeProvider';

export default function Page() {
 const [text, setText] = useState('init text');
 const value = useContext(ThemeContext)
  return (
    <button onClick={() => {
      setText('change text')
    }}>{text}</button>
  )
}
