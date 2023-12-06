import React from 'react';
import { SpaceBetween } from '../styles/Styles';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled.section`
  margin-bottom: 112px;
`

const SearchInputWrapper = styled.div`
  max-width: 620px;
  width: 100%;
  height: 60px;
  position: relative;
`

const SearchLabel = styled.label`
  color: #FFFFFF66;
  position: absolute;
  top: 8px;
  left: 22px;
  font-size: 10px;
`

const SearchInput = styled.input`
  width: 100%;
  color: #ffffff;
  padding: 26px 22px 16px;
  background: #1A1A1A80;
  border: 0;
  outline: 0;
  border-radius: 20px;
  font-size: 16px;
`

const SearchButton = styled.button`
  background: #28124D;
  color: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: 0;
`

function Search() {
  return (
    <SearchContainer>
      <SpaceBetween>
        <SearchInputWrapper>
          <SearchLabel>Country</SearchLabel>
          <SearchInput />
        </SearchInputWrapper>
        <SearchButton aria-label="Search">
          <SearchIcon fontSize="large" />
        </SearchButton>
      </SpaceBetween>
    </SearchContainer>
  );
}

export default Search;