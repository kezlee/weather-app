import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import { Typography, List } from '@mui/material';
import { SpaceBetween, FlexBox, WeatherTypography, MobileOnly, DesktopOnly } from '../styles/Styles';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { HistoryItem } from '../utils/interface';

const SearchHistoryContainer = styled.section(
  ({theme}: DefaultTheme) => css`
    background: #1A1A1A4D;
    width: 100%;
    border-radius: 24px;
    padding: 22px 20px;
    margin-top: 20px;

    ${theme.breakpoints.up('sm')} {
      margin-top: 26px;
      padding: 23px 26px;
    }
`)

const HistoryListItem = styled.div(
  ({theme}: DefaultTheme) => css`
    background: #1A1A1A80;
    padding: 10px;
    border-radius: 16px;
    margin-bottom: 18px;

    ${theme.breakpoints.up('sm')} {
      padding: 13px 21px;
    }

    &:last-child {
      margin-bottom: 0;
    }
`)

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

const TimeStampTypography = styled.p(
  ({theme}: DefaultTheme) => css`
  font-size: 10px;
  color: #FFFFFF80;

  ${theme.breakpoints.up('sm')} {
    font-size: 14px;
  }
`)

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
      <WeatherTypography>Search History</WeatherTypography>
      {historyList && historyList.length > 1 ? 
      <List sx={{marginTop: '14px'}}>
        {historyList.map((item, index) => (
          index !== 0 &&
          <HistoryListItem key={item.name + index}>
            <SpaceBetween>
              <div>
                <WeatherTypography>{item.name}, {item.country}</WeatherTypography>
                <MobileOnly>
                  <Typography sx={{fontSize: '10px', color: '#FFFFFF80',}}>{item.time}</Typography>
                </MobileOnly>
              </div>

              <FlexBox>
                <DesktopOnly>
                  <Typography sx={{fontSize: '14px', color: '#FFFFFF80',}}>{item.time}</Typography>
                </DesktopOnly>
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
      :
      <Typography component="p" sx={{ fontSize: '14px', color: '#ccc', marginTop: '5px'}}>No record</Typography>
    }
      
    </SearchHistoryContainer>
  );
}

export default SearchHistory;