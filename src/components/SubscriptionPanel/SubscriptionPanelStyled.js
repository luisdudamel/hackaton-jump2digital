import styled from "styled-components";

export const SubscriptionPanelStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 80px;
  gap: 16px;
  position: relative;
  width: 1045px;
  height: 684px;

  .price {
    &__plan {
      &--starter {
        background-color: var(--light-background);
        color: var(--dark-text);
        border: 2px solid #dae9ef;
        height: 476px;
        width: 284px;
        padding: 16px;

        img {
          align-self: center;
        }

        &--notIncludedPerk {
          opacity: 0.2;
        }
        &__header {
          margin-top: -15px;
        }

        button {
          background: var(--light-background);
          color: var(--dark-text);
          font-weight: 500;
          border: solid;
          border: 1px solid #5a45f2;
          width: 252px;
        }
      }
      &--pro {
        background-color: var(--dark-blue);
        color: var(--light-text);

        &--notIncludedPerk {
          opacity: 0.5;
        }
        &__header {
          margin-top: -15px;
        }
      }
      &--teams {
        background-color: var(--light-background);
        color: var(--dark-text);
        width: 284.33px;
        height: 516px;
        border: 2px solid #dae9ef;

        button {
          background: var(--dark-blue);
          color: var(--light-text);
          font-weight: 500;
          border: solid;
          border: 1px solid #5a45f2;
          margin-top: -30px;
        }
        &__header {
          margin-top: -15px;
        }

        ul {
          gap: 12px;
        }
      }
    }
  }
`;

export const SubscriptionPanelContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
