import styled from "styled-components";

export const PricePlanStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 16px;
  width: 284.33px;
  height: 524px;
  background: #5a45f2;
  border: 2px solid var(--dark-text);
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 1;
  color: var(--light-text);
`;

export const PlanHeadingContainer = styled.div``;

export const PricePlanImage = styled.img``;

export const PlanTypeSubheading = styled.h3`
  width: 19px;
  height: 16px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: var(--light-text);
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PlanPriceHeading = styled.h2`
  width: 48px;
  height: 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--light-text);
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: -5px 0px;
`;

export const PlanPeriodicity = styled.h3`
  width: 57px;
  height: 16px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: var(--light-text);
  flex: none;
  order: 2;
  flex-grow: 0;
`;
