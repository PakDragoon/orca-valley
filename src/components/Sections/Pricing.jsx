import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Our competitive pricing options cater to your budget while ensuring top-quality software solutions.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="3,000 AED"
                title="Starter"
                text="Our Starter Plan is perfect for small projects and startups looking to get off the ground."
                offers={[
                  { name: "24/7 Customer Support", cheked: true },
                  { name: "APIs and 3rd-Party Services", cheked: true },
                  { name: "CI/CD Pipeline", cheked: true },
                  { name: "QA and Testing", cheked: false },
                  { name: "Dedicated Team", cheked: false },
                  { name: "Scalability", cheked: false },
                  { name: "Advanced Security Measures", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="5,000 AED"
                title="Basic"
                text="The Basic Plan offers more flexibility and resources for growing businesses."
                offers={[
                  { name: "24/7 Customer Support", cheked: true },
                  { name: "APIs and 3rd-Party Services", cheked: true },
                  { name: "CI/CD Pipeline", cheked: true },
                  { name: "QA and Testing", cheked: true },
                  { name: "Dedicated Team", cheked: true },
                  { name: "Scalability", cheked: false },
                  { name: "Advanced Security Measures", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="10,000 AED"
                title="Premium"
                text="Our Premium Plan is designed for enterprises and businesses requiring advanced solutions."
                offers={[
                  { name: "24/7 Customer Support", cheked: true },
                  { name: "APIs and 3rd-Party Services", cheked: true },
                  { name: "CI/CD Pipeline", cheked: true },
                  { name: "QA and Testing", cheked: true },
                  { name: "Dedicated Team", cheked: true },
                  { name: "Scalability", cheked: true },
                  { name: "Advanced Security Measures", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




