import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';


const sideBarHeaderStyles = 'defaultColor menuController';
const dashboardControlsStyles = 'menuController dashboard defaultColor';

const resize = 'resizeSideBar';

class SideBar extends Component {

  render() {

    const controlStyles = (elem) => {
      return (
        (elem === 'dashboard' && this.props.location.pathname === '/')
          ? dashboardControlsStyles
          : sideBarHeaderStyles
      );
    };

    return (
      <aside
        id="sidebar"
        className={classnames('sideBar',
          this.props.resize ? resize : '',
        )}
      >
        <section className={classnames('sideBarContainer',
          this.props.resize ? resize : '',
        )}>
          {
            this.props.sideBarConfig.map(config =>
              <section
                className="menuContainer"
                key={config.id}
              >
                <div
                  id={config.id}
                  data-open={(this.props.itemClick === config.id && this.props.focus === 'true')}
                  ref={this.props[config.ref]}
                  className={controlStyles(config.id)}
                  onClick={e => {
                    this.props.onMenuItemSelected(e);
                    this.props.onPageReset();
                  }}
                >
                  <div className="navigationIcons">{config.icon}</div>
                  <div className="menuControllerContainer">
                    <h2
                      className={classnames('sideHeader',
                        this.props.resize && 'sideHeaderTransition',
                      )}
                      data-header={config.id}
                    >
                      {config.heading}
                    </h2>
                  </div>
                  {
                    config.id !== 'dashboard' &&
                    <div className="arrowControls">
                      <i
                        className={classnames(
                          'material-icons',
                          'arrowController',
                          this.props.resize && 'arrowTransition',
                          this.props.arrowStyle === config.id
                            ? 'transformArrow'
                            : 'resetArrow',
                        )}
                      >
                        keyboard_arrow_down
                      </i>
                    </div>
                  }
                </div>
                {config.component}
              </section>)
          }
        </section>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  resize: state.resizeState.resizePage,
});
export default withRouter(connect(mapStateToProps)(SideBar));
