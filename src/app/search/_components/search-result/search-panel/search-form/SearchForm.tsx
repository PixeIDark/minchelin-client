import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { css } from '@/styled-system/css';
import { SearchParams } from '@/types/search';
import styles from '@/app/search/_components/search-result/search-panel/search-form/search-form.styles';

interface SearchFormProps {
  searchType: SearchParams['searchType'];
  sortBy: SearchParams['sort'];
}

function SearchForm({ searchType, sortBy }: SearchFormProps) {
  return (
    <form className={styles.form} action='/search'>
      <Input className={styles.input} placeholder='검색' name='text' variants='imaginary' />
      <input type='hidden' name='searchType' value={searchType} />
      <input type='hidden' name='sort' value={sortBy} />
      <button className={css({ w: '6' })} type='submit'>
        <Search size={24} className={css({ color: 'gray.700' })} />
      </button>
    </form>
  );
}

export default SearchForm;
