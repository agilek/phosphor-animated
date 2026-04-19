import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="176" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="176" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="176" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="82" cy="126" r="22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="174" cy="126" r="22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="176" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const GoogleCardboardLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
