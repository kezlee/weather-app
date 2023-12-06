import styled from 'styled-components'

/**
 * Global base styles
 */
export const MainContainer = styled.main`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

export const SpaceBetween = styled(FlexBox)`
  justify-content: space-between;
`


