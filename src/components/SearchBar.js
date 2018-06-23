import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='container'>
      <div className='row card section'>
        <section className='input-field col s8'>
          <span className='material-icons prefix'>search</span>
          <input type='text' id='search-bar' placeholder='szukaj Tytułu, Lokazizacji lub Organizatora'
            onChange={props.onChangeSearch} />
          <label className='active' htmlFor='search-bar'>Znajdź wydarzenie</label>
        </section>
        <section className='input-field col s4'>
          <span className='material-icons prefix' >sort_by_alpha</span>
          <select name='cathegory' id='cathegory-f' defaultValue='def' onChange={props.onChangeSort}>
            <option value='def' disabled>wybierz...</option>
            <option value='startInt'>daty</option>
            <option value='localization'>miejsca</option>
            <option value='title'>tytułu</option>
            <option value='organizer'>organizatora</option>
          </select>
          <label htmlFor='cathegory-f' className=''>Sortuj według:</label>
        </section>
      </div>
    </div>
  )
}

export default SearchBar