import styled, { css, DefaultTheme } from 'styled-components'
import { useTheme } from '@mui/system';

/**
 * Global base styles
 */
export const MainContainer = styled.main(
  ({theme}: DefaultTheme) => css`
    margin: 0 20px;

    ${theme.breakpoints.up('sm')} {
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
    }
  `
)

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

export const SpaceBetween = styled(FlexBox)`
  justify-content: space-between;
`

export const SpaceEvenly = styled(FlexBox)`
  justify-content: space-evenly;
`


