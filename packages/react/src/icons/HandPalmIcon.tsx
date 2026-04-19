import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,60a20,20,0,0,1,40,0v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,76V44a20,20,0,0,1,40,0v68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M128,60a20,20,0,0,1,40,0v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,76V44a20,20,0,0,1,40,0v68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M128,60a20,20,0,0,1,40,0v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,76V44a20,20,0,0,1,40,0v68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M128,60a20,20,0,0,1,40,0v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,76V44a20,20,0,0,1,40,0v64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,60a20,20,0,0,1,40,0v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,76V44a20,20,0,0,1,40,0v68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const HandPalmIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
