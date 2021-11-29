import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Play from '@site/static/img/play.svg';

import classes from './styles.module.css';

const LiveDemo: React.FC = () => {
  const [code, setCode] = useState(
    `tryte a = 6\ntryte b = 2\nStart\n  1a = a + b`,
  );
  const [output, setOutput] = useState('');

  const handlePlayCode = useCallback(() => {
    setOutput(_ => {
      if (code.includes('a + b'))
        return String(
          code
            .match(/= [0-9].*/g)
            ?.map(match => Number(match.replace(/= /g, '')))
            .reduce((prev, curr) => prev + curr),
        );

      switch (
        code
          .match(/= 0b[0-9N].*/g)
          ?.map(match => {
            switch (match.replace(/= 0b/g, '')) {
              case '10':
                return Number(1);
              case 'N0':
                return Number(-1);
              default:
                return Number(0);
            }
          })
          .reduce((prev, curr) => {
            if (prev === 0 || curr === 0) return 0;
            if (prev === curr) return -1;
            return 1;
          })
      ) {
        case -1:
          return (code.match(/1a = [0-9].*/g) || [''])[0].replace(/1a = /g, '');
        case 0:
          return (code.match(/1a = [0-9].*/g) || [''])[1].replace(/1a = /g, '');
        case 1:
          return (code.match(/1a = [0-9].*/g) || [''])[2].replace(/1a = /g, '');
        default:
          return '';
      }
    });
  }, [code]);

  return (
    <div className={classes.container} id="live-demo">
      <div className={classes.content}>
        <h1>Live Demo</h1>
        <div className={clsx(classes.codeRow, 'row')}>
          <div className={classes.codeContainer}>
            <div className={clsx(classes.code, classes.editor)}>
              <BrowserOnly>
                {() => {
                  const AceEditor = require('react-ace').default;
                  require('ace-builds/webpack-resolver');
                  require('ace-builds/src-noconflict/mode-terry');
                  require('ace-builds/src-noconflict/theme-kuroir');

                  return (
                    <AceEditor
                      style={{ borderRadius: 10 }}
                      mode="terry"
                      theme="kuroir"
                      name="editor"
                      onChange={value => setCode(value)}
                      fontSize={20}
                      width="100%"
                      height="100%"
                      value={code}
                      setOptions={{
                        tabSize: 2,
                        showLineNumbers: true,
                        dragEnabled: true,
                        // firstLineNumber: -10,
                        fontFamily: '"Fira code", monospace',
                        scrollPastEnd: true,
                        displayIndentGuides: true,
                        highlightActiveLine: true,
                        showGutter: true,
                        printMargin: true,
                        wrap: true,
                      }}
                    />
                  );
                }}
              </BrowserOnly>
            </div>
            <span>Input (Terry)</span>
          </div>
          <button
            className={clsx(
              classes.button,
              'button',
              'button--primary',
              'no-transparent-bg',
            )}
            onClick={handlePlayCode}
          >
            <Play width={32} height={32} />
          </button>
          <div className={classes.codeContainer}>
            <div className={clsx(classes.code, classes.output)}>
              <span>&gt; {output}</span>
            </div>
            <span>Output (Taylor)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LiveDemo };
