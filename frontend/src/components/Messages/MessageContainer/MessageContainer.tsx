import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { classNames } from "../../../utils/classNames";
import { MessageContext } from "../../../config/contexts/MessgeContext";
import { messagesApi } from "../../../services/messagesApi";
import { applyNdjson, joinWords, mdToHtml, readStream, splitIntoWords } from "../../../utils/stream";

import { Message } from "../MessageBubble/MessageBubble";

import cls from "./MessageContainer.module.scss";

export const MessageContainer: React.FC = () => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const messages = useContext(MessageContext);
  const [buffer, setBuffer] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [visible, setVisible] = useState(0);
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollIntoView();
    }
    const message = messages.messages.at(-1);
    const stream = async (prmt: string) => {
      const result = await messagesApi.post(prmt);
      readStream(result.body!, (line => {
        setBuffer(prev => {
          const next = applyNdjson(prev, line);
          setWords(splitIntoWords(next));
          return next;
        });
      }));
    }
    if (message) {
      stream(message);
    }
  }, [messages]);

  useEffect(() => {
    if (words.length) {
      const id = setInterval(() => {
        setVisible(v => Math.min(v + 1, words.length));
      }, 60);

      return () => clearInterval(id);
    }
  }, [words]);

  useEffect(() => {
    (async () => {
      const md = joinWords(words, visible);
      const html = await mdToHtml(md);
      setHtml(html);
    })();
  }, [visible, words]);

  const renderMessages = useCallback((messages: string[]) => {
    return messages.map(message => (
      <Message>
        {message}
      </Message>
    ))
  }, []);

  return (
    <div ref={messageContainerRef} className={classNames(cls["message-box"])}>
      {renderMessages(messages?.messages)}
      <div style={{ color: "#fff" }} dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
};