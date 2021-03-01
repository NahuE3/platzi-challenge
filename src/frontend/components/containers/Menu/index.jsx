import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useStateValue } from '../../../context';
import RecipeCard from '../../RecipeCard';
import { FilterButton, FilterContainer, TitleContainer, RecipesContainer, Form, Loader } from './styles';

const FilterItem = ({ contain, category, setCategory }) => {
  const { theme } = useStateValue();
  let active;
  if(category !== '') {
    active = contain?.toLowerCase().includes(category?.toLowerCase()) ? 'active' : '';
  }
  return (
    <FilterButton className={`${theme} ${active}`} onClick={() => setCategory(active ? '' : contain)}>
      <p>{contain}</p>
    </FilterButton>
  )
};

const Menu = () => {
  const { theme, recipes } = useStateValue();
  const [category, setCategory] = useState('');
  const [text] = useTranslation('global');
  const { register, handleSubmit, watch, errors } = useForm();
  const [searchList, setSearchList] = useState(recipes.results);
  const searchWatch = watch('search', '');

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const list = recipes.results;
    if (!searchWatch && !category) {
      setSearchList(list);
    }
    if (category) {
      setSearchList(list.filter((l) => l.category.toLowerCase().includes(category.toLowerCase())));
    }
    if (category.toLowerCase().includes('fav')) {
      setSearchList(recipes.sort((a, b) => b.likes - a.likes));
    }
    if (searchWatch) {
      setSearchList(list.filter(({ name, country }) =>
        name.toLowerCase().includes(searchWatch.toLowerCase()) ||
        country.toLowerCase().includes(searchWatch.toLowerCase())));
    }
  }, [searchWatch, category])

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <FilterContainer>
          <FilterItem contain={text('menu.favorites')} category={category} setCategory={setCategory} />
          <FilterItem contain={text('menu.sea')} category={category} setCategory={setCategory} />
          <FilterItem contain={text('menu.vegetarian')} category={category} setCategory={setCategory} />
          <FilterItem contain={text('menu.steaks')} category={category} setCategory={setCategory} />
          <FilterItem contain={text('menu.more-filters')} category={category} setCategory={setCategory} />
        </FilterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='Searcher'>
            <p>{text('menu.searcher')}</p>
            <input
              id='Searcher'
              type='text'
              list='Recipes'
              name= 'search'
              placeholder={text('menu.searcher-input')}
              ref={register({ required: true })}
            />
            <datalist id='Recipes'>
              <option value='Receta 1' />
              <option value='Receta 2' />
              <option value='Receta 3' />
              <option value='Receta 4' />
              <option value='Receta 5' />
              <option value='Receta 6' />
            </datalist>
            <button type='button'>
              <BiSearchAlt />
            </button>
          </label>
        </Form>
      </div>
      <TitleContainer>
        <h1 className={theme}>{text('menu.our-recipes')}</h1>
      </TitleContainer>
      <RecipesContainer>
        {searchList.length === 0 && (
          <div style={{ display: 'grid', gap: '20px' }}>
            <Loader>
              <AiOutlineLoading3Quarters size={100} />
            </Loader>
            <h1>{text('menu.searcher-loader')}</h1>
          </div>
        )}
        {searchList?.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </React.Fragment>
        ))}
      </RecipesContainer>
    </section>
  );
}

export default Menu;