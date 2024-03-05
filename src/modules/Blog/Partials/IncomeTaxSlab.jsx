import React from 'react'
import { BannerText, IncomeTaxStyle } from './Style'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import FormPage from './FormPage'

const IncomeTaxSlab = () => {

  
    return (
        <div>
            <BannerText className='bannerText'><h1 style={{ textAlign: 'center' }}>
                INCOME TAX SLAB AY 2019-20</h1>
            </BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>
            <IncomeTaxStyle>
                <h2>Income Tax Rates AY 2019-20/FY 2018-19 – Individuals Less Than 60 Years Old</h2><br />
                <div className='Tableresp'>
                    <table id="customers" >
                        <tr>
                            <th>Taxable Income</th>
                            <th>Tax Rate</th>
                        </tr>
                        <tr>
                            <td>Upto Rs. 2,50,000</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Rs. 2,50,000 to Rs.5,00,000</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <td>Rs.5,00,000 to Rs.10,00,000</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Above Rs. 10,00,000</td>
                            <td>30%</td>
                        </tr>

                    </table>
                </div><br />

                <h2>Income Tax Rates AY 2019-20/FY 2018-19 – Individuals Between  Than 60 Years and 80 Years Old</h2><br />
                <div className='Tableresp'>
                    <table id="customers" >
                        <tr>
                            <th>Taxable Income</th>
                            <th>Tax Rate</th>
                        </tr>
                        <tr>
                            <td>Upto Rs. 3,00,000</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Rs. 3,00,000 to Rs.5,00,000</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <td>Rs.5,00,000 to Rs.10,00,000</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Above Rs. 10,00,000</td>
                            <td>30%</td>
                        </tr>

                    </table>
                </div><br />

                <h2>Income Tax Rates AY 2019-20/FY 2018-19 – Individuals Above 80 Years Old</h2><br />
                <div className='Tableresp'>
                    <table id="customers" >
                        <tr>
                            <th>Taxable Income</th>
                            <th>Tax Rate</th>
                        </tr>
                        <tr>
                            <td>Upto Rs. 5,00,000</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Rs.5,00,000 to Rs.10,00,000</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Above Rs. 10,00,000</td>
                            <td>30%</td>
                        </tr>

                    </table>
                </div><br />

                <h2>Income Tax Rates For AY 2019-20/FY 2018-19  For Partnership, <div>Limited Liability Partnership (Llp) And Local Authority</div></h2><br />
                <p>For the Assessment year 2019-20, firms, LLP, Local Authority profits are taxable at the rate of 30%.</p>
                <br /><h4>Income Tax Rates For AY 2019-20/FY 2018-19  For Domestic Company And Foreign Company</h4><br />
                <div className='Tableresp'>
                    <table id="customers" >
                        <tr>
                            <th>Turnover or Gross Receipts  </th>
                            <th>Tax Rate</th>
                        </tr>
                        <tr>
                            <td>Turnover or Gross Receipts does not exceed 250 crores in FY 2016-17</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td>Turnover or Gross Receipts does exceed 250 crores in FY 2016-17</td>
                            <td>30%</td>
                        </tr>

                    </table>
                </div><br /><br />
                <h4>Leave a reply</h4><br />
               
                <FormPage />
            </IncomeTaxStyle>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default IncomeTaxSlab