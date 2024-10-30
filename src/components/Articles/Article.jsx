import React from "react";
import SourceLinkCopy from "./SourceLinkCopy";

const Article = React.forwardRef(({ data }, ref) => {
  return (
    <div className="flex flex-col gap-5" ref={ref} data-section-name={data.heading}>
      <h3 className="text-theme-dark font-[400]  text-3xl lg:text-4xl ">{data.heading}</h3>
      <div className="content">
        {data.article.map(ele => (
        <p className="text-theme-dark mb-4">{ele}</p>

        ))}
        <SourceLinkCopy />
      </div>
    </div>
  );
});

export default Article;
