import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Content.scss';

const Content = ({ page }) => {
  return (
    <div className="content">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={page.name}
          timeout={500}
          classNames="page"
        >
          <div>
            <h1>
              {page.name}
            </h1>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={page.name}
          timeout={500}
          classNames="page"
        >
          {page.component}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Content;
