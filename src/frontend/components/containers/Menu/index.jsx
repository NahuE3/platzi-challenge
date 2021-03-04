import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useStateValue } from '../../../context';
import RecipeCard from '../../RecipeCard';
import { FilterButton, FilterContainer, TitleContainer, RecipesContainer, Form, Loader } from './styles';
import useSearcher from '../../../hooks/useSearcher';
import useLanguage from '../../../hooks/useLanguage';
import useCategory from '../../../hooks/useCategory';

const FilterItem = ({ id, contain, category, setCategory }) => {
  const { theme } = useStateValue();
  let active;
  if(category !== 0) {
    active = id === category ? 'active' : '';
  }
  return (
    <FilterButton className={`${theme} ${active}`} onClick={() => setCategory(active ? '' : id)}>
      <p>{contain}</p>
    </FilterButton>
  )
};

const Menu = () => {
  const { theme, categories } = useStateValue();
  const [category, setCategory] = useState(0);
  const { getText } = useLanguage();
  const { register, handleSubmit, watch, errors } = useForm();
  const searchWatch = watch('search', '');
  const { searchList } = useSearcher({ text: searchWatch });
  const ref = useRef(null);
  const { categoryList, loading, final, error } = useCategory({ category, container: ref });

  const onSubmit = (data) => {
    document.location.href = `/recipe/${data.search}`;
  };

  return (
    <section ref={ref}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <FilterContainer>
          {categories.results.map((item) => (
            <React.Fragment key={item.id}>
              <FilterItem id={item.id} contain={item.name} category={category} setCategory={setCategory} />
            </React.Fragment>
          ))}
        </FilterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='Searcher'>
            <p>{getText('menu.searcher')}</p>
            <input
              id='Searcher'
              type='text'
              list='Recipes'
              name= 'search'
              placeholder={getText('menu.searcher-input')}
              ref={register({ required: true })}
            />

            <datalist id='Recipes'>
              {searchList?.slice(0, 5)?.map((item) => (
                <option key={item.id} value={item.name} />
              ))}
            </datalist>
            <button type='submit'>
              <BiSearchAlt />
            </button>
          </label>
        </Form>
      </div>
      <TitleContainer>
        <h1 className={theme}>{getText('menu.our-recipes')}</h1>
      </TitleContainer>
      <RecipesContainer>
        {(error) && (
          <div style={{ display: 'grid', gap: '20px' }}>
            <h1>No hay elementos en la categoria</h1>
          </div>
        )}
        {(categoryList.length !== 0) && (
          <>
            {categoryList?.map((recipe) => (
              <React.Fragment key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </React.Fragment>
            ))}
          </>
        )}
        {(categoryList.length !== 0 && loading) && (
          <div style={{ display: 'grid', gap: '20px', justifySelf: 'center', justifyItems: 'center', alignItems: 'center' }}>
            <Loader>
              <AiOutlineLoading3Quarters size={100} />
            </Loader>
            <h1>{getText('menu.searcher-loader')}</h1>
          </div>
        )}
      </RecipesContainer>
      {final && (
        <div style={{ display: 'grid', justifyItems: 'center', padding: '50px' }}>
          <h1>No hay mas que mostrar</h1>
        </div>
      )}
    </section>
  );
}

export default Menu;