import styled, { css, DefaultTheme } from 'styled-components'

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

export const WeatherTypography = styled.p(
  ({theme}: DefaultTheme) => css`
    color: ${theme.text};
    font-size: ${theme.typography.pxToRem(14)};
    margin: 0;

    ${theme.breakpoints.up('sm')} {
      font-size: ${theme.typography.pxToRem(16)};
    }
`)

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

export const MobileOnly = styled.div(
  ({theme}: DefaultTheme) => css`
    display: block;

    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  `
)

export const DesktopOnly = styled.div(
  ({theme}: DefaultTheme) => css`
    display: none;

    ${theme.breakpoints.up('sm')} {
      display: block;
    }
  `
)
