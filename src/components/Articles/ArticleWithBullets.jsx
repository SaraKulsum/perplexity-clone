import React from 'react'
import SourceLinkCopy from './SourceLinkCopy'

const ArticleWithBullets = React.forwardRef(({data}, ref) => {
    
  return (
    <div className=" flex flex-col gap-5" ref={ref} data-section-name={data.heading}>
              <h3 className="text-theme-dark font-[400]  text-3xl lg:text-4xl  ">
                {data.heading}
              </h3>
              <div className="content ">
                <p className="text-theme-dark ">{data.article}</p>
                 <ul className=" list-disc pl-8 text-theme-dark ">
                 {data.bullets.map(ele => (
                     <li className="my-2 subpixel-antialiased  text-theme-dark">{ele}</li>
                 ))}
                 
                 </ul>
                <SourceLinkCopy />
              </div>
            </div>
  )
})

export default ArticleWithBullets