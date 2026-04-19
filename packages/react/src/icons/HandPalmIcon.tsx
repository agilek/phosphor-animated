import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,60a20,20,0,0,1,40,0v56" strokeWidth="8" className="draw-line"/><path d="M88,76V44a20,20,0,0,1,40,0v68" strokeWidth="8" className="draw-line"/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M128,60a20,20,0,0,1,40,0v56" strokeWidth="12" className="draw-line"/><path d="M88,76V44a20,20,0,0,1,40,0v68" strokeWidth="12" className="draw-line"/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M128,60a20,20,0,0,1,40,0v56" strokeWidth="16" className="draw-line"/><path d="M88,76V44a20,20,0,0,1,40,0v68" strokeWidth="16" className="draw-line"/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M128,60a20,20,0,0,1,40,0v56" strokeWidth="24" className="draw-line"/><path d="M88,76V44a20,20,0,0,1,40,0v64" strokeWidth="24" className="draw-line"/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v40" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,104v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80.67A48.08,48.08,0,0,0,128,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V104a16,16,0,0,1,32,0Z" fill="currentColor"/></>,
  duotone: <><path d="M168,116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0V44a20,20,0,0,1,40,0V60a20,20,0,0,1,40,0Z" opacity="0.2" fill="currentColor"/><path d="M128,60a20,20,0,0,1,40,0v56" strokeWidth="16" className="draw-line"/><path d="M88,76V44a20,20,0,0,1,40,0v68" strokeWidth="16" className="draw-line"/><path d="M128,176a40,40,0,0,1,40-40V116a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v44" strokeWidth="16" className="draw-line"/></>,
};

export const HandPalmIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
