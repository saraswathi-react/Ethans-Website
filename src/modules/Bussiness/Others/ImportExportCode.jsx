import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import { BannerText, TrustSection } from '@modules/CompanyFormation/style'
import Footersection from '@modules/Footer/Footersection'
import { Col, Row } from 'antd'
import React from 'react'
import { MdOutlineDiamond } from 'react-icons/md'

const ImportExportCode = () => {

  const Datas = [
    {
      txt: "Ethan’s provides mergers and acquisitions consulting services to public-sector and private-sector operating and investment companies.. Client engagements include merger planning, acquisition due diligence, post-merger integration, portfolio restructuring, and initial public offering strategy development. We also assist clients with reviewing divestitures, developing alliance and partnership strategies, and assessing investment opportunities. Our restructuring consultants apply rigorous analytical frameworks, supported by lessons from leading global companies, to provide robust mergers and restructuring strategies that result in significant, sustainable changes in performance."
    },
    {
      txt: 'Mergers and Acquisitions are important factors and fundamental elements in the global business scenario. They are greatly useful for restructuring the strategies and maintaining a balance of form and formulation.'
    },
    {
      txt: "The entire M&A process is a cumbersome process that needs a lot of understanding as it undergoes a series of procedures that also includes legal requirements. The process includes a thorough analysis of the market, structuring techniques, powerful implementation, and executing the deal. The entire process requires a deep M&A analysis and assessment by qualified and experienced professionals."
    },
    {
      txt: "Mergers and acquisitions is involved with our clients at every stage of the merger and acquisition process. Ethan’s qualified professionals offer invaluable inputs and offer a supportive hand before and after the deal."
    }
  ]

  const acquisition = [
    {
      acqtin: 'Assessment of the business potential'
    },
    {
      acqtin: 'Company valuation'
    },
    {
      acqtin: 'Budgeting and controlling finances'
    },
    {
      acqtin: 'Brand valuation'
    },
    {
      acqtin: 'Preparing the agreement'
    },
    {
      acqtin: 'Structuring strategies'
    },
    {
      acqtin: 'Identification of possible threats and risks'
    },
    {
      acqtin: 'Structuring of tax deal'
    },
    {
      acqtin: 'Evaluation of policies'
    },
    {
      acqtin: 'Sale forecasting'
    },
    {
      acqtin: 'Budgeting and controlling finances'
    },
    {
      acqtin: 'Brand valuation'
    },
    {
      acqtin: 'Corporate training'
    },
    {
      acqtin: 'Implementation of new technologies'
    },
    {
      acqtin: 'Offering enhanced business knowledge'
    },
    {
      acqtin: 'Strategic planning'
    },
    {
      acqtin: 'Specific training on various important models'
    },
    {
      acqtin: 'Establishments of entities'
    },
    {
      acqtin: 'Handling both inbound and outbound transaction'
    },
  ]

  const DueDiligence = [
    {
      DueDiliData: 'Ethan provides companies with comprehensive due diligence reports and research services so they can better protect their projects (alliances), investments or acquisitions and make crucial business'
    },
    {
      DueDiliData: 'decisions. Our due diligence services focus on the most important parts of our business development process, including Investigative due diligence and analysis for new market entry.'
    },
    {
      DueDiliData: "When entering new markets, Ethan’s provides you with multi sourced information, assessing competitive and regulatory landscape as well as the cultural context that is essential for understanding all the potential risks:"
    }
  ]

  const potentialrisks = [
    {
      risksData: 'Identifying and evaluating partners'
    },
    {
      risksData: 'Analyzing regulatory and political aspects and the attitude toward outside investment'
    },
    {
      risksData: 'Analyzing decision making process (key influencers)'
    },
    {
      risksData: 'Due diligence services related to M&A and Compliance'
    },
  ]

  const individualsinvolved = [
    {
      IndividualsData: 'Evaluating the integrity of individuals (CEO, board of directors)—both personally and professionally'
    },
    {
      IndividualsData: 'Evaluating the quality of relationships with customers and partners'
    },
    {
      IndividualsData: 'Analyzing the quality of reported key financials.'
    },
  ]

  return (
    <div>
      <BannerText className='bannerText'><h1 style={{ textAlign: 'center' }}>Import Export Code (IEC)</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
      </svg>
      <TrustSection>
        <h2>CORPORATE RESTRUCTURING, MERGERS, AMALGAMATIONS, ARRANGEMENTS, ACQUISITIONS</h2><br />
        {Datas.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
          </Row>
        ))}<br />
        <h2>Ethan’s offer the following services with regard to merger and acquisition</h2><br />
        {acquisition.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.acqtin}</Col>
          </Row>
        ))}<br />
        <h2>Corporate Compliance & Due Diligence</h2><br />
        {DueDiligence.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            {/* <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col> */}
            <Col span={20} md={20} className='DiamtTxt'>{datain?.DueDiliData}</Col>
          </Row>
        ))}
        {potentialrisks.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.risksData}</Col>
          </Row>
        ))}<br />
        <div className='DiamtTxt' style={{ marginLeft: '20px' }}>Ethan’s offers due diligence services targeting the key issues of each transaction (acquisition, mergers, etc.) with special emphasis on the background, reputation, compliance and litigation history of companies and individuals involved:</div>
        {individualsinvolved.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.IndividualsData}</Col>
          </Row>
        ))}<br />
          <div className='DiamtTxt' style={{ marginLeft: '20px' }}>Corporate Compliance Services focused on helping companies remain compliant in the areas of corporate and institutional governance.</div>
      </TrustSection>
      <Footersection />
      <BacktoTopPage />
    </div >
  )
}

export default ImportExportCode