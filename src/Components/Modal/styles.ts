import styled from 'styled-components'

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black_transparent};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 90%;
  max-width: 70rem;
  height: 60vh;

  border-radius: 1rem;

  @media (min-width: 768px) {
    height: 70vh;
  }
`
