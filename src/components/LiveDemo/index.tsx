import React, { useCallback, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-terry';
import 'ace-builds/src-noconflict/theme-kuroir';

import Play from '@site/static/img/play.svg';

import clsx from 'clsx';
import classes from './styles.module.css';

const LiveDemo: React.FC = () => {
  const [code, setCode] = useState('');

  const handlePlayCode = useCallback(() => null, []);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Live Demo</h1>
        <div className="row">
          <div className={classes.code} style={{ width: '30vw' }}>
            <AceEditor
              style={{ borderRadius: 10 }}
              mode="terry"
              theme="kuroir"
              name="editor"
              onChange={value => setCode(value)}
              fontSize={16}
              width="100%"
              height="100%"
              value={code}
              setOptions={{
                tabSize: 2,
                showLineNumbers: true,
                dragEnabled: true,
                // firstLineNumber: -10,
                fontFamily: '"Fira code", "monospace"',
                scrollPastEnd: true,
                displayIndentGuides: true,
                highlightActiveLine: true,
                showGutter: true,
                printMargin: true,
                wrap: true,
              }}
            />
          </div>
          <button
            className={clsx(
              classes.button,
              'button',
              'button--primary',
              'no-trasparent-bg',
            )}
            onClick={handlePlayCode}
          >
            <Play width={32} height={32} />
          </button>
          <div className={classes.code} style={{ width: '15vw' }} />
        </div>
      </div>
    </div>
  );
};

export { LiveDemo };
