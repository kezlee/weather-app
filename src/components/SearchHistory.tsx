import React from 'react';
import styled from 'styled-components';
import { Typography, List } from '@mui/material';
import { SpaceBetween, FlexBox } from '../styles/Styles';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

const SearchHistoryContainer = styled.section`
  background: #1A1A1A4D;
  width: 100%;
  border-radius: 24px;
  padding: 23px 26px;
  margin-top: 10px;
`

const HistoryItem = styled.div`
  background: #1A1A1A80;
  padding: 13px 21px;
  border-radius: 16px;
`

const ActionIcon = styled.div`
  border: 2px solid #FFFFFF66;
  color: #FFFFFF80;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

function SearchHistory() {
  return (
    <SearchHistoryContainer>
      <Typography mb={2}>Search History</Typography>
      <List>
        <HistoryItem>
          <SpaceBetween>
            <Typography>Johor, MY</Typography>
            <FlexBox>
              <Typography sx={{fontSize: '14px', color: '#FFFFFF80',}}>01-09-2022 09:41am</Typography>
              <ActionIcon>
                <SearchIcon fontSize='small' />
              </ActionIcon>
              <ActionIcon>
                <DeleteIcon fontSize='small' />
              </ActionIcon>
            </FlexBox>
          </SpaceBetween>
        </HistoryItem>
      </List>
    </SearchHistoryContainer>
  );
}

export default SearchHistory;