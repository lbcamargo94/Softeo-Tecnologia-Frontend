import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
`

export const Box = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  width: 100%;
`

export const Text = styled.h3`
  margin: 1rem;
`

export const Button = styled.h3`
  box-shadow: 0.125rem 0.125rem 0rem 0rem #000000;
  align-items: center;
  background-color: #2cc0d3;
  border-radius: 0.5rem;
  border: 1px outset;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  height: 2rem;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 7.5rem;
`

export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`
