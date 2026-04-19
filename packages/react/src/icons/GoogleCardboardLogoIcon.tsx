import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" strokeWidth="8" className="draw-line"/><circle cx="80" cy="128" r="24" strokeWidth="8" className="draw-line"/><circle cx="176" cy="128" r="24" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" strokeWidth="12" className="draw-line"/><circle cx="80" cy="128" r="24" strokeWidth="12" className="draw-line"/><circle cx="176" cy="128" r="24" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" strokeWidth="16" className="draw-line"/><circle cx="80" cy="128" r="24" strokeWidth="16" className="draw-line"/><circle cx="176" cy="128" r="24" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" strokeWidth="24" className="draw-line"/><circle cx="82" cy="126" r="22" strokeWidth="24" className="draw-line"/><circle cx="174" cy="126" r="22" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-24,80a24,24,0,1,1-24-24A24,24,0,0,1,200,128ZM56,128a24,24,0,1,1,24,24A24,24,0,0,1,56,128Z" fill="currentColor"/></>,
  duotone: <><path d="M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96l26.34-26.34a8,8,0,0,1,11.32,0L160,200h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" opacity="0.2" fill="currentColor"/><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" strokeWidth="16" className="draw-line"/><circle cx="80" cy="128" r="24" strokeWidth="16" className="draw-line"/><circle cx="176" cy="128" r="24" strokeWidth="16" className="draw-line"/></>,
};

export const GoogleCardboardLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
