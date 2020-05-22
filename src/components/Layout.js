import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    {/* <Helmet title="Sasha Tran Blog | CSS" 
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}/> */}
    <Helmet>
      <title>Sasha Tran Blog | CSS</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* Google */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93030884-2"></script>
    
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer></Footer>
  </div>
)

export default TemplateWrapper
