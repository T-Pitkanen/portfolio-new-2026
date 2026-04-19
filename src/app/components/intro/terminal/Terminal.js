'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './terminal.module.css';

const INITIAL_LINES = [
  { type: 'prompt', text: 'cat about.md' },
  { type: 'out',    text: '# Business IT student' },
  { type: 'out',    text: '# Web dev degree → Denmark. Back home studying BIT.' },
  { type: 'out',    text: '# Somewhere in the backend and data space.' },
  { type: 'blank' },
  { type: 'prompt', text: 'ls ./currently/' },
  { type: 'ok-warn', ok: 'indexing-query-opt.md  pgvector/', warn: 'internship-hunt.todo' },
  { type: 'blank' },
  { type: 'prompt', text: 'echo $LOCATION' },
  { type: 'out',    text: 'Vaasa, Finland · open to relocate (Uusimaa · Estonia)' },
  { type: 'blank' },
  { type: 'out',    text: "# type 'help' and hit enter" },
  { type: 'blank' },
];

const COMMANDS = {
  help:     { type: 'ok',      text: '> try: hire · cv · coffee · source · sauna · clear · reset' },
  hire:     { type: 'ok',      text: '♥ on my way — tiia1.pitkanen@gmail.com' },
  sauna:    { type: 'warn',    text: '♨ löyly dispatched, enjoy.' },
  cv:       { type: 'confirm', text: 'download Tiia_Pitkanen_CV.pdf? [y/n]' },
  coffee:   { type: 'ok',      text: '☕ sending good vibes your way' },
  location: { type: 'ok',      text: '📍 currently in Vaasa, Finland. Open to relocate.' },
};

function downloadCV() {
  const a = document.createElement('a');
  a.href = '/Tiia_Pitkanen_CV.pdf';
  a.download = 'Tiia_Pitkanen_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function Terminal() {
  const termBodyRef = useRef(null);
  const inputRef = useRef('');
  const pendingRef = useRef(null);
  const [lines, setLines] = useState(INITIAL_LINES);
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = (e) => {
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        const raw = inputRef.current;
        const cmd = raw.trim().toLowerCase();

        if (pendingRef.current === 'cv') {
          const accepted = cmd === 'y' || cmd === 'yes';
          pendingRef.current = null;
          setLines((prev) => {
            const next = [...prev, { type: 'prompt', text: raw }];
            if (accepted) next.push({ type: 'ok', text: '→ downloading Tiia_Pitkanen_CV.pdf…' });
            else next.push({ type: 'out', text: 'cancelled.' });
            next.push({ type: 'blank' });
            return next;
          });
          if (accepted) downloadCV();
          inputRef.current = '';
          setInput('');
          return;
        }

        setLines((prev) => {
          if (cmd === 'clear') return [];
          if (cmd === 'reset') return INITIAL_LINES;
          const next = [...prev, { type: 'prompt', text: raw }];
          if (cmd === '') return next;
          if (COMMANDS[cmd]) next.push(COMMANDS[cmd]);
          else next.push({ type: 'out', text: `command not found: ${cmd}` });
          if (COMMANDS[cmd]?.type !== 'confirm') next.push({ type: 'blank' });
          return next;
        });
        if (cmd === 'cv') pendingRef.current = 'cv';
        inputRef.current = '';
        setInput('');
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        inputRef.current = inputRef.current.slice(0, -1);
        setInput(inputRef.current);
        return;
      }

      if (e.key.length === 1) {
        inputRef.current = (inputRef.current + e.key).slice(0, 60);
        setInput(inputRef.current);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const el = termBodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, input]);

  return (
    <>
      <span className={styles.sticker}>◒ currently learning PowerBI </span>

      <div className={`reveal ${styles.terminal}`} data-delay="1">
        <div className={styles.termBar}>
          <span className={styles.termDots}>
            <span /><span /><span />
          </span>
          <span>~/tiia/whoami.sh</span>
        </div>
        <div className={styles.termBody} ref={termBodyRef}>
          {lines.map((line, i) => {
            if (line.type === 'blank') return <span key={i} className={styles.termLine}>&nbsp;</span>;
            if (line.type === 'prompt') return (
              <span key={i} className={styles.termLine}>
                <span className={styles.tPrompt}>tiia@vaasa</span>{' '}
                <span className={styles.tOut}>:~$</span>{' '}
                <span className={styles.tCmd}>{line.text}</span>
              </span>
            );
            if (line.type === 'out')     return <span key={i} className={`${styles.termLine} ${styles.tOut}`}>{line.text}</span>;
            if (line.type === 'ok')      return <span key={i} className={`${styles.termLine} ${styles.tOk}`}>{line.text}</span>;
            if (line.type === 'warn')    return <span key={i} className={`${styles.termLine} ${styles.tWarn}`}>{line.text}</span>;
            if (line.type === 'confirm') return <span key={i} className={`${styles.termLine} ${styles.tWarn}`}>{line.text}</span>;
            if (line.type === 'ok-warn') return (
              <span key={i} className={styles.termLine}>
                <span className={styles.tOk}>{line.ok}</span>{'  '}
                <span className={styles.tWarn}>{line.warn}</span>
              </span>
            );
            return null;
          })}
          <span className={styles.termLine}>
            <span className={styles.tPrompt}>tiia@vaasa</span>{' '}
            <span className={styles.tOut}>:~$</span>{' '}
            <span className={styles.tCmd}>
              {input}
              <span className={styles.caret} />
            </span>
          </span>
        </div>
      </div>
      <span className={styles.termHint}>type <code>reset</code> to restore · <code>help</code> for commands</span>
    </>
  );
}
