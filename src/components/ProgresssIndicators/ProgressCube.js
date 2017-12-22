import React from 'react';
import classnames from 'classnames';

import progressStyles from 'components/ProgresssIndicators/progressStyles';

const ProgressCube = () => (
  <div className={progressStyles['sk-cube-grid']}>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube1'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube2'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube3'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube4'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube5'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube6'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube7'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube8'])}></div>
    <div className={classnames(progressStyles['sk-cube'], progressStyles['sk-cube9'])}></div>
  </div>
)

export default ProgressCube;
