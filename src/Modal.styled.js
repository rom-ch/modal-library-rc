import styled, { css } from "styled-components";

export const Dialog = styled.dialog`
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 500px;
  z-index: 1000;

  &::backdrop {
    background-color: hsl(0, 0%, 0%, 0.5);
  }

  & > svg {
    font-size: 5rem;
    margin: 0 auto;

    ${props => props.type === "success" && Success}
    ${props => props.type === "warning" && Warning}
    ${props => props.type === "danger" && Danger}
    ${props => props.type === "info" && Info}

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
    width: 100%;
    margin-inline: 0.5rem;
  }
`;

export const CloseIcon = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: var(--color-grey-400);
  font-size: 1.6rem;

  & svg {
    cursor: pointer;

    &:hover {
      color: var(--color-grey-600);
    }
  }
`;

export const Heading = styled.h2`
  margin-block: 0.5rem 1.5rem;
  color: rgb(84, 84, 84);
  font-size: 2rem;
  font-weight: 500;
`;

export const DialogContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Success = css`
  color: var(--color-success);
`;
export const Warning = css`
  color: var(--color-warning);
`;
export const Danger = css`
  color: var(--color-danger);
`;
export const Info = css`
  color: var(--color-info);
`;
