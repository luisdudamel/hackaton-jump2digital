import styled from "styled-components";

export const PricePlanStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 16px;
  height: 524px;
  width: 284.33px;
  background: #5a45f2;
  border: 2px solid var(--dark-text);
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 1;
  justify-content: center;
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

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const PlanPerks = styled.ul`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 215px;
  height: 208px;
  flex: none;
  order: 2;
  flex-grow: 0;
  list-style: none;
`;

export const PlanPerkIncluded = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 143px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;

  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const PlanPerkNotIncluded = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 143px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;

  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
