import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { getSingeArticleService } from "../../services/articlesServices";

export const SingleArticlePage = () => {
  const { articleId } = useParams();
  // const articleId =
  //   "'You made it through winter': Anthony Scaramucci shares 3 reasons why he's still bullish on bitcoin";

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSingeArticleService(articleId)
      .then(setArticle)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [articleId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!article) {
    return <></>;
  }

  return (
    <>
      <img
        src={article.urlToImage || "/default_image.png"}
        alt={article.title}
        className="img-fluid mb-4"
        style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
      />
      <h1 className="mb-5">{article.title}</h1>

      <div>{article.description}</div>

      {/* <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} /> */}
    </>
  );
};
