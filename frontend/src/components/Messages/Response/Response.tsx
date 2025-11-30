import { useMemo } from "react";
import { mdToHtml } from "./lib/markdownToHtml";

import cls from "./Response.module.scss";

interface ResponseProps {
  content: string
}

export const Response: React.FC<ResponseProps> = ({ content }) => {
  const rendered = useMemo(() => {
    try {
      return mdToHtml(content)
    } catch (error) {
      console.log(error);
    }
  }, [content]);
  return (
    <article className={cls.response}>
      {rendered}
    </article>
  )
};
