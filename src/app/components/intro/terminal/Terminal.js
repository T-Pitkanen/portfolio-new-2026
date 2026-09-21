'use client';
import { useRef, useState } from 'react';
import styles from './terminal.module.css';

const INITIAL_LINES = [
  { type: 'prompt', text: 'cat about.md' },
  { type: 'out',    text: '# Business IT student' },
  { type: 'out',    text: '# Web dev degree → Denmark. Back home studying BIT.' },
  { type: 'out',    text: '# Now a trainee on an RDI project at VAMK, building a GenAI app.' },
  { type: 'blank' },
  { type: 'prompt', text: 'ls ./currently/' },
  { type: 'ok-warn', ok: 'llm-integration/  backend/  pgvector/', warn: 'user-pilot.todo' },
  { type: 'blank' },
  { type: 'prompt', text: 'echo $LOCATION' },
  { type: 'out',    text: 'Vaasa, Finland' },
  { type: 'blank' },
  { type: 'out',    text: "# type 'help' and hit enter" },
  { type: 'blank' },
];

const COMMANDS = {
  help:     { type: 'ok',      text: '> try: hello · cv · coffee · location · sauna · clear · reset' },
  hello:    { type: 'ok',      text: '♥ hi! reach me at tiia1.pitkanen@gmail.com' },
  sauna:    { type: 'warn',    text: '♨ löyly dispatched, enjoy.' },
  cv:       { type: 'confirm', text: 'download Tiia_Pitkanen_CV.pdf? [y/n]' },
  coffee:   { type: 'ok',      text: '☕ sending good vibes your way' },
  location: { type: 'ok',      text: '📍 Vaasa, Finland.' },
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
  const pendingRef = useRef(null);
  const [lines, setLines] = useState(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);

  function submit(raw) {
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
      setInput('');
      setTimeout(() => {
        const el = termBodyRef.current;
        if (el) el.scrollTop = el.scrollHeight;
      }, 0);
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
    setInput('');
    setTimeout(() => {
      const el = termBodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }

  function onKeyDown(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      submit(input);
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (e.key.length === 1) {
      e.preventDefault();
      setInput((prev) => (prev.length < 60 ? prev + e.key : prev));
    }
  }

  return (
    <>
      <span className={styles.sticker}>◒ currently learning Python </span>

      <div
        className={`hero-in ${styles.terminal}`}
        style={{ '--hero-delay': '0.16s' }}
        role="region"
        aria-label="Interactive terminal (optional)"
      >
        <div className={styles.termBar}>
          <span className={styles.termDots}>
            <span /><span /><span />
          </span>
          <span>~/tiia/whoami.sh</span>
        </div>
        <div
          className={styles.termBody}
          ref={termBodyRef}
          tabIndex={0}
          onMouseDown={(e) => {
            e.preventDefault();
            termBodyRef.current?.focus({ preventScroll: true });
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={onKeyDown}
        >
          <div aria-live="polite" aria-atomic="false">
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
          </div>
          <label className={styles.srOnly} htmlFor="terminal-input">
            Terminal command input. Type a command and press Enter. Try &apos;help&apos;.
          </label>
          <span className={styles.termLine}>
            <span className={styles.tPrompt}>tiia@vaasa</span>{' '}
            <span className={styles.tOut}>:~$</span>{' '}
            <span className={styles.tCmd}>
              {input}
              {focused && <span className={styles.caret} />}
            </span>
          </span>
        </div>
      </div>
      <span className={styles.termHint}>click terminal · type <code>reset</code> to restore · <code>help</code> for commands</span>
    </>
  );
}
