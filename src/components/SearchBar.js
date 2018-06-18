import React from 'react';
import Input from 'react-materialize/lib/Input';

const SearchBar = (props) => {
  return (
    <div className='container'>
      <div className='row card section'
        style={{ marginTop: '23px' }}>
        <div className='input-field col s8'>
          <span className='material-icons prefix'>search</span>
          <input type='text' id='search-bar' placeholder='szukaj Tytułu, Lokazizacji lub Organizatora'
            onChange={props.onChangeSearch} />
          <label className='active' htmlFor='search-bar'>Znajdź wydarzenie</label>
        </div>
        <Input s={4} type='select' label='Sortuj według:' icon='sort_by_alpha'
        defaultValue='def' onChange={props.onChangeSort}>
          <option value="def" disabled>wybierz</option>
          <option value='startInt'>daty</option>
          <option value='localization'>miejsca</option>
          <option value='title'>tytułu</option>
          <option value='organizer'>organizatora</option>
        </Input>
      </div>
    </div>
  )
}

export default SearchBar;