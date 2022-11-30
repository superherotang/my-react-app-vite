import { useState } from 'react'
import './App.css'
import TailwinDemo from './components/TailwinDemo'
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from './i18n/config';
import { useTranslation } from 'react-i18next';



function App() {
  const [count, setCount] = useState(0)
  i18n.use(LanguageDetector)
  const { t } = useTranslation();
  return (
    <div className='App'>
      <div>
        <h1>{t('language')}</h1>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

      <TailwinDemo />
    </div>
  )
}

export default App
