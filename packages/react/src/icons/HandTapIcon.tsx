import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,76a52,52,0,0,1,104,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M64,76a52,52,0,0,1,104,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M64,76a52,52,0,0,1,104,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M68,224,42.68,182a20,20,0,0,1,34.64-20L96,192V84a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,13.84-1.75,25-4,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,84a60,60,0,0,1,120,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M64,76a52,52,0,0,1,104,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HandTapIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
