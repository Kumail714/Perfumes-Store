import React from 'react'
import FooterSection1 from './FooterSection1'
import FooterSection2 from './FooterSection2'
import FooterSection3 from './FooterSection3'
import { bgImage1 } from '../../Assets'
const Footer = () => {
  return (
    <div className=''  style={{ backgroundImage: `url(${bgImage1})` }}>
  <FooterSection1/>
  <FooterSection2/>
  <FooterSection3/>
    
    </div>
  )
}

export default Footer
