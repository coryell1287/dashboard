import React from 'react';
import Paper from 'material-ui/Paper';
import './ezBuilderStyles.css';

const ezBuilderStyles = {
  borderRadius: '2%',
  position: 'absolute',
  right: '94px',
  zIndex: '99',
  padding: '10px 15px',
};

const EZBuilder = () => {
  return (
    <Paper style={{ minHeight: '300px' }} zDepth={1}>
      <aside className="ez-builder-controls-wrapper">
        <section className="ez-builder-button-wrapper">
          <Paper style={ezBuilderStyles} className="ez-builder-controls" zDepth={1}>
            <article>
              <section className="ez-builder-first-section">
                <div className="handoff-selectors">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </section>
              <section>

              </section>
            </article>
          </Paper>
          <button className="accentColor ez-builder-button">
            <i className="fa fa-cogs"></i>
          </button>
        </section>
      </aside>
    </Paper>
  );
};

export default EZBuilder;
