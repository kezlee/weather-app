import React from 'react';
import { SpaceBetween } from '../styles/Styles';
import styled, { DefaultTheme, css } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Loader from './Loader';

const SearchContainer = styled.section`
  margin-bottom: 24px;
`

const SearchInputWrapper = styled.div(
  ({theme}: DefaultTheme) => css`
    height: 40px;
    width: 100%;
    position: relative;
    
    ${theme.breakpoints.up('sm')} {
      max-width: 620px;
      height: 60px;
    }
  `
)

const SearchLabel = styled.label(
  ({theme}: DefaultTheme) => css`
    color: ${theme.searchLabel};
    position: absolute;
    top: 4px;
    left: 12px;
    font-size: 8px;

    ${theme.breakpoints.up('sm')} {
      left: 22px;
      top: 8px;
      font-size: 10px;
    }
  `
)

const SearchInput = styled.input(
  ({theme}: DefaultTheme) => css`
    padding: 18px 12px 8px;
    color: ${theme.text};
    background: ${theme.searchBoxBg};
    border: 0;
    outline: 0;
    border-radius: 8px;
    font-size: 12px;
    width: 100%;

    ${theme.breakpoints.up('sm')} {
      padding: 26px 22px 16px;
      font-size: 16px;
      border-radius: 20px;
    }
  `
)

const SearchButton = styled.button(
  ({theme}: DefaultTheme) => css`
    background: ${theme.searchBtnBg};
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10px;

    ${theme.breakpoints.down('sm')} {
      svg {
        font-size: 20px;
      }
    }

    ${theme.breakpoints.up('sm')} {
      width: 60px;
      height: 60px;
      border-radius: 20px;
    }

    &:disabled {
      opacity: 0.7;
      pointer-events: none;
    }
  `
)

interface SearchProps {
  country: string
  loading: boolean
  setCountry: React.Dispatch<React.SetStateAction<string>>
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const Search: React.FC<SearchProps> = ({
  country,
  loading,
  setCountry,
  setTriggerSearch,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const updateSearch = () => {
    if (country) {
      setTriggerSearch(true)
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateSearch();
    }
  };

  return (
    <SearchContainer>
      <SpaceBetween>
        <SearchInputWrapper>
          <SearchLabel>Country</SearchLabel>
          <SearchInput type="text" placeholder="Please enter city/country" value={country} onChange={handleInputChange} onKeyUp={handleKeyUp} />
        </SearchInputWrapper>
        <SearchButton aria-label="Search" onClick={() => updateSearch()} disabled={loading || country.length === 0}>
          {loading ? <Loader /> : <SearchIcon fontSize="large" />}
        </SearchButton>
      </SpaceBetween>
    </SearchContainer>
  );
}

export default Search;