import React, { useEffect, useState } from 'react'
import { BannerText, FfmcSectionstyle } from './Style'
import FormPage from './FormPage';
import Footersection from '@modules/Footer/Footersection';
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage';

const FFMCLicense = () => {

    const [Datat, setDatat] = useState([]);
    const [Datattwo, setDatattwo] = useState([]);

    useEffect(() => {
        const FFMCLicense = [
            {
                huu: '1 . The company should be registered with Registrar of Companies as per Companies Act, 2013 or any other erstwhile act such as companies Act, 1956.'
            },
            {
                huu: '2 . The company should have a net owned fund of Rs.25Lakhs to apply for a single branch license and Rs.50lakhs for a multiple branch license'
            },
            {
                huu: '3. Money Changing Activity should be one of the main activities mentioned in the object clause of the company.'
            },
            {
                huu: '4 . There should not be any case pending against the company with Department of enforcement of Department of Revenue Intelligence.'
            }
        ];
        setDatat(FFMCLicense);
    }, []);

    useEffect(() => {
        const FFMCLicenseDta = [
            {
                huu: 'Application form as per Annexure II prescribed by the Reserve Bank of India Master Circular on Memorandum of Instruction on Money Changing Activities'
            },
            {
                huu: 'Copy of Incorporation Certificate of the Company'
            },
            {
                huu: 'Copy of Commencement of the Business of the Company'
            },
            {
                huu: 'Copy of the last three years Audited Balance Sheet and Profit and Loss account wherever applicable'
            },
            {
                huu: 'Statutory Auditor Certificate of Net Owned Funds as on the date of application'
            },
            {
                huu: 'Copy of Memorandum of Association and Article of Association containing the main object clause of money changing business.'
            },
            {
                huu: 'Customer Information Report from the Bank. It Should be a Confidential Report addressed to the RBI in a sealed cover for the bank and all the key management personal'
            },
            {
                huu: 'Certified Copy of the Board Resolution to undertake money changing activity and to apply for the FFMC license with RBI'
            },
            {
                huu: 'A declaration that no proceeding against the company or any of the directors have been initiated by the Department of Enforcement or Department of Revenue Intelligence'
            },
            {
                huu: 'A declaration that a proper policy frame work will be placed for Anti Money Laundering- AML, Know Your Customer-KYC and Combating the Financing Terrorism-CFT as per the guidelines issued by the RBI and as amended from time to time before commencement of operation and after obtaining the FFMC license from RBI'
            },
        ];
        setDatattwo(FFMCLicenseDta);
    }, []);


    const Points = [
        {
            SubHead: 'What is a Full fledged money changer (FFMC) :',
            text: 'Entities which are authorised by Reserve Bank of India to do money changing business as per section 10 of Foreign Exchange Management Act , 1999.'
        },
        {
            SubHead: 'Can entities other than banks be a Full Fledged Money Changer:',
            text: 'Can entities other than banks be a Full Fledged Money Changer:'
        },
        {
            SubHead: 'What are the types of entities which can apply for a FFMC license in India:',
            text: 'Any company which are registered under the Companies Act, 2013 are eligible to apply for the FFMC license in India'
        },
        {
            SubHead: 'What are the conditions to be fulfilled to apply for FFMC License in India:',
            text: (
                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', }}>
                    {Datat.map(item => (
                        <span key={item.huu} style={{ marginBottom: '20px' }}>{item.huu}</span>
                    ))}
                </div>
            )
        },
        {
            SubHead: 'Can a company obtain franchisee license from an existing FFMC:',
            text: 'Yes any entity registered under the Companies A, having a minimum net owned fund of Rs.10Lakhs and one of the Main object clause of the company is money changing business can obtain a franchise license from an existing FFMC.'
        },
        {
            SubHead: 'Where should we apply for the FFMC License:',
            text: 'The application form along with the necessary documents should be submitted to the foreign exchange department of the regional office of Reserve Bank Of India where the registered office of the company is situated.'
        },
        {
            SubHead: 'What are the documents required to apply for the FFMC License in India:',
            text: (
                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                    {Datattwo.map((item, index) => (
                        <span key={item.huu} style={{ marginBottom: '20px' }}>{index + 1}. {item.huu}</span>
                    ))}
                </div>
            )
        },
        {
            SubHead: 'Does the License need to be renewed annually: ',
            text: 'Yes the license need to be renewed every year by providing the applicable documents to the Reserve Bank of India.'
        },
        {
            SubHead: 'Can a Franchisee do all the activities of the Authorised Dealer II Category:',
            text: 'No, the franchisee is allowed do only restricted money changing activities as per the master circular of RBI.'
        }
    ]


    return (
        <div>
            <BannerText className='bannerText'><h1 style={{ textAlign: 'center' }}>
                FFMC</h1>
            </BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>
            <FfmcSectionstyle>
                <h2>Full Fledge Money Changer License In India (FFMC)</h2><br />
                <p>Any company which intent to do a forex currency exchange activity or money changing activity in India have to obtain a Full Fledged Money Changer License from Reserve Bank of India. Rserve Bank of India annually publishes guidelines for Full Fledged Money Changer’s vide a master circular on Memorandum of Instruction on Money Changing Activities.</p><br />
                <p>All FFMC license holder in India and any company which intent to obtain the FFMC license in India are oblige to follow this circular and provision of Foreign Exchange Management Act, 1999.</p>

                {Points.map((pointData, index) => (
                    <div key={index} >
                        <h4>{index + 1} . {pointData?.SubHead} </h4>
                        <p style={{ textIndent: '0', marginLeft: '20px' }}>{pointData?.text}</p>
                    </div>
                ))}<br />
                <h4>Leave a reply</h4><br />
                <FormPage />
            </FfmcSectionstyle>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default FFMCLicense