import React, { useCallback /* , useState */ } from 'react';
import clsx from 'clsx';
// import BrowserOnly from '@docusaurus/BrowserOnly';

import Play from '@site/static/img/play.svg';

import classes from './styles.module.css';

const LiveDemo: React.FC = () => {
  // const [code, setCode] = useState('');

  const handlePlayCode = useCallback(() => null, []);

  return (
    <div className={classes.container} id="live-demo">
      <div className={classes.content}>
        <h1>Live Demo</h1>
        <div className="row">
          <div className={classes.codeContainer}>
            <div className={classes.code} style={{ width: '30vw' }}>
              {/* <BrowserOnly>
                {() => {
                  require('ace-builds/webpack-resolver');
                  const AceEditor = require('react-ace').default;
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
              </BrowserOnly> */}
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
            <div
              className={classes.code}
              style={{ width: '20vw', padding: '15px 20px' }}
            >
              <span>&gt; 15</span>
            </div>
            <span>Output (Taylor)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LiveDemo };
