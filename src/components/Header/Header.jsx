import React, { useEffect, useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../store/index';
import Style from './Header.module.scss'

export const Header = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const { globalState, setGlobalState } = useContext(Store)
  const handleSubmit = e => {
    e.preventDefault()
    setGlobalState({type: 'SET_TERM', payload: {term}})
    navigate(`/search?query=${term}`)
  }

  useEffect(() => {
    setTerm(globalState.term)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={Style.header}>
        <div className={Style.item}>
            <Link to='/'>Video Tube</Link>
        </div>
        <div className={Style.item}>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='検索' 
                onChange={e => setTerm(e.target.value)}
                value={term} 
                />
                <button type='submit'><FaSearch></FaSearch></button>
            </form>
        </div>
    </div>
  )
}