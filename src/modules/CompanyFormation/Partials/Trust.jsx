import React from 'react'
import { BannerText, TrustSection } from '../style'
import TrustImg from '@assets/Image/trust.jpg'
import { MdOutlineDiamond } from 'react-icons/md'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'

const Trust = () => {
    return (
        <>
            <BannerText className='bannerText'><h1>Trust</h1> </BannerText>
            <TrustSection>
                <h2>Trust/Non Profit Company</h2>
                {/* <svg viewBox="0 0 500 200">
                <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#162d6d"></path>
                <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#2a4fb5" opacity="0.8"></path>
                <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#162d6d" opacity="0.5"></path>
            </svg> */}
                <div className='OnlyFlex'><MdOutlineDiamond /><p>Trust or a Non Profit Company can be registered under two categories in India</p></div>
                <div className='OnlyFlex'><MdOutlineDiamond /><p>First and most common form is registering it under trust Act, second form is  registering it as private limited company under companies act, 2013</p></div>
                <h2>Features and Difference between both form of organization</h2>
                <br />
                <div style={{ overflowX: 'auto' }}>
                    <table id="customers" >
                        <tr>
                            <th>Particulars</th>
                            <th>Trust</th>
                            <th>Non Profit Company</th>
                        </tr>
                        <tr>
                            <td>Incorporation</td>
                            <td>To be registered under the trust act</td>
                            <td>To be incorporated under the companies act, 2013</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Registration formalities are easy</td>
                            <td>Incorporation formalities are tedious, lot of documentation requirement</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Trust can be formed with one trustee member</td>
                            <td>Minimum two member is required to form a non profit company</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Cost effective ( stamp duty and registration charges as applicable in each state)</td>
                            <td>Costly affair (around Rs.10,000/-)+ Stamp duty as applicable in each state</td>
                        </tr>
                        <tr>
                            <td>Bank Account</td>
                            <td>Savings Bank Account or Current Account can be opened</td>
                            <td>Only Current Account can be opened</td>
                        </tr>
                        <tr>
                            <td>Annual returns</td>
                            <td>No Annual Returns to be submitted to any government body. Except Income Tax Return and in Case Foreign Currency inward Remittance approval under FCRA, Audit return to be submitted to Ministry of Home Affairs</td>
                            <td>Annual return to be submitted to Ministry of Company Affairs every year, Income Tax Return to be submitted and in Case Foreign Currency inward Remittance approval under FCRA, Audit return to be submitted to Ministry of Home Affairs</td>
                        </tr>
                        <tr>
                            <td>Audit</td>
                            <td>Audit becomes mandatory only on specific cases</td>
                            <td>Audit is mandatory for all companies</td>
                        </tr>
                        <tr>
                            <td>Addition or removal of trustee/ Member</td>
                            <td>Any new trustee to be added or removed new trust deed has to be prepared in the prescribed stamp paper and register it again</td>
                            <td>Addition and removal of members are easy at no additional cost</td>
                        </tr>
                        <tr>
                            <td>Advantage</td>
                            <td>Easy to incorporate and governance</td>
                            <td>1. Continuity of business, Separate Legal Status from the Members<br />
                                2. Stringent law<br />3.An independent governing body monitor the working of the company</td>
                        </tr>
                        <tr>
                            <td>Disadvantage</td>
                            <td>1. No outside governing body to monitor the working of the trust.<br />
                                2.No continuity in the organization. Any change in management has to be registered again</td>
                            <td>1.Higher operating cost compared to trust<br />
                                2.Lot of documentation requirements</td>
                        </tr>
                        <tr>
                            <td>Our Professional Charges</td>
                            <td>Rs.3,000/-</td>
                            <td>Rs.10,000/-</td>
                        </tr>
                        <tr>
                            <td>Our Services</td>
                            <td>Drafting of trust deed</td>
                            <td>1.DIN for proposed director<br />
                                2.Name approval- INC 1<br />
                                3.Govt approval to start a non profit organization as a private limited company<br />
                                4.Incorporation forms INC-7,DIR-12,INC-22<br />
                                5.PANCARD<br />
                                6.TAN</td>
                        </tr>
                    </table></div>

                <br />
                <p style={{ textIndent: '2em' }}>All govt charges will be collected on actual basis and bills from the govt organization will be provided to you. No hidden charges and no additional charges will be collected other than our professional charged mentioned above.</p>
            </TrustSection>
            <Footersection />
            <BacktoTopPage />
        </>
    )
}

export default Trust