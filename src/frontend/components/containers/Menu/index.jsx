import React, { useState } from 'react';
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
  const { categoryList } = useCategory({ category });
  const { searchList } = useSearcher({ text: searchWatch });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <FilterContainer>
          {categories.results.map((item) => (
            <React.Fragment key={item.id}>
              <FilterItem id={item.id} contain={item.name} category={category} setCategory={setCategory} />
            </React.Fragment>
          ))}
          {/* <FilterItem contain={getText('menu.sea')} category={category} setCategory={setCategory} />
          <FilterItem contain={getText('menu.vegetarian')} category={category} setCategory={setCategory} />
          <FilterItem contain={getText('menu.steaks')} category={category} setCategory={setCategory} />
          <FilterItem contain={getText('menu.more-filters')} category={category} setCategory={setCategory} /> */}
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
        <h1 className={theme}>{getText('menu.our-recipes')}</h1>
      </TitleContainer>
      <RecipesContainer>
        {categoryList.length === 0 && (
          <div style={{ display: 'grid', gap: '20px' }}>
            <Loader>
              <AiOutlineLoading3Quarters size={100} />
            </Loader>
            <h1>{getText('menu.searcher-loader')}</h1>
          </div>
        )}
        {categoryList?.map((recipe) => (
          <React.Fragment key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </React.Fragment>
        ))}
      </RecipesContainer>
    </section>
  );
}

export default Menu;