import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row className="justify-content-center my-3" >
        <h2 style={{textAlign: "center"}}>events & updates</h2>
      </Row>
      <Row>
        <Col>
          <p>
            08/19 + GA how 2 code: for beginners
          </p>
          <p>
           09/05-07 + Hack-a-thon
          </p>
          <p>

          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage