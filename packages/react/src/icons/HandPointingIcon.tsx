import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const HandPointingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
