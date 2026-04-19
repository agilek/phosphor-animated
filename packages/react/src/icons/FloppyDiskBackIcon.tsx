import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="150" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,40.72V76a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FloppyDiskBackIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
