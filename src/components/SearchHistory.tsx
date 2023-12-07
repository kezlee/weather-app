import React from 'react';
import styled from 'styled-components';
import { Typography, List } from '@mui/material';
import { SpaceBetween, FlexBox } from '../styles/Styles';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { HistoryItem } from '../utils/interface';

const SearchHistoryContainer = styled.section`
  background: #1A1A1A4D;
  width: 100%;
  border-radius: 24px;
  padding: 23px 26px;
  margin-top: 10px;
`

const HistoryListItem = styled.div`
  background: #1A1A1A80;
  padding: 13px 21px;
  border-radius: 16px;
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
`

const ActionIcon = styled.button`
  border: 2px solid #FFFFFF66;
  color: #FFFFFF80;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background: transparent;
  cursor: pointer;
`

interface SearchHistoryProps {
  historyList: HistoryItem[]
  setHistoryList: React.Dispatch<React.SetStateAction<HistoryItem[]>>
  setCountry: React.Dispatch<React.SetStateAction<string>>
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>

}

const SearchHistory:React.FC<SearchHistoryProps> = ({historyList, setHistoryList, setCountry, setTriggerSearch}) => { 
  const deleteItem = (index: number) => {
    setHistoryList((prevHistoryList) =>
      prevHistoryList.filter((item, i) => i !== index)
    );
  }

  const updateSearch = (name: string) => {
    setCountry(name)
    setTriggerSearch(true)
  }
  return (
    <SearchHistoryContainer>
      <Typography mb={2}>Search History</Typography>
      <List>
        {historyList.map((item, index) => (
          index !== 0 &&
          <HistoryListItem key={item.name + index}>
            <SpaceBetween>
              <Typography>{item.name}, {item.country}</Typography>
              <FlexBox>
                <Typography sx={{fontSize: '14px', color: '#FFFFFF80',}}>{item.time}</Typography>
                <ActionIcon onClick={() => updateSearch(item.name)}>
                  <SearchIcon fontSize='small' />
                </ActionIcon>
                <ActionIcon onClick={() => deleteItem(index)}>
                  <DeleteIcon fontSize='small' />
                </ActionIcon>
              </FlexBox>
            </SpaceBetween>
          </HistoryListItem>
        ))}
      </List>
    </SearchHistoryContainer>
  );
}

export default SearchHistory;