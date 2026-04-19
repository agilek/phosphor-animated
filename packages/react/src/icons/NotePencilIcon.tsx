import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 160 96 160 96 128 192 32 224 64 128 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="128 160 96 160 96 128 192 32 224 64 128 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="128 160 96 160 96 128 192 32 224 64 128 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="128 160 96 160 96 128 192 32 224 64 128 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,140.57V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h67.43" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Zm5.66-58.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 160 96 160 96 128 168 56 200 88 128 160" opacity="0.2" fill="currentColor"/><polygon points="128 160 96 160 96 128 192 32 224 64 128 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const NotePencilIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
