import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FileIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
