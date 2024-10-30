import React from "react";
import SourceLinkCopy from "./SourceLinkCopy";

const ArticleWithImg = React.forwardRef(({ data }, ref) => {
  return (
    <div className="text-theme-dark flex flex-col gap-6" ref={ref} data-section-name={data.heading}>
      <h3 className=" font-[400]  text-3xl lg:text-4xl  ">{data.heading}</h3>
      <div>
        <img
          src={data.src}
          alt="img"
          className="w-full  h-[18rem] rounded-lg transition-transform duration-300 hover:cursor-zoom-in hover:scale-[1.02] object-cover"
        />
      </div>
      <div>
        {data.article.map((ele) => (
          <p className="mb-4">{ele}</p>
        ))}

        <SourceLinkCopy />
      </div>
    </div>
  );
});

export default ArticleWithImg;
